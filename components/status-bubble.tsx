'use client'

import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'

export function StatusBubble() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Switch state every 2 seconds for a snappier 3-step loop
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute top-0 right-0 translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3 z-30 w-12 h-12 sm:w-[3.75rem] sm:h-[3.75rem] hover:scale-110 transition-transform cursor-crosshair">
      {/* Speech Bubble SVG Base */}
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-md"
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

      {/* Content Container */}
      <div className="absolute inset-0 pb-[6px] pr-[2px] flex items-center justify-center">
        
        {/* SKILL ISSUE Text */}
        <div
          className={cn(
            "absolute flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            step === 0 ? "opacity-100 scale-100 rotate-0 blur-0" : "opacity-0 scale-50 -rotate-12 blur-sm pointer-events-none"
          )}
        >
          <span className="font-black text-[#1c1c1c] text-[0.55rem] sm:text-[0.7rem] leading-[0.95] tracking-tight">
            SKILL<br />ISSUE
          </span>
        </div>

        {/* Smug Face & Star */}
        <div
          className={cn(
            "absolute flex items-center justify-center w-full h-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            step !== 0 ? "opacity-100 scale-100 rotate-0 blur-0" : "opacity-0 scale-150 rotate-12 blur-sm pointer-events-none"
          )}
        >
          {/* Face Elements */}
          <div className="flex flex-col items-center gap-[2px] mt-1 relative">
            <div className="flex gap-[6px] sm:gap-[8px]">
              {/* Left Eye */}
              <div className="w-[6px] h-[3px] bg-[#1c1c1c] rounded-sm" />
              {/* Right Eye */}
              <div className="w-[6px] h-[3px] bg-[#1c1c1c] rounded-sm" />
            </div>
            {/* Smile */}
            <svg width="12" height="5" viewBox="0 0 14 6" fill="none" className="mt-[1px]">
              <path d="M2 2C4 5 10 5 12 2" stroke="#1c1c1c" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            
            {/* Star (Step 2 only) */}
            <div
              className={cn(
                "absolute -top-3 -right-3 sm:-top-4 sm:-right-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                step === 2 ? "opacity-100 scale-100 rotate-0 blur-0" : "opacity-0 scale-0 -rotate-90 blur-sm"
              )}
            >
              <svg
                className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] text-[#ffb800]"
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
    </div>
  )
}
