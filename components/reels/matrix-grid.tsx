'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { HoverVideo } from './hover-video'

interface MatrixGridProps {
  videos: string[]
}

const GRID_CLASSES = [
  "relative bg-zinc-900 col-span-4 overflow-hidden group",
  "relative bg-zinc-900 col-span-5 overflow-hidden group",
  "relative bg-zinc-900 col-span-3 overflow-hidden group",
  "relative bg-zinc-900 col-span-3 overflow-hidden group",
  "relative bg-zinc-900 col-span-5 overflow-hidden group",
  "relative bg-zinc-900 col-span-4 overflow-hidden group",
  "relative bg-zinc-900 col-span-4 overflow-hidden group",
  "relative bg-zinc-900 col-span-4 overflow-hidden group",
  "relative bg-zinc-900 col-span-4 overflow-hidden group",
  "relative bg-zinc-900 col-span-6 overflow-hidden group",
  "relative bg-zinc-900 col-span-6 overflow-hidden group",
]

// A continuous path through the grid's adjacent cells
const SNAKE_PATH = [0, 1, 2, 5, 8, 10, 9, 6, 7, 4, 3]

export function MatrixGrid({ videos }: MatrixGridProps) {
  const [items, setItems] = useState(() => 
    videos.map((src, idx) => ({ id: src || `empty-${idx}`, src, originalIndex: idx }))
  )
  
  const stepRef = useRef(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return // Pause the animation when hovered

    const interval = setInterval(() => {
      setItems(prev => {
        const newArr = [...prev]
        const currentStep = stepRef.current
        
        // Find the two adjacent slots in the snake path to swap
        const idxA = SNAKE_PATH[currentStep % SNAKE_PATH.length]
        const idxB = SNAKE_PATH[(currentStep + 1) % SNAKE_PATH.length]
        
        // Swap them
        const temp = newArr[idxA]
        newArr[idxA] = newArr[idxB]
        newArr[idxB] = temp
        
        stepRef.current = currentStep + 1
        return newArr
      })
    }, 8000) // 8 seconds per step — slower to reduce GPU load while videos decode
    
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <div 
      className="relative w-full h-full bg-black grid grid-cols-12 grid-rows-4 gap-[2px] md:gap-[1px]"
      style={{ overflowAnchor: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {items.map((item, index) => {
        const gridClass = GRID_CLASSES[index]
        return (
          <motion.div 
            layout 
            key={item.id} 
            className={gridClass}
            style={{ zIndex: 10 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 1.2
            }}
          >
            {item.src ? <HoverVideo src={item.src} layout="absolute" pauseOthersOnHover zoomable /> : null}
          </motion.div>
        )
      })}
    </div>
  )
}
