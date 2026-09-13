'use client'

import { useRef } from 'react'

export function HoverVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true
    }
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      autoPlay
      loop
      muted
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}
