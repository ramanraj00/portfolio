'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useMotionValueEvent, animate } from 'framer-motion'

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
  '1': '#222222', // Soft black for 3D shadows
  '2': '#e53935', // Deep red
  '3': '#1e88e5', // Vibrant blue
  '4': '#ffffff', // Pure white
  '5': '#bdbdbd'  // Gray (handled dynamically)
}

function SpideyPixelArt({ ascii, flipped = false }: { ascii: string[], flipped?: boolean }) {
  const width = ascii[0].length
  const height = ascii.length
  const stretchY = 1.35

  return (
    <svg 
      viewBox={`0 0 ${width} ${height * stretchY}`} 
      className="w-[40px] md:w-[50px] h-auto overflow-visible"
      style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
    >
      {ascii.map((row, y) => 
        row.split('').map((char, x) => {
          if (char === '0') return null;
          const isString = char === '5';
          return (
            <g key={`${x}-${y}`}>
              {/* Base Color with Rounded Corners for Voxel feel */}
              <rect 
                x={x} 
                y={y * stretchY} 
                width="1" 
                height={stretchY} 
                fill={isString ? (x === 9 ? '#ffffff' : '#e2e8f0') : COLOR_MAP[char]}
                opacity={isString ? "0.8" : "1"}
                rx={isString ? "0" : "0.1"}
              />
              
              {/* 3D Voxel Bevels (Highlights and Shadows) */}
              {!isString && (
                <>
                  {/* Top Highlight */}
                  <rect x={x} y={y * stretchY} width="1" height={0.15} fill="#ffffff" opacity="0.4" rx="0.05" />
                  {/* Bottom Shadow */}
                  <rect x={x} y={y * stretchY + stretchY - 0.15} width="1" height={0.15} fill="#000000" opacity="0.5" rx="0.05" />
                  {/* Left Highlight */}
                  <rect x={x} y={y * stretchY} width={0.15} height={stretchY} fill="#ffffff" opacity="0.2" rx="0.05" />
                  {/* Right Shadow */}
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

  // Interactive Drag Physics
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(-140); // Start hidden for drop-in
  const webRef = useRef<HTMLDivElement>(null);
  const H = 150; // Base rest height of the web

  useEffect(() => {
    // Drop-in Entrance Animation
    animate(dragY, 0, { type: "spring", damping: 12, stiffness: 80 });
  }, []);

  const updateWeb = () => {
    const x = dragX.get();
    const y = dragY.get();
    const dist = Math.sqrt(x * x + (H + y) * (H + y));
    const scale = dist / H;
    const angle = -Math.atan2(x, H + y);
    
    // Completely bypass Framer Motion for the web to guarantee transformOrigin: top center
    if (webRef.current) {
      webRef.current.style.transform = `rotate(${angle}rad) scaleY(${scale})`;
    }
  };

  useMotionValueEvent(dragX, "change", updateWeb);
  useMotionValueEvent(dragY, "change", updateWeb);

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
    <div className="relative w-full h-full bg-black flex flex-col items-center overflow-hidden font-mono">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] md:w-[100%] md:h-[100%] text-white fill-current stroke-current" strokeWidth="1">
          <path d="M45,25 C45,20 55,20 55,25 C58,35 55,45 55,45 C60,40 65,35 70,30 C72,25 78,22 85,25 L83,28 C78,25 74,28 72,32 C67,38 61,43 55,48 C55,55 55,60 55,60 C65,55 75,50 85,55 L83,58 C75,53 65,58 55,64 C55,70 53,75 53,75 C60,80 65,85 70,95 L67,97 C62,87 56,82 50,78 C44,82 38,87 33,97 L30,95 C35,85 40,80 47,75 C47,75 45,70 45,64 C35,58 25,53 17,58 L15,55 C25,50 35,55 45,60 C45,60 45,55 45,48 C39,43 33,38 28,32 C26,28 22,25 17,28 L15,25 C22,22 28,25 30,30 C35,35 40,40 45,45 C45,45 42,35 45,25 Z" />
        </svg>
      </div>

      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '4px 4px' }}
      ></div>

      <div className="relative mt-8 z-20 border border-[#3178c6]/50 bg-gradient-to-b from-[#0d1621] to-[#050a0f] px-8 py-3 rounded-2xl shadow-[0_10px_30px_rgba(49,120,198,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-md">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#89d5ff] to-[#3178c6] text-2xl md:text-3xl font-extrabold tracking-[0.25em] flex items-center gap-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          SPIDEY <SpiderEyes /> TRACKER
        </h1>
      </div>

      {/* Interactive Physics Container */}
      <div className="w-full flex-1 overflow-hidden flex justify-center relative -mt-[40px] pt-[40px] z-10">
        
        {/* Zero-width center anchor for absolute positioning */}
        <div className="relative w-0 h-full flex flex-col items-center">
          
          {/* 1. Elastic Funnel Web (Math driven, completely bypassing Framer Motion for perfect anchor) */}
          <div
            ref={webRef}
            style={{ transformOrigin: "top center", transform: "rotate(0rad) scaleY(0)" }}
            className="absolute top-[20px] w-[60px] md:w-[80px] h-[150px] z-10 pointer-events-none"
          >
            <svg viewBox="0 0 100 200" preserveAspectRatio="none" className="w-full h-full opacity-90 drop-shadow-[0_0_2px_rgba(255,255,255,0.4)]">
               {/* Clean Straight Radial Lines converging to x=50, y=200 */}
               <line x1="0" y1="0" x2="47" y2="200" stroke="white" strokeWidth="0.4" opacity="0.3"/>
               <line x1="10" y1="0" x2="47.5" y2="200" stroke="white" strokeWidth="0.6" opacity="0.4"/>
               <line x1="20" y1="0" x2="48" y2="200" stroke="white" strokeWidth="0.8" opacity="0.5"/>
               <line x1="30" y1="0" x2="48.5" y2="200" stroke="white" strokeWidth="1" opacity="0.6"/>
               <line x1="40" y1="0" x2="49" y2="200" stroke="white" strokeWidth="1.2" opacity="0.7"/>
               <line x1="50" y1="0" x2="50" y2="200" stroke="white" strokeWidth="1.5" opacity="0.9"/>
               <line x1="60" y1="0" x2="51" y2="200" stroke="white" strokeWidth="1.2" opacity="0.7"/>
               <line x1="70" y1="0" x2="51.5" y2="200" stroke="white" strokeWidth="1" opacity="0.6"/>
               <line x1="80" y1="0" x2="52" y2="200" stroke="white" strokeWidth="0.8" opacity="0.5"/>
               <line x1="90" y1="0" x2="52.5" y2="200" stroke="white" strokeWidth="0.6" opacity="0.4"/>
               <line x1="100" y1="0" x2="53" y2="200" stroke="white" strokeWidth="0.4" opacity="0.3"/>

               {/* Clean Concentric Drooping Rings (Getting denser at the narrow tip) */}
               <path d="M 4 20 Q 50 35 96 20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
               <path d="M 8 40 Q 50 55 92 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
               <path d="M 12 65 Q 50 80 88 65" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4"/>
               <path d="M 17 90 Q 50 105 83 90" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5"/>
               <path d="M 22 115 Q 50 130 78 115" fill="none" stroke="white" strokeWidth="0.7" opacity="0.6"/>
               <path d="M 27 140 Q 50 155 73 140" fill="none" stroke="white" strokeWidth="0.7" opacity="0.6"/>
               <path d="M 33 165 Q 50 175 67 165" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7"/>
               <path d="M 39 185 Q 50 192 61 185" fill="none" stroke="white" strokeWidth="0.9" opacity="0.8"/>
               <path d="M 45 195 Q 50 198 55 195" fill="none" stroke="white" strokeWidth="1" opacity="0.9"/>
            </svg>
          </div>
          
          {/* 2. Draggable Spiderman */}
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.4} // Spring intensity! Higher = looser, bounces further
            style={{ x: dragX, y: dragY }}
            className="absolute top-[160px] z-20 cursor-grab active:cursor-grabbing flex flex-col items-center"
          >
            {/* Front Layer with Depth */}
            <div className="relative group hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
              {/* Depth Layer 1 (Bottom/Shadow) */}
              <div className="absolute top-[8px] left-[0px] brightness-0 opacity-40 blur-[1px]">
                {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
                {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
                {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
              </div>
              {/* Depth Layer 2 */}
              <div className="absolute top-[5px] left-[0px] brightness-50">
                {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
                {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
                {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
              </div>
              {/* Depth Layer 3 */}
              <div className="absolute top-[2px] left-[0px] brightness-75">
                {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
                {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
                {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
              </div>
              {/* Front Layer */}
              <div className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
                {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
                {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

function SpiderEyes() {
  return (
    <div className="flex bg-gradient-to-br from-[#ff5252] to-[#b71c1c] rounded-full p-1 w-10 h-10 items-center justify-center space-x-0.5 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_10px_rgba(229,37,33,0.5)] border border-[#ff8a80]">
      <div className="bg-gradient-to-b from-[#ffffff] to-[#cccccc] w-3 h-3.5 rounded-full shadow-[inset_0_-1px_3px_rgba(0,0,0,0.4),0_0_5px_rgba(255,255,255,0.8)] transform -rotate-12 border border-[#999]"></div>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#cccccc] w-3 h-3.5 rounded-full shadow-[inset_0_-1px_3px_rgba(0,0,0,0.4),0_0_5px_rgba(255,255,255,0.8)] transform rotate-12 border border-[#999]"></div>
    </div>
  )
}
