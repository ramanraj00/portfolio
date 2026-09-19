'use client'

import { T } from '~/lib/i18n'

export function StaticPhotoWall({ images }: { images: string[] }) {
  if (!images || images.length === 0) {
    return (
      <p className="mt-6 border-t border-dashed border-border py-10 text-sm leading-6 text-muted-foreground">
        <T zh="还没有照片。" en="No photos have been added yet." />
      </p>
    )
  }

  return (
    <div className="photo-masonry mt-6">
      {images.map((src, index) => (
        <div key={index} className="photo-item photo-frame relative overflow-hidden group bg-zinc-900">
          <img 
            src={src} 
            alt={`Photo ${index + 1}`} 
            className="w-full h-auto rounded-[2px] transition-transform duration-500 hover:scale-105 cursor-pointer" 
            loading="lazy" 
          />
        </div>
      ))}
    </div>
  )
}
