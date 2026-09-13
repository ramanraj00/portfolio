'use client'

import { useRef, useState, useEffect } from 'react'

export function HoverVideo({ src, startTime = 0 }: { src: string, startTime?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return
    const video = videoRef.current

    video.volume = 1.0

    const syncVideo = () => {
      if (!video.duration || video.duration === Infinity) return
      
      // Use absolute system time to calculate the expected frame.
      // This locks all videos on the page to the exact same universal clock!
      const nowSec = Date.now() / 1000
      const expectedTime = (nowSec + startTime) % video.duration
      
      let diff = expectedTime - video.currentTime
      
      // Handle loop boundary wrap-around logic
      if (diff > video.duration / 2) diff -= video.duration
      if (diff < -video.duration / 2) diff += video.duration
      
      // If it drifts by more than 0.15 seconds, forcefully snap it back into perfect sync
      if (Math.abs(diff) > 0.15) {
        video.currentTime = expectedTime
      }
    }

    // Attempt to play and start syncing
    const attemptPlay = () => {
      syncVideo()
      const p = video.play()
      if (p !== undefined) {
        p.catch(() => {
          video.muted = true
          video.play().catch(console.error)
        })
      }
    }

    if (video.readyState >= 1) {
      attemptPlay()
    } else {
      video.addEventListener('loadedmetadata', attemptPlay, { once: true })
    }

    // Check sync frequently during playback
    video.addEventListener('timeupdate', syncVideo)

    return () => {
      video.removeEventListener('timeupdate', syncVideo)
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
