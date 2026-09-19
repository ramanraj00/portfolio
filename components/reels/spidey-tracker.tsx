'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

const FRONT_ASCII = [
  "00000000055000000000",
  "00000000055000000000",
  "00000001155110000000",
  "00000014455441000000",
  "00000144444444100000",
  "00001222444422210000",
  "00111222255222211100",
  "01331222111122213310",
  "01331221333312213310",
  "13331213333331213331",
  "01331221111112213310",
  "00112222222222221100",
  "00011111111111111000",
  "00122222222222222100",
  "01222222222222222210",
  "12211112222221111221",
  "12214441222214441221",
  "12144444111144444121",
  "12144444411444444121",
  "12144444411444444121",
  "12144444411444444121",
  "12214444411444441221",
  "01221444111144412210",
  "01222111222211122210",
  "00122222222222222100",
  "00012222222222221000",
  "00001111111111110000"
]

const SIDE_ASCII = [
  "00000000055000000000",
  "00000000055000000000",
  "00000001155110000000",
  "00000014455441000000",
  "00000144444444100000",
  "00001222444422210000",
  "00111222255222211100",
  "01331222111122213310",
  "01331221333312213310",
  "13331213333331213331",
  "01331221111112213310",
  "00112222222222221100",
  "00011111111111111000",
  "00122222222222222100",
  "01222222222222222210",
  "12222222222221111221",
  "12222222222214441221",
  "12222222221144444121",
  "12222222221444444121",
  "12222222221444444121",
  "12222222221444444121",
  "12222222221444441221",
  "01222222221144412210",
  "01222222222211122210",
  "00122222222222222100",
  "00012222222222221000",
  "00001222221111110000"
]

const COLOR_MAP: Record<string, string> = {
  '1': '#222222',
  '2': '#e53935',
  '3': '#1e88e5',
  '4': '#ffffff',
  '5': '#bdbdbd'
}

function SpideyPixelArt({ ascii, flipped = false }: { ascii: string[], flipped?: boolean }) {
  const width = ascii[0].length
  const height = ascii.length
  const stretchY = 1.35

  return (
    <svg 
      viewBox={`0 0 ${width} ${height * stretchY}`} 
      className="w-[45px] md:w-[55px] h-auto overflow-visible"
      style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
    >
      {ascii.map((row, y) => 
        row.split('').map((char, x) => {
          if (char === '0') return null;
          const isString = char === '5';
          return (
            <g key={`${x}-${y}`}>
              <rect 
                x={x} 
                y={y * stretchY} 
                width="1" 
                height={stretchY} 
                fill={isString ? (x === 9 ? '#ffffff' : '#e2e8f0') : COLOR_MAP[char]}
                opacity={isString ? "0.8" : "1"}
                rx={isString ? "0" : "0.1"}
              />
              {!isString && (
                <>
                  <rect x={x} y={y * stretchY} width="1" height={0.15} fill="#ffffff" opacity="0.4" rx="0.05" />
                  <rect x={x} y={y * stretchY + stretchY - 0.15} width="1" height={0.15} fill="#000000" opacity="0.5" rx="0.05" />
                  <rect x={x} y={y * stretchY} width={0.15} height={stretchY} fill="#ffffff" opacity="0.2" rx="0.05" />
                  <rect x={x + 1 - 0.15} y={y * stretchY} width={0.15} height={stretchY} fill="#000000" opacity="0.4" rx="0.05" />
                </>
              )}
            </g>
          )
        })
      )}
    </svg>
  )
}

