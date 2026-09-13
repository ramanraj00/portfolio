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

// Pre-defined shapes for the Bento/Masonry grid
const shapes = [
  'col-span-1 row-span-2', // Vertical / Reel
  'col-span-2 row-span-1', // Horizontal / Wide
  'col-span-2 row-span-2', // Large Feature
  'col-span-1 row-span-1', // Small Square
  'col-span-2 row-span-1', // Horizontal / Wide
  'col-span-1 row-span-2', // Vertical / Reel
  'col-span-3 row-span-2', // Extra Wide Feature
  'col-span-1 row-span-1', // Small Square
  'col-span-1 row-span-2', // Vertical / Reel
  'col-span-2 row-span-2', // Large Feature
]

export function AmaPageView({ locale }: { locale: Locale }) {
  // Generate a large array of items looping through the shapes
  const items = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    shape: shapes[i % shapes.length],
  }))

  return (
    <>
      <style>{`
        footer { display: none !important; }
        html, body { background-color: black !important; overscroll-behavior: none; }
      `}</style>
      
      {/* 
        Grid setup:
        - grid-flow-dense allows items to pack tightly and fill empty spaces automatically.
        - auto-rows-[200px] sets a base height for the rows. A row-span-2 will be ~400px tall.
        - grid-cols-2 on mobile, grid-cols-4 on tablet, grid-cols-6 on desktop 
      */}
      <div className="w-full min-h-screen bg-black -mt-14 -mb-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[250px] grid-flow-dense gap-[1px]">
        
        {/* Center Video (Forced placement) */}
        <div className="relative bg-black overflow-hidden group cursor-pointer z-10 col-span-2 row-span-2 md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-2">
          <HoverVideo src="/videos/2022111_0.mp4" />
          
          {/* Reel Icon Overlay */}
          <div className="absolute top-4 right-4 text-white opacity-80 drop-shadow-md pointer-events-none">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M5.828 7.071l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829h5.686A2 2 0 0 1 22 9.071v9.858a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.071a2 2 0 0 1 2-2h1.828zm2.829-1.414L5.828 8.485H4v9.858h16V8.485h-1.828l-2.829-2.828H8.657zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
          </div>
        </div>

        {/* Dynamic Items */}
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`relative bg-zinc-900 overflow-hidden group cursor-pointer ${item.shape}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-700 ease-out" />
            
            {/* Visual indicator of the shape/content type for now */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="text-white font-mono text-xs md:text-sm">{item.shape}</span>
            </div>

            {/* Icon indicating media type */}
            <div className="absolute top-4 right-4 text-white opacity-50 drop-shadow-md">
              {item.shape.includes('row-span-2') && !item.shape.includes('col-span-2') ? (
                // Video/Reel Icon for tall items
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M5.828 7.071l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829h5.686A2 2 0 0 1 22 9.071v9.858a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.071a2 2 0 0 1 2-2h1.828zm2.829-1.414L5.828 8.485H4v9.858h16V8.485h-1.828l-2.829-2.828H8.657zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
              ) : (
                // Image/Gallery Icon for wide/square items
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
