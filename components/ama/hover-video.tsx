'use client'

import { useRef, useState, useEffect } from 'react'

export function HoverVideo({ src, startTime = 0 }: { src: string, startTime?: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return
    const video = videoRef.current

    video.volume = 1.0

    // Set initial offset smoothly
    const attemptPlay = () => {
      if (startTime > 0 && video.currentTime === 0) {
        video.currentTime = startTime
      }
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

    // Smooth Sync Logic (Adjusts playback rate instead of stuttering currentTime)
    let syncInterval: NodeJS.Timeout
    const startSync = () => {
      syncInterval = setInterval(() => {
        if (!video.duration || video.duration === Infinity) return

        const nowSec = Date.now() / 1000
        const expectedTime = (nowSec + startTime) % video.duration
        
        let diff = expectedTime - video.currentTime
        
        // Handle loop boundaries safely
        if (diff > video.duration / 2) diff -= video.duration
        if (diff < -video.duration / 2) diff += video.duration

        // Smoothly correct drift using playbackRate (Invisible to the eye, NO stutter!)
        if (Math.abs(diff) > 1.5) {
          // Only force seek if it's wildly out of sync (e.g. background tab restored)
          video.currentTime = expectedTime
        } else if (diff > 0.05) {
          video.playbackRate = 1.05 // Speed up slightly to catch up
        } else if (diff < -0.05) {
          video.playbackRate = 0.95 // Slow down slightly to wait
        } else {
          video.playbackRate = 1.0  // Perfect sync
        }
      }, 500) // Check every 500ms
    }

    video.addEventListener('playing', startSync, { once: true })

    return () => {
      if (syncInterval) clearInterval(syncInterval)
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
