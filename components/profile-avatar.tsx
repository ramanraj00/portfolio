'use client'

import Image from 'next/image'
import { useState, useRef, useEffect, useCallback } from 'react'

/**
 * Profile avatar with a toggle switch to flip between
 * a real photo and an anime avatar.
 *
 * Layout inspired by the "Gruz" card:
 *   ┌──────────┐
 *   │  image   │  ◐ (switch)
 *   │ rounded  │
 *   └──────────┘
 */
export function ProfileAvatar({
  realSrc,
  animeSrc,
  alt,
}: {
  realSrc: string
  animeSrc: string
  alt: string
}) {
  const [isAnime, setIsAnime] = useState(true)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)

  // Pre-load the sound into an AudioBuffer once on mount
  useEffect(() => {
    let cancelled = false
    const ctx = new AudioContext()
    audioCtxRef.current = ctx

    fetch('/sounds/camera-click.mp3')
      .then((res) => res.arrayBuffer())
      .then((buf) => ctx.decodeAudioData(buf))
      .then((decoded) => {
        if (!cancelled) audioBufferRef.current = decoded
      })
      .catch(() => {
        // Sound is cosmetic — fail silently
      })

    return () => {
      cancelled = true
      void ctx.close()
    }
  }, [])

  const playClick = useCallback(() => {
    const ctx = audioCtxRef.current
    const buffer = audioBufferRef.current
    if (!ctx || !buffer) return

    // Resume context if suspended (autoplay policy)
    if (ctx.state === 'suspended') void ctx.resume()

    // Each call creates a fresh source → instant, overlappable playback
    const source = ctx.createBufferSource()
    source.buffer = buffer
    const gain = ctx.createGain()
    gain.gain.value = 0.5
    source.connect(gain).connect(ctx.destination)
    source.start(0)
  }, [])

  return (
    <div className="profile-avatar-wrapper">
      <div className="profile-avatar-image-container">
        {/* Real photo */}
        <Image
          src={realSrc}
          alt={alt}
          width={240}
          height={240}
          className={`profile-avatar-img ${!isAnime ? 'profile-avatar-img--active' : ''}`}
          priority
        />
        {/* Anime avatar */}
        <Image
          src={animeSrc}
          alt={`${alt} (anime)`}
          width={240}
          height={240}
          className={`profile-avatar-img ${isAnime ? 'profile-avatar-img--active' : ''}`}
          priority
        />
      </div>

      {/* Switch button */}
      <button
        type="button"
        className="profile-avatar-switch"
        onClick={() => {
          playClick()
          setIsAnime((prev) => !prev)
        }}
        aria-label={isAnime ? 'Switch to real photo' : 'Switch to anime avatar'}
        title={isAnime ? 'Switch to real photo' : 'Switch to anime avatar'}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="none"
          className="profile-avatar-switch-icon"
        >
          {/* Half-circle icon like a contrast/theme toggle */}
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 2a8 8 0 0 1 0 16V2Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}

