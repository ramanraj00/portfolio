import type { Metadata } from 'next'

import { localeMetadata } from '~/lib/locale-metadata'
import { type Locale } from '~/lib/locale-route'
import { publicPageMetadata } from '~/lib/public-page-metadata'
import { HoverVideo } from '~/components/ama/hover-video'

export function amaPageMetadata(locale: Locale): Metadata {
  const copy = publicPageMetadata.ama[locale]
  return localeMetadata({
    locale,
    path: '/ama',
    title: copy.title,
    description: copy.description,
  })
}

export function AmaPageView({ locale }: { locale: Locale }) {
  return (
    <>
      <style>{`
        footer { display: none !important; }
        html, body { background-color: black !important; }
        /* Keep scrolling functionality but hide the ugly scrollbar for a clean UI */
        ::-webkit-scrollbar { display: none; }
      `}</style>
      
      {/* 
        Scrollable Story Grid:
        - md:auto-rows-[33.33vh] means 3 rows = 1 full screen. 
        - As we add rows, the page naturally becomes scrollable.
      */}
      <div className="w-full bg-black -mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[50vh] md:auto-rows-[33.33vh] gap-[2px] md:gap-[1px] p-[1px]">
        
        {/* --- SCENE 1: THE SYMMETRICAL FRAME --- */}

        {/* Left Pillar (Now mirrored with the right video) */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/3258679_0.mp4" />
        </div>

        {/* Right Pillar (Original right video) */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/3258679_0.mp4" />
        </div>

        {/* Center Heartbeat (Wide Focus) */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-2 md:col-span-2 md:row-start-2 md:row-span-1">
          <HoverVideo src="/videos/2022111_0.mp4" />
        </div>

        {/* Center Top Left */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-1 row-span-1 md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1">
          <HoverVideo src="/videos/5485403_0.mp4" />
        </div>

        {/* Center Top Right */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-1 row-span-1 md:col-start-3 md:col-span-1 md:row-start-1 md:row-span-1">
          <HoverVideo src="/videos/7058732_0.mp4" />
        </div>

        {/* Center Bottom Left */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-1 row-span-1 md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-1">
          <HoverVideo src="/videos/3086007_0.mp4" />
        </div>

        {/* Center Bottom Right */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-1 row-span-1 md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-1">
          <HoverVideo src="/videos/3578213_0.mp4" />
        </div>

        {/* --- SCENE 2: THE DROP (SCROLL DOWN) --- */}

        {/* The old left video, now placed below as a massive cinematic continuation */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-2 md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-3">
          <HoverVideo src="/videos/8353197_0.mp4" />
        </div>

      </div>
    </>
  )
}
