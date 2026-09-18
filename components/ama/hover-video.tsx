'use client'

import { useRef, useState, useEffect } from 'react'

export function HoverVideo({ 
  src, 
  startTime = 0, 
  objectFit = 'cover', 
  layout = 'absolute',
  pauseOthersOnHover = false,
  playOnView = false
}: { 
  src: string, 
  startTime?: number, 
  objectFit?: 'cover' | 'contain', 
  layout?: 'absolute' | 'native' | 'native-width',
  pauseOthersOnHover?: boolean,
  playOnView?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isHovered, setIsHovered] = useState(false)
  const [globalAudioEnabled, setGlobalAudioEnabled] = useState(
    typeof window !== 'undefined' ? (window as any).isGlobalVideoAudioEnabled ?? true : true
  )

  useEffect(() => {
    const handleGlobalAudioToggle = (e: Event) => {
      const customEvent = e as CustomEvent
      setGlobalAudioEnabled(customEvent.detail)
    }
    window.addEventListener('video-audio-toggle', handleGlobalAudioToggle)
    return () => window.removeEventListener('video-audio-toggle', handleGlobalAudioToggle)
  }, [])

  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [isFocused, setIsFocused] = useState(false)

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

    if (playOnView) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          attemptPlay()
          observer.disconnect() // Only trigger once when it comes into view
        }
      }, { threshold: 0.5 }) // Trigger when 50% visible
      observer.observe(video)
      
      return () => observer.disconnect()
    } else {
      if (video.readyState >= 1) {
        attemptPlay()
      } else {
        video.addEventListener('loadedmetadata', attemptPlay, { once: true })
      }
    }

    // Smooth Sync Logic (Adjusts playback rate instead of stuttering currentTime)
    let syncInterval: NodeJS.Timeout
    const startSync = () => {
      if (playOnView) return // Don't global sync videos that start independently on scroll

      syncInterval = setInterval(() => {
        if (!video.duration || video.duration === Infinity || video.paused) return

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

  // Coordinate pausing other videos
  useEffect(() => {
    if (!pauseOthersOnHover) return

    const handleFocus = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail.src !== src && videoRef.current) {
        videoRef.current.pause()
      }
    }

    const handleBlur = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {})
      }
    }

    window.addEventListener('hover-video-focus', handleFocus)
    window.addEventListener('hover-video-blur', handleBlur)

    return () => {
      window.removeEventListener('hover-video-focus', handleFocus)
      window.removeEventListener('hover-video-blur', handleBlur)
    }
  }, [src, pauseOthersOnHover])

  // Handle unmute on hover
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered && globalAudioEnabled) {
        videoRef.current.muted = false
        videoRef.current.play().catch(() => {
           if (videoRef.current) {
             videoRef.current.muted = true
             videoRef.current.play().catch(console.error)
           }
        })
      } else {
        videoRef.current.muted = true
      }
    }
  }, [isHovered, globalAudioEnabled])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (pauseOthersOnHover) {
      hoverTimerRef.current = setTimeout(() => {
        setIsFocused(true)
        window.dispatchEvent(new CustomEvent('hover-video-focus', { detail: { src } }))
      }, 1000)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (pauseOthersOnHover) {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current)
      if (isFocused) {
        setIsFocused(false)
        window.dispatchEvent(new CustomEvent('hover-video-blur'))
        if (videoRef.current) videoRef.current.play().catch(() => {})
      }
    }
  }

  return (
    <div 
      className={
        layout === 'native' ? 'relative w-auto h-full flex justify-start items-start' : 
        layout === 'native-width' ? 'relative w-full h-auto flex justify-start items-start' : 
        'absolute inset-0 w-full h-full'
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (videoRef.current && globalAudioEnabled) {
          videoRef.current.muted = false
          videoRef.current.play().catch(console.error)
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        className={
          layout === 'native'
            ? 'h-full w-auto'
            : layout === 'native-width'
            ? 'w-full h-auto'
            : `absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`
        }
        loop
        muted={!isHovered || !globalAudioEnabled}
        playsInline
      />
    </div>
  )
}
