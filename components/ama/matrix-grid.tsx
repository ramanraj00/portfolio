'use client'

import React from 'react'
import { HoverVideo } from './hover-video'

interface MatrixGridProps {
  videos: string[]
}

export function MatrixGrid({ videos }: MatrixGridProps) {
  return (
    <div className="relative w-full h-full bg-black grid grid-cols-12 grid-rows-4 gap-[2px] md:gap-[1px]">
        {/* ROW 1 */}
        <div className="relative bg-zinc-900 col-span-4 overflow-hidden group">
          {videos[0] ? <HoverVideo src={videos[0]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-5 overflow-hidden group">
          {videos[1] ? <HoverVideo src={videos[1]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-3 overflow-hidden group">
          {videos[2] ? <HoverVideo src={videos[2]} layout="absolute" pauseOthersOnHover /> : null}
        </div>

        {/* ROW 2 */}
        <div className="relative bg-zinc-900 col-span-3 overflow-hidden group">
          {videos[3] ? <HoverVideo src={videos[3]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-5 overflow-hidden group">
          {videos[4] ? <HoverVideo src={videos[4]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-4 overflow-hidden group">
          {videos[5] ? <HoverVideo src={videos[5]} layout="absolute" pauseOthersOnHover /> : null}
        </div>

        {/* ROW 3 */}
        <div className="relative bg-zinc-900 col-span-4 overflow-hidden group">
          {videos[6] ? <HoverVideo src={videos[6]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-4 overflow-hidden group">
          {videos[7] ? <HoverVideo src={videos[7]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-4 overflow-hidden group">
          {videos[8] ? <HoverVideo src={videos[8]} layout="absolute" pauseOthersOnHover /> : null}
        </div>

        {/* ROW 4 */}
        <div className="relative bg-zinc-900 col-span-6 overflow-hidden group">
          {videos[9] ? <HoverVideo src={videos[9]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
        <div className="relative bg-zinc-900 col-span-6 overflow-hidden group">
          {videos[10] ? <HoverVideo src={videos[10]} layout="absolute" pauseOthersOnHover /> : null}
        </div>
    </div>
  )
}
