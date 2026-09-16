'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HoverVideo } from './hover-video'

export function FourthScreen() {
  return (
    <div className="w-full h-full relative z-10 flex flex-col items-center justify-center space-y-3 md:space-y-4">
      
      {/* TEXT: Fade-in and Slide-up */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center flex flex-col items-center space-y-2"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase drop-shadow-lg">
          You are the <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-600">main Character</span>
        </h2>
        <div className="flex items-center space-x-3 text-zinc-400 text-lg md:text-xl font-medium tracking-widest uppercase mt-1">
          <span className="text-2xl animate-pulse">🫵</span>
          <span>Always</span>
        </div>
      </motion.div>

      {/* VIDEO: Scale-up and Fade-in */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
        className="relative w-[90vw] max-w-[800px] aspect-video cursor-pointer overflow-hidden"
      >
        <HoverVideo src="/videos/2022111_0.mp4" layout="absolute" pauseOthersOnHover playOnView />
      </motion.div>
      
    </div>
  )
}
