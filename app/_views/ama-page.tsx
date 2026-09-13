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
        html, body { background-color: black !important; overscroll-behavior: none; }
        /* Hide scrollbar for a perfectly clean view */
        ::-webkit-scrollbar { display: none; }
      `}</style>
      
      {/* 
        Perfect Symmetrical 7-Video Grid:
        - 4 Columns, 3 Rows on Desktop
        - 2 Side Pillars (Tall)
        - 1 Center Heartbeat (Wide)
        - 4 Supporting Blocks (Squares)
      */}
      <div className="w-full min-h-[calc(100vh+3.5rem)] bg-black -mt-14 -mb-20 grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,25vh)] md:grid-rows-3 gap-[2px] md:gap-[1px] p-[1px]">
        
        {/* Left Pillar (Tall) */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/8353197_0.mp4" />
        </div>

        {/* Right Pillar (Tall) */}
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

      </div>
    </>
  )
}
