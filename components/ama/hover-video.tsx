'use client'

import { useRef, useState, useEffect } from 'react'

export function HoverVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 1.0 // Ensure volume is up
      const p = videoRef.current.play()
      if (p !== undefined) {
        p.catch(() => {
          // If play fails (e.g. because we unmuted without user interaction),
          // fallback to muted so it at least continues playing visually
          if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch(console.error)
          }
        })
      }
    }
  }, [isHovered, src])

  return (
    <div 
      className="absolute inset-0 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Optional click handler to force interaction and unmute
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
        autoPlay
        loop
        muted={!isHovered}
        playsInline
      />
    </div>
  )
}
