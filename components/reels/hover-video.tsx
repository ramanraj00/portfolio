'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { ZoomVideo } from '~/components/zoom-video'

export function HoverVideo({ 
  src, 
  startTime = 0, 
  objectFit = 'cover', 
  layout = 'absolute',
  pauseOthersOnHover = false,
  playOnView = false,
  zoomable = false
}: { 
  src: string, 
  startTime?: number, 
  objectFit?: 'cover' | 'contain', 
  layout?: 'absolute' | 'native' | 'native-width',
  pauseOthersOnHover?: boolean,
  playOnView?: boolean,
  zoomable?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Smart play function — always starts muted for Safari compatibility
  const attemptPlay = useCallback((video: HTMLVideoElement) => {
    if (startTime > 0 && video.currentTime === 0) {
      video.currentTime = startTime
    }
    // Always muted first — Safari blocks unmuted autoplay
    video.muted = true
    const p = video.play()
    if (p !== undefined) {
      p.catch(() => {
        // Silently fail — video will play when user interacts
      })
    }
  }, [startTime])

  // Viewport-based play/pause — videos only play when visible
  // This is the KEY optimization: max 3-4 videos playing at any time
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver((entries) => {
      const video = videoRef.current
      if (!video) return
      
      if (entries[0].isIntersecting) {
        // Video is visible — load and play
        if (!video.src && src) {
          video.src = src
          video.load()
        }
        attemptPlay(video)
      } else {
        // Video is offscreen — pause to save resources
        if (!video.paused) {
          video.pause()
        }
      }
    }, { 
      rootMargin: '200px',  // Reduced from 800px — preload only 200px ahead
      threshold: 0.1 
    })
    
    observer.observe(container)
    return () => observer.disconnect()
  }, [src, attemptPlay])

  // Coordinate pausing other videos on hover
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
             videoRef.current.play().catch(() => {})
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

  const videoContent = (
    <div 
      ref={containerRef}
      className={
        layout === 'native' ? 'relative w-auto h-full flex justify-start items-start' : 
        layout === 'native-width' ? 'relative w-full h-auto flex justify-start items-start' : 
        'absolute inset-0 w-full h-full'
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (!zoomable && videoRef.current && globalAudioEnabled) {
          videoRef.current.muted = false
          videoRef.current.play().catch(() => {})
        }
      }}
    >
      <video
        ref={videoRef}
        preload="none"
        className={
          layout === 'native'
            ? 'h-full w-auto'
            : layout === 'native-width'
            ? 'w-full h-auto'
            : `absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`
        }
        loop
        muted
        playsInline
      />
    </div>
  )

  if (zoomable) {
    return (
      <ZoomVideo src={src} alt="Reel Video" width={1080} height={1920}>
        {videoContent}
      </ZoomVideo>
    )
  }

  return videoContent
}
