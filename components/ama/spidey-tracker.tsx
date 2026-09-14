'use client'

import React, { useState, useEffect } from 'react'

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
  '1': '#111111', // Black
  '2': '#e53935', // Red
  '3': '#1976d2', // Blue
  '4': '#eeeeee', // White
  '5': '#bdbdbd'  // Gray web string
}

function SpideyPixelArt({ ascii, flipped = false }: { ascii: string[], flipped?: boolean }) {
  const width = ascii[0].length
  const height = ascii.length
  
  // Stretch factor makes the pixels rectangular (taller than they are wide)
  // This perfectly preserves the 1:1 trace while matching the tall look of the original image!
  const stretchY = 1.35

  return (
    <svg 
      viewBox={`0 0 ${width} ${height * stretchY}`} 
      className="w-[120px] h-auto"
      style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
    >
      {ascii.map((row, y) => 
        row.split('').map((char, x) => 
          char !== '0' && (
            <rect 
              key={`${x}-${y}`} 
              x={x} 
              y={y * stretchY} 
              width="1" 
              height={stretchY} 
              fill={COLOR_MAP[char]}
              stroke={char === '5' ? 'none' : "rgba(0, 0, 0, 0.4)"}
              strokeWidth={char === '5' ? '0' : "0.12"}
              rx={char === '5' ? '0' : "0.05"}
            />
          )
        )
      )}
    </svg>
  )
}

export function SpideyTracker() {
  const [facing, setFacing] = useState<'front' | 'left' | 'right'>('left')

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
    <div className="relative w-full h-full bg-[#1c2128] flex flex-col items-center overflow-hidden font-mono">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] md:w-[100%] md:h-[100%] text-white fill-current stroke-current" strokeWidth="1">
          <path d="M45,25 C45,20 55,20 55,25 C58,35 55,45 55,45 C60,40 65,35 70,30 C72,25 78,22 85,25 L83,28 C78,25 74,28 72,32 C67,38 61,43 55,48 C55,55 55,60 55,60 C65,55 75,50 85,55 L83,58 C75,53 65,58 55,64 C55,70 53,75 53,75 C60,80 65,85 70,95 L67,97 C62,87 56,82 50,78 C44,82 38,87 33,97 L30,95 C35,85 40,80 47,75 C47,75 45,70 45,64 C35,58 25,53 17,58 L15,55 C25,50 35,55 45,60 C45,60 45,55 45,48 C39,43 33,38 28,32 C26,28 22,25 17,28 L15,25 C22,22 28,25 30,30 C35,35 40,40 45,45 C45,45 42,35 45,25 Z" />
        </svg>
      </div>

      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '4px 4px' }}
      ></div>

      <div className="relative mt-8 z-20 border-[3px] border-[#3178c6] bg-[#0d1621] px-6 py-2 rounded-sm shadow-[0_0_15px_rgba(49,120,198,0.5)]">
        <h1 className="text-[#89d5ff] text-2xl md:text-3xl font-bold tracking-[0.25em] flex items-center gap-3" style={{ textShadow: '2px 2px 0 #000' }}>
          SPIDEY <SpiderEyes /> TRACKER
        </h1>
      </div>

      <div className="relative flex flex-col items-center z-10 animate-[spidey-swing_4s_ease-in-out_infinite] origin-top drop-shadow-[0_0_10px_rgba(229,37,33,0.3)]">
        <div className="w-[12px] h-[30vh] md:h-[40vh] bg-[#bdbdbd] shadow-sm"></div>
        
        <div className="mt-0">
          {facing === 'front' && <SpideyPixelArt ascii={FRONT_ASCII} />}
          {facing === 'left' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={true} />}
          {facing === 'right' && <SpideyPixelArt ascii={SIDE_ASCII} flipped={false} />}
        </div>
      </div>

    </div>
  )
}

function SpiderEyes() {
  return (
    <div className="flex bg-[#e53935] border-[3px] border-[#111111] rounded-full p-1 w-10 h-10 items-center justify-center space-x-0.5">
      <div className="bg-[#eeeeee] w-3 h-3.5 rounded-full border-2 border-[#111111] transform -rotate-12"></div>
      <div className="bg-[#eeeeee] w-3 h-3.5 rounded-full border-2 border-[#111111] transform rotate-12"></div>
    </div>
  )
}
