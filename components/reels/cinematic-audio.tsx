'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// We use a global variable to store the state so newly mounted videos can read it
if (typeof window !== 'undefined') {
  (window as any).isGlobalVideoAudioEnabled = true
}

export function CinematicAudio() {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)

  const toggleAudio = () => {
    const newState = !isAudioEnabled
    setIsAudioEnabled(newState)
    if (typeof window !== 'undefined') {
      (window as any).isGlobalVideoAudioEnabled = newState
      window.dispatchEvent(new CustomEvent('video-audio-toggle', { detail: newState }))
    }
  }

  return (
    <div className="hidden md:block fixed bottom-8 right-8 z-[9999]">
      <button 
        onClick={toggleAudio}
        className="group relative flex items-center justify-center px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:border-white hover:bg-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        title={isAudioEnabled ? "Mute Videos" : "Unmute Videos"}
      >
        <div className="flex items-end justify-center space-x-[3px] h-5 w-5 mr-2">
          <motion.div 
            animate={{ height: isAudioEnabled ? ["30%", "100%", "40%", "80%", "30%"] : "20%" }}
            transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
            className="w-1 bg-white rounded-t-sm"
          />
          <motion.div 
            animate={{ height: isAudioEnabled ? ["80%", "30%", "100%", "50%", "80%"] : "20%" }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-1 bg-white rounded-t-sm"
          />
          <motion.div 
            animate={{ height: isAudioEnabled ? ["40%", "80%", "30%", "100%", "40%"] : "20%" }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="w-1 bg-white rounded-t-sm"
          />
        </div>
        <span className="text-white text-xs font-bold tracking-widest uppercase">
          {isAudioEnabled ? "Music On" : "Music Off"}
        </span>
      </button>
    </div>
  )
}
