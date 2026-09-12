'use client'

import { useEffect, useState } from 'react'
import { cn } from '~/lib/utils'

/**
 * Small white speech bubble badge on the avatar's top-right edge.
 * Auto-cycles through 3 states:
 *   0 → "SKILL ISSUE" bold text
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
        top: '-24px',
        right: '-24px',
        width: '40px',
        height: '40px',
      }}
    >
      {/* White speech bubble with dark stroke */}
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-sm"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="20" cy="17" rx="16" ry="14" fill="white" stroke="#333" strokeWidth="1.5" />
        <path d="M10 27 L5 35 L16 27" fill="white" stroke="#333" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Cover the stroke line inside the bubble where tail meets ellipse */}
        <ellipse cx="20" cy="17" rx="14.5" ry="12.5" fill="white" />
      </svg>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ paddingBottom: '7px' }}>

        {/* Step 0: SKILL ISSUE */}
        <div
          className={cn(
            "absolute transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            step === 0
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-75 blur-[2px] pointer-events-none"
          )}
        >
          <span className="font-black text-[#1a1a1a] text-[6.5px] leading-[1.1] tracking-tight text-center block">
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
            {/* Eyes — flat lines */}
            <div className="flex gap-[4px]">
              <div className="w-[5px] h-[2px] bg-[#1a1a1a] rounded-[0.5px]" />
              <div className="w-[5px] h-[2px] bg-[#1a1a1a] rounded-[0.5px]" />
            </div>
            {/* Smile */}
            <svg width="10" height="5" viewBox="0 0 14 6" fill="none" className="mt-[1px]">
              <path d="M2 2C4 5 10 5 12 2" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            {/* Star — step 2 only */}
            <svg
              className={cn(
                "absolute -top-[7px] -right-[8px] w-[10px] h-[10px] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                step === 2
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 -rotate-90"
              )}
              viewBox="0 0 24 24"
              fill="#ffb800"
              stroke="#1a1a1a"
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
