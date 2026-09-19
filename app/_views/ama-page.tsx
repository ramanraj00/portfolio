import type { Metadata } from 'next'

import { localeMetadata } from '~/lib/locale-metadata'
import { type Locale } from '~/lib/locale-route'
import { publicPageMetadata } from '~/lib/public-page-metadata'
import { HoverVideo } from "~/components/ama/hover-video"
import { SpideyTracker } from "~/components/ama/spidey-tracker"
import { MatrixGrid } from '~/components/ama/matrix-grid'
import { FourthScreen } from '~/components/ama/fourth-screen'
import { FilmGrain } from '~/components/ama/film-grain'
import { CinematicAudio } from '~/components/ama/cinematic-audio'
import { ImageSlider } from '~/components/ama/image-slider'
import { AmaThemeEffect } from '~/components/ama/ama-theme-effect'

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
      
      
      <AmaThemeEffect />
      <FilmGrain />
      <CinematicAudio />
      <div className="ama-wrapper dark w-full bg-black -mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[50vh] md:auto-rows-[33.33vh] gap-[2px] md:gap-[1px] p-[1px]">
        
        {/* --- SCENE 1: THE FOLD --- */}

        {/* Left Pillar (Started 0.3s ahead for consistent transition wave) */}
        <div className="snap-start scroll-mt-0 relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/3258679_0.mp4" startTime={0.3} />
        </div>

        {/* Right Pillar */}
        <div className="relative bg-zinc-900 overflow-hidden group cursor-pointer z-10 col-span-2 row-span-1 md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-3">
          <HoverVideo src="/videos/3258679_0.mp4" />
        </div>

        {/* Center Spidey Tracker */}
        <div className="z-10 col-span-2 row-span-2 md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-3">
           <SpideyTracker />
        </div>


        {/* --- SCENE 3: 3-COLUMN GRID --- */}
        <div className="snap-start scroll-mt-0 col-span-2 md:col-span-4 row-span-3 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-[2px] md:gap-[1px] w-full h-full relative z-20">

          {/* SLOT 1: Left Column (Spans full vertical height) */}
          <div className="relative bg-zinc-900 group cursor-pointer w-full h-full row-span-2">
            <HoverVideo src="/videos/3561287_0.mp4" layout="absolute" pauseOthersOnHover />
          </div>

          {/* SLOT 2: Top Middle */}
          <div className="relative bg-zinc-900 group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/8546892_0.mp4" layout="absolute" pauseOthersOnHover />
          </div>
          
          {/* SLOT 3: Top Right */}
          <div className="relative bg-zinc-900 group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/1342238_0.mp4?v=2" layout="absolute" pauseOthersOnHover />
          </div>
          
          {/* SLOT 4: Bottom Middle */}
          <div className="relative bg-zinc-900 group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/4448828_0.mp4" layout="absolute" pauseOthersOnHover />
          </div>

          {/* SLOT 5: Bottom Right */}
          <div className="relative bg-zinc-900 group cursor-pointer w-full h-full">
            <HoverVideo src="/videos/1002601241579_0.mp4?v=2" layout="absolute" pauseOthersOnHover />
          </div>

        </div>
        {/* --- SCENE 4: NEW SECTION 3 (DRAGGABLE MATRIX) --- */}
        <div className="snap-start scroll-mt-0 col-span-2 md:col-span-4 row-span-3 w-full h-full relative z-10">
          <MatrixGrid 
            videos={[
              "/videos/5297483_0.mp4",
              "/videos/3014835_0.mp4",
              "/videos/5500495_0.mp4",
              "/videos/7291709_0.mp4",
              "/videos/8658813_0.mp4",
              "/videos/2096182_0.mp4",
              "/videos/7959353_0.mp4",
              "/videos/9043855_0.mp4",
              "/videos/2339545_0.mp4",
              "/videos/1565307_0.mp4",
              "/videos/5554845_0.mp4"
            ]}
          />
        </div>

        {/* --- SCENE 5: 4TH SCREEN --- */}
        <div className="snap-start scroll-mt-0 col-span-2 md:col-span-4 row-span-3 w-full h-full relative z-10 flex flex-col items-center justify-center">
          <FourthScreen />
        </div>

      </div>
    </>
  )
}
