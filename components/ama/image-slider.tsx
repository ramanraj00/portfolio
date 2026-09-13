'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function ImageSlider({ images, interval = 3000 }: { images: string[], interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-900 group">
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image 
            src={src} 
            alt={`Slide ${idx + 1}`} 
            fill 
            className={`object-cover transition-transform duration-[4000ms] ease-linear ${
              idx === currentIndex ? 'scale-105' : 'scale-100'
            }`} 
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={idx === 0}
          />
        </div>
      ))}
      
      {/* Slider indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {images.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
