'use client'
import { tiltFromSlug } from '~/lib/polaroid'


import { T } from '~/lib/i18n'
import { ZoomImage } from './zoom-image'
import { STATIC_PHOTOS } from '~/lib/photos-data'

function PhotoDetails({ photo }: { photo: typeof STATIC_PHOTOS[number] }) {
  const fields = [
    { zh: '相机', en: 'Camera', value: photo.camera || 'Digital Camera' },
    ...(photo.focalLength ? [{ zh: '焦距', en: 'Focal', value: photo.focalLength }] : []),
    ...(photo.aperture ? [{ zh: '光圈', en: 'Aperture', value: photo.aperture }] : []),
    ...(photo.shutter ? [{ zh: '快门', en: 'Shutter', value: photo.shutter }] : []),
    ...(photo.iso ? [{ zh: '感光度', en: 'ISO', value: photo.iso }] : []),
  ]

  return (
    <div className="mx-auto w-full max-w-xl px-5 text-foreground">
      <dl className="spec-plate spec-plate-flow zoom-detail-frame">
        {fields.map((field, index) => (
          <div
            key={field.en}
            className="zoom-detail-item"
            style={{ '--detail-index': index } as React.CSSProperties}
          >
            <dt>
              <T zh={field.zh} en={field.en} />
            </dt>
            <dd>{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function StaticPhotoWall() {
  if (!STATIC_PHOTOS || STATIC_PHOTOS.length === 0) {
    return (
      <p className="mt-6 border-t border-dashed border-border py-10 text-sm leading-6 text-muted-foreground">
        <T zh="还没有照片。" en="No photos have been added yet." />
      </p>
    )
  }

  const center = (STATIC_PHOTOS.length - 1) / 2

  return (
    <div className="photo-masonry mt-6">
      {STATIC_PHOTOS.map((photo, index) => {
        // Random tilt between -2deg and 2deg for that Cali polaroid look
        const tilt = (tiltFromSlug(photo.id) / 2).toFixed(2)
        
        return (
          <div 
            key={photo.id} 
            className="photo-item enter-swing"
            style={
              {
                '--enter-delay': `${120 + Math.abs(index - center) * 50}ms`,
                '--img-tilt': `${tilt}deg`,
              } as React.CSSProperties
            }
          >
            <div className="photo-frame relative overflow-hidden group bg-zinc-900">
              <ZoomImage
                src={photo.src}
                renditions={[{ src: photo.src, width: photo.width }]}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 704px) 50vw, 288px"
                expandedContent={<PhotoDetails photo={photo} />}
              />
              <span className="calibration-corners" aria-hidden />
            </div>
          </div>
        )
      })}
    </div>
  )
}