export function SpideyTracker() {
  const [facing, setFacing] = useState<'front' | 'left' | 'right'>('left')

  // Refs for measuring real DOM positions
  const containerRef = useRef<HTMLDivElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const webSvgRef = useRef<SVGSVGElement>(null)
  const spideyRef = useRef<HTMLDivElement>(null)

  // Motion values for Spidey's drag offset
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  // Draw the web line from anchor to Spiderman
  const updateWebLine = useCallback(() => {
    if (!containerRef.current || !anchorRef.current || !webSvgRef.current || !spideyRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()
    const anchorRect = anchorRef.current.getBoundingClientRect()
    const spideyRect = spideyRef.current.getBoundingClientRect()

    // Anchor point = bottom-center of the title box
    const ax = anchorRect.left + anchorRect.width / 2 - containerRect.left
    const ay = anchorRect.bottom - containerRect.top

    // Spidey point = top-center of spiderman
    const sx = spideyRect.left + spideyRect.width / 2 - containerRect.left
    const sy = spideyRect.top - containerRect.top

    // Update the SVG to cover the full container
    const svg = webSvgRef.current
    svg.setAttribute('viewBox', `0 0 ${containerRect.width} ${containerRect.height}`)

    // Draw multiple strands (funnel web effect)
    const strands = svg.querySelectorAll('line')
    const spreadTop = 35 // How wide the web fans out at the anchor
    const spreadBottom = 3 // How tight at Spidey's end

    strands.forEach((strand, i) => {
      const t = (i - (strands.length - 1) / 2) / ((strands.length - 1) / 2) // -1 to 1
      const topX = ax + t * spreadTop
      const bottomX = sx + t * spreadBottom
      strand.setAttribute('x1', String(topX))
      strand.setAttribute('y1', String(ay))
      strand.setAttribute('x2', String(bottomX))
      strand.setAttribute('y2', String(sy))
    })

    // Draw cross rings
    const rings = svg.querySelectorAll('path')
    rings.forEach((ring, i) => {
      const progress = (i + 1) / (rings.length + 1)
      const midX = ax + (sx - ax) * progress
      const midY = ay + (sy - ay) * progress
      const currentSpread = spreadTop * (1 - progress) + spreadBottom * progress
      const sag = 8 * (1 - progress) // More sag near the top

      const leftX = midX - currentSpread
      const rightX = midX + currentSpread
      const controlY = midY + sag

      ring.setAttribute('d', `M ${leftX} ${midY} Q ${midX} ${controlY} ${rightX} ${midY}`)
    })
  }, [])

  // Subscribe to drag motion values
  useEffect(() => {
    const unsubX = dragX.on('change', updateWebLine)
    const unsubY = dragY.on('change', updateWebLine)
    
    // Initial draw + on resize
    const timer = setTimeout(updateWebLine, 50)
    window.addEventListener('resize', updateWebLine)
    
    return () => {
      unsubX()
      unsubY()
      clearTimeout(timer)
      window.removeEventListener('resize', updateWebLine)
    }
  }, [dragX, dragY, updateWebLine])

  // Drop-in entrance animation — bungee style
  useEffect(() => {
    // Stage 1: Slowly drop from behind the title box way down
    const dropSequence = async () => {
      // Start hidden behind the title
      dragY.set(-80)
      dragX.set(0)
      
      // Wait a moment for layout
      await new Promise(r => setTimeout(r, 300))
      
      // Stage 1: Slowly drop far below (1.5s ease-in)
      await animate(dragY, 180, { duration: 1.5, ease: [0.32, 0, 0.67, 0] }).then(() => {})
      
      // Stage 2: Spring back up to slightly above final position
      await animate(dragY, -30, { duration: 0.4, ease: 'easeOut' }).then(() => {})
      
      // Stage 3: Jiggle left-right
      await animate(dragX, 25, { duration: 0.15, ease: 'easeOut' }).then(() => {})
      await animate(dragX, -20, { duration: 0.15, ease: 'easeInOut' }).then(() => {})
      await animate(dragX, 12, { duration: 0.12, ease: 'easeInOut' }).then(() => {})
      await animate(dragX, -8, { duration: 0.1, ease: 'easeInOut' }).then(() => {})
      
      // Stage 4: Settle into final position
      await animate(dragX, 0, { duration: 0.3, ease: 'easeOut' }).then(() => {})
      await animate(dragY, 0, { duration: 0.5, ease: 'easeInOut' }).then(() => {})
    }
    
    dropSequence()
  }, [])

  // Face rotation
  useEffect(() => {
    let tick = 0
    const interval = setInterval(() => {
      tick++
      if (tick % 4 === 0) setFacing('left')
      else if (tick % 4 === 1) setFacing('front')
      else if (tick % 4 === 2) setFacing('right')
      else if (tick % 4 === 3) setFacing('front')
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full bg-black flex flex-col items-center overflow-hidden font-mono">
      
      {/* Mobile-only message */}
      <div className="md:hidden absolute bottom-[15%] left-0 w-full flex justify-center z-50 pointer-events-none">
        <div className="relative font-mono text-[11px] font-bold uppercase tracking-[0.25em] px-5 py-2.5 drop-shadow-[0_10px_20px_rgba(49,120,198,0.3)]">
          {/* Deep 3D Shadow Extrusion */}
          <div className="absolute inset-0 bg-[#040810] translate-y-[4px] border-[2px] border-black rounded-sm"></div>
          
          {/* Main Blue Box with 3D Retro Bevel */}
          <div className="absolute inset-0 bg-[#0c1a2c] border-[2px] border-black rounded-sm">
            {/* Inner bevel highlights/shadows */}
            <div className="absolute inset-0 border-t-[2px] border-l-[2px] border-[#54a0ff]"></div>
            <div className="absolute inset-0 border-b-[2px] border-r-[2px] border-[#153a66]"></div>
            {/* Inner cyan glow ring */}
            <div className="absolute inset-[2px] border-[1px] border-[#3178c6]/50"></div>
          </div>
          
          {/* 3D Red Pixel Corners */}
          <div className="absolute -top-[3px] -left-[3px] w-[8px] h-[8px] bg-[#e53935] border border-black shadow-[1px_2px_0px_rgba(0,0,0,1)]">
             <div className="absolute inset-0 border-t-[1px] border-l-[1px] border-[#ff6b68]"></div>
          </div>
          <div className="absolute -top-[3px] -right-[3px] w-[8px] h-[8px] bg-[#e53935] border border-black shadow-[1px_2px_0px_rgba(0,0,0,1)]">
             <div className="absolute inset-0 border-t-[1px] border-l-[1px] border-[#ff6b68]"></div>
          </div>
          <div className="absolute -bottom-[3px] -left-[3px] w-[8px] h-[8px] bg-[#e53935] border border-black shadow-[1px_2px_0px_rgba(0,0,0,1)]">
             <div className="absolute inset-0 border-t-[1px] border-l-[1px] border-[#ff6b68]"></div>
          </div>
          <div className="absolute -bottom-[3px] -right-[3px] w-[8px] h-[8px] bg-[#e53935] border border-black shadow-[1px_2px_0px_rgba(0,0,0,1)]">
             <div className="absolute inset-0 border-t-[1px] border-l-[1px] border-[#ff6b68]"></div>
          </div>
          
          {/* Text with solid shadow and blue glow */}
          <span className="relative z-10 text-white drop-shadow-[1px_2px_0px_rgba(0,0,0,1)] [text-shadow:0_0_8px_rgba(84,160,255,0.6)]">ONLY FOR DESKTOP</span>
        </div>
      </div>

      
      <style>{`
        /* Smooth transitions for hover */
        .leg-l-1, .leg-l-2, .leg-l-3, .leg-l-4,
        .leg-r-1, .leg-r-2, .leg-r-3, .leg-r-4 {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .leg-l-1 { transform-origin: 178px 90px; }
        .leg-l-2 { transform-origin: 172px 115px; transition-delay: 0.05s; }
        .leg-l-3 { transform-origin: 168px 148px; transition-delay: 0.1s; }
        .leg-l-4 { transform-origin: 172px 175px; transition-delay: 0.15s; }
        
        .leg-r-1 { transform-origin: 222px 90px; }
        .leg-r-2 { transform-origin: 228px 115px; transition-delay: 0.05s; }
        .leg-r-3 { transform-origin: 232px 148px; transition-delay: 0.1s; }
        .leg-r-4 { transform-origin: 228px 175px; transition-delay: 0.15s; }

        /* Hover states triggered when the parent SVG is hovered */
        svg:hover .leg-l-1 { transform: rotate(4deg) scale(1.12); }
        svg:hover .leg-l-2 { transform: rotate(1deg) scale(1.12); }
        svg:hover .leg-l-3 { transform: rotate(-1deg) scale(1.12); }
        svg:hover .leg-l-4 { transform: rotate(-4deg) scale(1.12); }
        
        svg:hover .leg-r-1 { transform: rotate(-4deg) scale(1.12); }
        svg:hover .leg-r-2 { transform: rotate(-1deg) scale(1.12); }
        svg:hover .leg-r-3 { transform: rotate(1deg) scale(1.12); }
        svg:hover .leg-r-4 { transform: rotate(4deg) scale(1.12); }
      `}</style>

      {/* Background Spider-Man Logo Silhouette (Insomniac style) — hover to reveal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: '8%' }}>
        <svg 
          viewBox="0 0 400 500" 
          className="w-[75%] md:w-[50%] h-auto pointer-events-auto cursor-pointer transition-all duration-700 ease-out opacity-[0.15] hover:opacity-[0.7] [filter:drop-shadow(2px_4px_0px_rgba(0,0,0,0.8))_drop-shadow(4px_8px_0px_rgba(0,0,0,0.5))]"
        >
          <defs>
            {/* Gradient for hover state */}
            <linearGradient id="spiderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e53935" />
              <stop offset="45%" stopColor="#ff5252" />
              <stop offset="55%" stopColor="#3178c6" />
              <stop offset="100%" stopColor="#1565c0" />
            </linearGradient>
            {/* 3D bevel highlight */}
            <linearGradient id="spiderHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Shadow/depth layer (offset down-right for 3D extrusion) */}
          <g fill="#0a0a0a" transform="translate(3, 5)">
            <path d="M 200 52 C 208 52 214 58 214 66 C 214 74 208 80 200 80 C 192 80 186 74 186 66 C 186 58 192 52 200 52 Z" />
            <path d="M 185 78 L 175 105 L 165 140 L 175 150 L 200 158 L 225 150 L 235 140 L 225 105 L 215 78 Z" />
            <path d="M 178 148 L 172 175 L 170 210 L 172 250 L 178 290 L 185 320 L 192 345 L 200 360 L 208 345 L 215 320 L 222 290 L 228 250 L 230 210 L 228 175 L 222 148 Z" />
            <path className="leg-l-1" d="M 178 90 C 160 70 130 40 100 15 C 95 11 88 12 85 18 C 82 24 90 28 95 25 C 120 48 148 72 170 98 Z" />
            <path className="leg-l-2" d="M 172 115 C 148 95 110 65 70 45 C 64 42 58 45 57 52 C 56 58 62 60 68 57 C 105 75 142 100 168 125 Z" />
            <path className="leg-l-3" d="M 168 148 C 140 138 95 120 45 115 C 38 114 34 120 36 126 C 38 132 44 132 50 130 C 95 132 138 145 165 155 Z" />
            <path className="leg-l-4" d="M 172 175 C 148 185 105 210 60 260 C 55 266 48 310 50 350 C 50 380 55 420 58 450 C 59 458 66 460 68 452 C 66 420 62 380 62 350 C 64 315 70 280 80 260 C 105 225 145 195 170 182 Z" />
            <path className="leg-r-1" d="M 222 90 C 240 70 270 40 300 15 C 305 11 312 12 315 18 C 318 24 310 28 305 25 C 280 48 252 72 230 98 Z" />
            <path className="leg-r-2" d="M 228 115 C 252 95 290 65 330 45 C 336 42 342 45 343 52 C 344 58 338 60 332 57 C 295 75 258 100 232 125 Z" />
            <path className="leg-r-3" d="M 232 148 C 260 138 305 120 355 115 C 362 114 366 120 364 126 C 362 132 356 132 350 130 C 305 132 262 145 235 155 Z" />
            <path className="leg-r-4" d="M 228 175 C 252 185 295 210 340 260 C 345 266 352 310 350 350 C 350 380 345 420 342 450 C 341 458 334 460 332 452 C 334 420 338 380 338 350 C 336 315 330 280 320 260 C 295 225 255 195 230 182 Z" />
          </g>

          {/* Main colored layer */}
          <g fill="url(#spiderGrad)">
            <path d="M 200 52 C 208 52 214 58 214 66 C 214 74 208 80 200 80 C 192 80 186 74 186 66 C 186 58 192 52 200 52 Z" />
            <path d="M 185 78 L 175 105 L 165 140 L 175 150 L 200 158 L 225 150 L 235 140 L 225 105 L 215 78 Z" />
            <path d="M 178 148 L 172 175 L 170 210 L 172 250 L 178 290 L 185 320 L 192 345 L 200 360 L 208 345 L 215 320 L 222 290 L 228 250 L 230 210 L 228 175 L 222 148 Z" />
            <path className="leg-l-1" d="M 178 90 C 160 70 130 40 100 15 C 95 11 88 12 85 18 C 82 24 90 28 95 25 C 120 48 148 72 170 98 Z" />
            <path className="leg-l-2" d="M 172 115 C 148 95 110 65 70 45 C 64 42 58 45 57 52 C 56 58 62 60 68 57 C 105 75 142 100 168 125 Z" />
            <path className="leg-l-3" d="M 168 148 C 140 138 95 120 45 115 C 38 114 34 120 36 126 C 38 132 44 132 50 130 C 95 132 138 145 165 155 Z" />
            <path className="leg-l-4" d="M 172 175 C 148 185 105 210 60 260 C 55 266 48 310 50 350 C 50 380 55 420 58 450 C 59 458 66 460 68 452 C 66 420 62 380 62 350 C 64 315 70 280 80 260 C 105 225 145 195 170 182 Z" />
            <path className="leg-r-1" d="M 222 90 C 240 70 270 40 300 15 C 305 11 312 12 315 18 C 318 24 310 28 305 25 C 280 48 252 72 230 98 Z" />
            <path className="leg-r-2" d="M 228 115 C 252 95 290 65 330 45 C 336 42 342 45 343 52 C 344 58 338 60 332 57 C 295 75 258 100 232 125 Z" />
            <path className="leg-r-3" d="M 232 148 C 260 138 305 120 355 115 C 362 114 366 120 364 126 C 362 132 356 132 350 130 C 305 132 262 145 235 155 Z" />
            <path className="leg-r-4" d="M 228 175 C 252 185 295 210 340 260 C 345 266 352 310 350 350 C 350 380 345 420 342 450 C 341 458 334 460 332 452 C 334 420 338 380 338 350 C 336 315 330 280 320 260 C 295 225 255 195 230 182 Z" />
          </g>

          {/* 3D Highlight/bevel overlay */}
          <g fill="url(#spiderHighlight)">
            <path d="M 200 52 C 208 52 214 58 214 66 C 214 74 208 80 200 80 C 192 80 186 74 186 66 C 186 58 192 52 200 52 Z" />
            <path d="M 185 78 L 175 105 L 165 140 L 175 150 L 200 158 L 225 150 L 235 140 L 225 105 L 215 78 Z" />
            <path d="M 178 148 L 172 175 L 170 210 L 172 250 L 178 290 L 185 320 L 192 345 L 200 360 L 208 345 L 215 320 L 222 290 L 228 250 L 230 210 L 228 175 L 222 148 Z" />
            <path className="leg-l-1" d="M 178 90 C 160 70 130 40 100 15 C 95 11 88 12 85 18 C 82 24 90 28 95 25 C 120 48 148 72 170 98 Z" />
            <path className="leg-l-2" d="M 172 115 C 148 95 110 65 70 45 C 64 42 58 45 57 52 C 56 58 62 60 68 57 C 105 75 142 100 168 125 Z" />
            <path className="leg-l-3" d="M 168 148 C 140 138 95 120 45 115 C 38 114 34 120 36 126 C 38 132 44 132 50 130 C 95 132 138 145 165 155 Z" />
            <path className="leg-l-4" d="M 172 175 C 148 185 105 210 60 260 C 55 266 48 310 50 350 C 50 380 55 420 58 450 C 59 458 66 460 68 452 C 66 420 62 380 62 350 C 64 315 70 280 80 260 C 105 225 145 195 170 182 Z" />
            <path className="leg-r-1" d="M 222 90 C 240 70 270 40 300 15 C 305 11 312 12 315 18 C 318 24 310 28 305 25 C 280 48 252 72 230 98 Z" />
            <path className="leg-r-2" d="M 228 115 C 252 95 290 65 330 45 C 336 42 342 45 343 52 C 344 58 338 60 332 57 C 295 75 258 100 232 125 Z" />
            <path className="leg-r-3" d="M 232 148 C 260 138 305 120 355 115 C 362 114 366 120 364 126 C 362 132 356 132 350 130 C 305 132 262 145 235 155 Z" />
            <path className="leg-r-4" d="M 228 175 C 252 185 295 210 340 260 C 345 266 352 310 350 350 C 350 380 345 420 342 450 C 341 458 334 460 332 452 C 334 420 338 380 338 350 C 336 315 330 280 320 260 C 295 225 255 195 230 182 Z" />
          </g>
        </svg>
      </div>

      {/* Pixel grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '4px 4px' }}
      />

      {/* Title Box — Exact pixel art PNG */}
      <div ref={anchorRef} className="relative mt-8 z-20">
        <img 
          src="/images/spidey-verse-title.png" 
          alt="Spidey Verse" 
          className="w-[300px] md:w-[400px] h-auto drop-shadow-[0_4px_20px_rgba(49,120,198,0.5)]"
        />
      </div>

      {/* Dynamic Web SVG — covers the full container, always connects anchor to Spidey */}
      <svg ref={webSvgRef} className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {/* 9 radial strands */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`strand-${i}`}
            x1="0" y1="0" x2="0" y2="0"
            stroke="white"
            strokeWidth={i === 4 ? 1.8 : Math.max(0.3, 1.2 - Math.abs(i - 4) * 0.2)}
            opacity={i === 4 ? 0.9 : Math.max(0.2, 0.7 - Math.abs(i - 4) * 0.12)}
          />
        ))}
        {/* 6 cross rings */}
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={`ring-${i}`}
            d="M 0 0 Q 0 0 0 0"
            fill="none"
            stroke="white"
            strokeWidth={0.4 + i * 0.1}
            opacity={0.2 + i * 0.08}
          />
        ))}
      </svg>

      {/* Draggable Spiderman */}
      <motion.div
        ref={spideyRef}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
        style={{ x: dragX, y: dragY }}
        className="relative mt-[15vh] z-20 cursor-grab active:cursor-grabbing flex flex-col items-center"
      >
        <div className="relative group hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          {/* Subtle 3D Y-rotation for head turning feel */}
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: facing === 'left' ? 'rotateY(-15deg)' : facing === 'right' ? 'rotateY(15deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Depth Layer 1 — Deep shadow for 3D extrusion */}
            <div className="absolute top-[8px] left-[0px] brightness-0 opacity-40 blur-[1px]">
              {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
              {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
              {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
            </div>
            {/* Depth Layer 2 — Mid extrusion */}
            <div className="absolute top-[5px] left-[0px] brightness-50">
              {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
              {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
              {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
            </div>
            {/* Depth Layer 3 — Near extrusion */}
            <div className="absolute top-[2px] left-[0px] brightness-75">
              {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
              {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
              {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
            </div>
            {/* Front Layer — Full brightness with glow */}
            <div className="relative z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]">
              {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
              {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
              {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function PixelSpiderFace() {
  // 8x8 pixel art spider face: R=red, W=white, B=blue, _=transparent
  const grid = [
    '___RR___',
    '__RRRR__',
    '_RWRRWR_',
    '_RRWWRR_',
    'RBRRRRBR',
    '_RRRRRR_',
    '__RRRR__',
    '___RR___',
  ]
  const colors: Record<string, string> = { R: '#e53935', W: '#ffffff', B: '#1e88e5' }
  
  return (
    <svg viewBox="0 0 8 8" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_6px_rgba(229,57,53,0.6)]">
      {grid.map((row, y) =>
        row.split('').map((char, x) => {
          if (char === '_') return null
          return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[char]} rx="0.1" />
        })
      )}
    </svg>
  )
}
