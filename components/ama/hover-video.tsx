'use client'

import { useRef, useState, useEffect } from 'react'

export function HoverVideo({ src, delay = 0 }: { src: string, delay?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (videoRef.current) {
      videoRef.current.volume = 1.0 // Ensure volume is up
      
      const attemptPlay = () => {
        if (!videoRef.current) return
        const p = videoRef.current.play()
        if (p !== undefined) {
          p.catch(() => {
            // Fallback to muted so it at least continues playing visually
            if (videoRef.current) {
              videoRef.current.muted = true
              videoRef.current.play().catch(console.error)
            }
          })
        }
      }

      if (delay > 0) {
        timeoutId = setTimeout(attemptPlay, delay)
      } else {
        attemptPlay()
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [src, delay])

  // Effect to handle hover unmuting without disrupting the initial delay play
  useEffect(() => {
    if (videoRef.current && isHovered) {
      videoRef.current.muted = false
      videoRef.current.play().catch(() => {
         if (videoRef.current) {
           videoRef.current.muted = true
           videoRef.current.play().catch(console.error)
         }
      })
    }
  }, [isHovered])

  return (
    <div 
      className="absolute inset-0 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (videoRef.current) {
          videoRef.current.muted = false
          videoRef.current.play().catch(console.error)
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loop
        muted={!isHovered}
        playsInline
      />
    </div>
  )
}
