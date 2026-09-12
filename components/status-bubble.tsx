'use client'

import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'

export function StatusBubble() {
  const [showSmug, setShowSmug] = useState(false)

  useEffect(() => {
    // Switch state every 3.5 seconds
    const interval = setInterval(() => {
      setShowSmug((prev) => !prev)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-6 z-30 w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 transition-transform cursor-crosshair">
      {/* Speech Bubble SVG Base */}
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-lg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M 50 10
            A 40 40 0 1 0 21.7 78.3
            L 12 92
            L 28.5 83.5
            A 40 40 0 0 0 90 50
            A 40 40 0 0 0 50 10
            Z"
          fill="white"
          stroke="#1c1c1c"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>

      {/* Content Container (shifted slightly up/right to center inside the bubble arc) */}
      <div className="absolute inset-0 pb-2 pr-1 flex items-center justify-center">
        
        {/* SKILL ISSUE Text */}
        <div
          className={cn(
            "absolute flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            showSmug ? "opacity-0 scale-50 -rotate-12 blur-sm" : "opacity-100 scale-100 rotate-0 blur-0"
          )}
        >
          <span className="font-black text-[#1c1c1c] text-[0.65rem] sm:text-[0.85rem] leading-[1] tracking-tight">
            SKILL<br />ISSUE
          </span>
        </div>

        {/* Smug Face & Star */}
        <div
          className={cn(
            "absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            showSmug ? "opacity-100 scale-100 rotate-0 blur-0" : "opacity-0 scale-150 rotate-12 blur-sm"
          )}
        >
          {/* Face Elements */}
          <div className="flex flex-col items-center gap-[2px] mt-1 relative">
            <div className="flex gap-2 sm:gap-[10px]">
              {/* Left Eye */}
              <div className="w-[7px] h-[3px] bg-[#1c1c1c] rounded-sm" />
              {/* Right Eye */}
              <div className="w-[7px] h-[3px] bg-[#1c1c1c] rounded-sm" />
            </div>
            {/* Smile */}
            <svg width="14" height="6" viewBox="0 0 14 6" fill="none" className="mt-[1px]">
              <path d="M2 2C4 5 10 5 12 2" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" />
            </svg>
            
            {/* Star */}
            <svg
              className="absolute -top-3 -right-3 sm:-top-5 sm:-right-4 w-5 h-5 sm:w-7 sm:h-7 text-[#ffb800]"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="#1c1c1c"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
