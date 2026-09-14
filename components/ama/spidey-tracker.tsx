'use client'

import React from 'react'

export function SpideyTracker() {
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
        <h1 className="text-[#9cdcfe] text-xl md:text-3xl font-bold tracking-[0.2em] flex items-center gap-3">
          SPIDEY <SpiderEyes /> TRACKER
        </h1>
      </div>

      {/* 3. Sticky Hanging Spiderman (Swinging from top) */}
      <div className="relative flex flex-col items-center z-10 mt-[-4px] animate-[swing_4s_ease-in-out_infinite] origin-top drop-shadow-[0_0_10px_rgba(229,37,33,0.3)]">
        {/* Web String */}
        <div className="w-[3px] h-[30vh] md:h-[40vh] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)]"></div>
        
        {/* Upside Down Spiderman (Body + Head) */}
        <div className="mt-[-2px]">
          <SpideyPixelArt />
        </div>
      </div>

    </div>
  )
}

function SpiderEyes() {
  return (
    <div className="flex bg-[#e52521] border-2 border-black rounded-full p-1 w-8 h-8 items-center justify-center space-x-0.5">
      <div className="bg-white w-2.5 h-3 rounded-full border border-black transform -rotate-12"></div>
      <div className="bg-white w-2.5 h-3 rounded-full border border-black transform rotate-12"></div>
    </div>
  )
}

function SpideyPixelArt() {
  // A cleaner, more accurate SVG representation of the hanging pixel art Spiderman
  return (
    <svg width="60" height="75" viewBox="0 0 60 75" className="overflow-visible">
      {/* Web string anchor point inside SVG */}
      <line x1="30" y1="0" x2="30" y2="10" stroke="white" strokeWidth="3" />
      
      {/* Hanging Body (Upside Down) - Legs at top, head at bottom */}
      <g transform="translate(0, 10)">
        {/* Blue Legs/Sides */}
        <rect x="15" y="0" width="10" height="15" fill="#2d7dbc" stroke="black" strokeWidth="2" />
        <rect x="35" y="0" width="10" height="15" fill="#2d7dbc" stroke="black" strokeWidth="2" />
        
        {/* Red Torso */}
        <rect x="20" y="5" width="20" height="20" fill="#e52521" stroke="black" strokeWidth="2" />
        <circle cx="30" cy="15" r="4" fill="black" /> {/* Small back spider logo */}
        
        {/* Big Red Head */}
        <rect x="12" y="25" width="36" height="36" rx="8" fill="#e52521" stroke="black" strokeWidth="3" />
        
        {/* Big White Eyes with Black Outlines */}
        {/* Left Eye */}
        <path d="M 16 35 Q 26 30 28 45 Q 28 55 16 55 Z" fill="white" stroke="black" strokeWidth="3" />
        {/* Right Eye */}
        <path d="M 44 35 Q 34 30 32 45 Q 32 55 44 55 Z" fill="white" stroke="black" strokeWidth="3" />
      </g>
    </svg>
  )
}
