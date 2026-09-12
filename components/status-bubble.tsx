'use client'

import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'

/**
 * Discord-style status bubble that sits on the top-right edge of the avatar.
 * Cycles through 3 states automatically:
 *   0 → "SKILL ISSUE" text
 *   1 → Smug face (‾ ‿ ‾)
 *   2 → Smug face + shining star ✦
 */
export function StatusBubble() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="absolute z-30 cursor-default"
      style={{
        // Position: top-right of the circular avatar, overlapping the edge
        top: '-4px',
        right: '-6px',
        width: '36px',
        height: '36px',
      }}
    >
      {/* Dark speech bubble shape */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main bubble */}
        <ellipse cx="20" cy="17" rx="17" ry="15" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
        {/* Tail pointing down-left toward avatar center */}
        <path d="M10 28 L6 36 L16 28" fill="#1a1a1a" />
      </svg>

      {/* Content inside the bubble */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '8px' }}>

        {/* Step 0: SKILL ISSUE text */}
        <div
          className={cn(
            "absolute transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            step === 0
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-75 blur-[2px] pointer-events-none"
          )}
        >
          <span className="font-extrabold text-white text-[7px] leading-[1] tracking-tight text-center block">
            SKILL
            <br />
            ISSUE
          </span>
        </div>

        {/* Step 1 & 2: Smug face */}
        <div
          className={cn(
            "absolute flex flex-col items-center transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            step !== 0
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-125 blur-[2px] pointer-events-none"
          )}
        >
          <div className="relative flex flex-col items-center">
            {/* Eyes */}
            <div className="flex gap-[5px]">
              <div className="w-[5px] h-[2px] bg-white rounded-[1px]" />
              <div className="w-[5px] h-[2px] bg-white rounded-[1px]" />
            </div>
            {/* Smile */}
            <svg width="10" height="5" viewBox="0 0 14 6" fill="none" className="mt-[2px]">
              <path d="M2 2C4 5 10 5 12 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Star — only visible on step 2 */}
            <svg
              className={cn(
                "absolute -top-[8px] -right-[9px] w-[11px] h-[11px] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                step === 2
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 -rotate-90"
              )}
              viewBox="0 0 24 24"
              fill="#ffb800"
              stroke="#1a1a1a"
              strokeWidth="1"
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
