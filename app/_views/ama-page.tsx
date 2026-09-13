import type { Metadata } from 'next'

import { localeMetadata } from '~/lib/locale-metadata'
import { type Locale } from '~/lib/locale-route'
import { publicPageMetadata } from '~/lib/public-page-metadata'

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
  const items = Array.from({ length: 24 }).map((_, i) => i)

  return (
    <>
      <style>{`
        footer { display: none !important; }
        html, body { background-color: black !important; overscroll-behavior: none; }
      `}</style>
      <div className="w-full min-h-screen bg-black -mt-14 -mb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[1px]">
        {items.map((i) => (
          <div key={i} className="relative aspect-[9/16] bg-zinc-900 overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-500" />
            
            {/* Reel Icon */}
            <div className="absolute top-3 right-3 text-white opacity-90 drop-shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M5.828 7.071l2.829-2.829a2 2 0 0 1 2.828 0l2.829 2.829h5.686A2 2 0 0 1 22 9.071v9.858a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.071a2 2 0 0 1 2-2h1.828zm2.829-1.414L5.828 8.485H4v9.858h16V8.485h-1.828l-2.829-2.828H8.657zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


