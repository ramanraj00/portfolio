'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export function CinematicAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.volume = 0.5
        audioRef.current.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      {/* 
        For now, using a remote placeholder audio.
        The user should replace '/main-theme.mp3' with their own track in public folder!
      */}
      <audio ref={audioRef} loop src="/main-theme.mp3" preload="auto" />
      
      <button 
        onClick={togglePlay}
        className="group relative flex items-center justify-center px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:border-white hover:bg-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        title="Play Main Character Theme"
      >
        <div className="flex items-end justify-center space-x-[3px] h-5 w-5 mr-2">
          <motion.div 
            animate={{ height: isPlaying ? ["30%", "100%", "40%", "80%", "30%"] : "20%" }}
            transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
            className="w-1 bg-white rounded-t-sm"
          />
          <motion.div 
            animate={{ height: isPlaying ? ["80%", "30%", "100%", "50%", "80%"] : "20%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-1 bg-white rounded-t-sm"
          />
          <motion.div 
            animate={{ height: isPlaying ? ["40%", "80%", "30%", "100%", "40%"] : "20%" }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="w-1 bg-white rounded-t-sm"
          />
        </div>
        <span className="text-white text-xs font-bold tracking-widest uppercase">{isPlaying ? "Playing" : "Theme"}</span>
      </button>
    </div>
  )
}
