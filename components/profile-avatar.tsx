'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

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
  const audioRef = useRef<HTMLAudioElement>(null)

  const playWhistle = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.volume = 0.5
      audioRef.current.play().catch(console.error)
    }
  }


  return (
    <div className="profile-avatar-wrapper">
      <audio ref={audioRef} src="/sounds/whistle.mp3" preload="auto" />
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
          setIsAnime((prev) => !prev)
          playWhistle()
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

