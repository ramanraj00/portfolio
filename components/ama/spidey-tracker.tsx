'use client'

import React, { useState, useEffect } from 'react'

const FRONT_ASCII = [
  "000000000010000000000",
  "000000000010000000000",
  "000000001111100000000",
  "000000012222210000000",
  "000000012222210000000",
  "000000122212221000000",
  "000111122212221111000",
  "001333122222221333100",
  "013333312222213333310",
  "013333312111213333310",
  "013333121333121333310",
  "001111221313122111100",
  "000001221131122100000",
  "000001222111222100000",
  "000000112222211000000",
  "000001221111122100000",
  "000012222222222210000",
  "000122222222222221000",
  "001222111222111222100",
  "012221444121444122210",
  "012214444414444412210",
  "122214444414444412221",
  "122214444414444412221",
  "122214444414444412221",
  "122214444414444412221",
  "012214444414444412210",
  "012221444121444122210",
  "001222111222111222100",
  "000122222222222221000",
  "000012222222222210000",
  "000001122222221100000",
  "000000011111110000000"
]

const SIDE_ASCII = [
  "000000000010000000000",
  "000000000010000000000",
  "000000001111100000000",
  "000000012222210000000",
  "000000012222210000000",
  "000000122212221000000",
  "000111122212221111000",
  "001333122222221333100",
  "013333312222213333310",
  "013333312111213333310",
  "013333121333121333310",
  "001111221313122111100",
  "000001221131122100000",
  "000001222111222100000",
  "000000112222211000000",
  "000001221111122100000",
  "000012222222222210000",
  "000122222222222221000",
  "001222222222211122100",
  "012222222222144412210",
  "012222222221444441210",
  "122222222221444441221",
  "122222222221444441221",
  "122222222221444441221",
  "122222222221444441221",
  "012222222221444441210",
  "012222222222144412210",
  "001222222222211122100",
  "000122222222222221000",
  "000012222222222210000",
  "000001122222221100000",
  "000000011111110000000"
]

const COLOR_MAP: Record<string, string> = {
  '1': '#252525', // Black
  '2': '#ea3323', // Red
  '3': '#3b719f', // Blue
  '4': '#eef7fa'  // White
}

function SpideyPixelArt({ ascii, flipped = false }: { ascii: string[], flipped?: boolean }) {
  const width = ascii[0].length
  const height = ascii.length

  return (
    <svg 
      viewBox={`0 0 ${width} ${height}`} 
      className="w-[84px] h-[128px]"
      style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}
    >
      {ascii.map((row, y) => 
        row.split('').map((char, x) => 
          char !== '0' && <rect key={`${x}-${y}`} x={x} y={y} width="1.1" height="1.1" fill={COLOR_MAP[char]} />
        )
      )}
    </svg>
  )
}

export function SpideyTracker() {
  const [facing, setFacing] = useState<'front' | 'left' | 'right'>('left')

  useEffect(() => {
    // spidey-swing is 4s: 0% (+10deg, left), 50% (-10deg, right), 100% (+10deg, left)
    // 0s: left, 1s: front (moving right), 2s: right, 3s: front (moving left)
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
      {/* 1. Background Spider Logo (Faint & Massive) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[150%] h-[150%] md:w-[100%] md:h-[100%] text-white fill-current stroke-current" strokeWidth="1">
          {/* Main Body */}
          <path d="M45,25 C45,20 55,20 55,25 C58,35 55,45 55,45 C60,40 65,35 70,30 C72,25 78,22 85,25 L83,28 C78,25 74,28 72,32 C67,38 61,43 55,48 C55,55 55,60 55,60 C65,55 75,50 85,55 L83,58 C75,53 65,58 55,64 C55,70 53,75 53,75 C60,80 65,85 70,95 L67,97 C62,87 56,82 50,78 C44,82 38,87 33,97 L30,95 C35,85 40,80 47,75 C47,75 45,70 45,64 C35,58 25,53 17,58 L15,55 C25,50 35,55 45,60 C45,60 45,55 45,48 C39,43 33,38 28,32 C26,28 22,25 17,28 L15,25 C22,22 28,25 30,30 C35,35 40,40 45,45 C45,45 42,35 45,25 Z" />
        </svg>
      </div>

      {/* Grid Scanlines Overlay for retro feel */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '4px 4px' }}
      ></div>

      {/* 2. Top Banner / Header (SPIDEY TRACKER) */}
      <div className="relative mt-8 z-20 border-[3px] border-[#3178c6] bg-[#0d1621] px-6 py-2 rounded-sm shadow-[0_0_15px_rgba(49,120,198,0.5)]">
        <h1 className="text-[#89d5ff] text-2xl md:text-3xl font-bold tracking-[0.25em] flex items-center gap-3" style={{ textShadow: '2px 2px 0 #000' }}>
          SPIDEY <SpiderEyes /> TRACKER
        </h1>
      </div>

      {/* 3. Sticky Hanging Spiderman (Swinging from top) */}
      <div className="relative flex flex-col items-center z-10 mt-[-4px] animate-[spidey-swing_4s_ease-in-out_infinite] origin-top drop-shadow-[0_0_10px_rgba(229,37,33,0.3)]">
        {/* Web String */}
        <div className="w-[4px] h-[30vh] md:h-[40vh] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"></div>
        
        {/* Pixel Art Body + Head */}
        <div className="mt-[-8px]">
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
    <div className="flex bg-[#e52521] border-[3px] border-black rounded-full p-1 w-10 h-10 items-center justify-center space-x-0.5">
      <div className="bg-white w-3 h-3.5 rounded-full border-2 border-black transform -rotate-12"></div>
      <div className="bg-white w-3 h-3.5 rounded-full border-2 border-black transform rotate-12"></div>
    </div>
  )
}
