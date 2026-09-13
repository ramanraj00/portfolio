'use client'

import { useRef, useState, useEffect } from 'react'

export function HoverVideo({ src, startTime = 0 }: { src: string, startTime?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return
    const video = videoRef.current

    video.volume = 1.0 // Ensure volume is up

    const attemptPlay = () => {
      // Force the specific start time to guarantee offset, regardless of buffering
      if (startTime > 0 && video.currentTime === 0) {
        video.currentTime = startTime
      }

      const p = video.play()
      if (p !== undefined) {
        p.catch(() => {
          // Fallback to muted if autoplay blocked
          video.muted = true
          video.play().catch(console.error)
        })
      }
    }

    // If video is already loaded, play immediately. Otherwise wait for it.
    if (video.readyState >= 1) { // HAVE_METADATA
      attemptPlay()
    } else {
      video.addEventListener('loadedmetadata', attemptPlay, { once: true })
    }
  }, [src, startTime])

  // Handle unmute on hover
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
