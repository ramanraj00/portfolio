import type { Metadata } from 'next'

import { localeMetadata } from '~/lib/locale-metadata'
import { type Locale } from '~/lib/locale-route'
import { publicPageMetadata } from '~/lib/public-page-metadata'
import { HoverVideo } from '~/components/ama/hover-video'
import { ImageSlider } from '~/components/ama/image-slider'

export function amaPageMetadata(locale: Locale): Metadata {
  const copy = publicPageMetadata.ama[locale]
  return localeMetadata({
    locale,
    path: '/ama',
    title: copy.title,
    description: copy.description,
  })
}

const kickButtowskiImages = [
  '/images/kick-buttowski/1.jpg',
  '/images/kick-buttowski/2.jpg',
  '/images/kick-buttowski/3.jpg',
  '/images/kick-buttowski/4.jpg',
  '/images/kick-buttowski/5.jpg',
  '/images/kick-buttowski/6.jpg',
  '/images/kick-buttowski/7.jpg',
  '/images/kick-buttowski/8.jpg',
]

export function AmaPageView({ locale }: { locale: Locale }) {
  return (
    <>
      <style>{`
        footer { display: none !important; }
        html, body { background-color: black !important; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
      
      <div className="w-full bg-black -mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[50vh] md:auto-rows-[33.33vh] gap-[2px] md:gap-[1px] p-[1px]">
        
        {/* --- SCENE 1: THE FOLD --- */}

        {/* Left Pillar (Started 0.3s ahead for consistent transition wave) */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/3258679_0.mp4" startTime={0.3} />
        </div>

        {/* Right Pillar */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/3258679_0.mp4" />
        </div>

        {/* Center left intentionally blank */}
        <div className="z-10 col-span-2 row-span-2 md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3">
           {/* Blank space */}
        </div>


        {/* --- SCENE 2: SCROLL DOWN --- */}

        {/* 2-Pillar Grid for the Left Video and New Video */}
        <div className="col-span-2 md:col-span-4 row-span-3 grid grid-cols-2 gap-[2px] md:gap-[1px] w-full h-full">
          
          <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/5485403_0.mp4" />
          </div>
          
          <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/5119559_0.mp4" />
          </div>

        </div>

        {/* --- SCENE 3: MORE CONTENT --- */}
        {/* Pushed down content into a 4-Pillar Grid to keep the structure intact */}
        <div className="col-span-2 md:col-span-4 row-span-3 grid grid-cols-4 gap-[2px] md:gap-[1px] w-full h-full">

          <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/2022111_0.mp4" />
          </div>
          
          <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer w-full h-full">
            <ImageSlider images={kickButtowskiImages} />
          </div>
          
          <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/3578213_0.mp4" />
          </div>
          
          <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/4222035_0.mp4" />
          </div>

        </div>

      </div>
    </>
  )
}