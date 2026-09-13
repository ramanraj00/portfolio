'use client'

import { useRef, useEffect } from 'react'

export function HoverVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Force play on mount to ensure it plays even if autoPlay prop fails
  useEffect(() => {
    if (videoRef.current) {
      // Sometimes setting muted in useEffect helps with strict browsers
      videoRef.current.muted = true;
      videoRef.current.play().catch(console.error)
    }
  }, [])

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      // Explicitly call play() because browsers like Safari will pause an unmuted video
      // if the user hasn't clicked on the page yet.
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // If browser blocks unmuted playback (Autoplay Policy), fallback to muted playback
          if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch(console.error)
          }
        })
      }
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true
      // Just in case muting it paused it
      videoRef.current.play().catch(console.error)
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
