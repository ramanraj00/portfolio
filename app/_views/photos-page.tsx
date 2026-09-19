import { PixelCluster } from '~/components/pixel-cluster'
import { StaticPhotoWall } from '~/components/static-photo-wall'
import { T } from '~/lib/i18n'

const myPhotos: string[] = [
  '/photos/photo-1.jpeg',
  '/photos/photo-2.jpeg',
  '/photos/photo-3.jpeg',
  '/photos/photo-4.jpeg',
  '/photos/photo-5.jpeg',
  '/photos/photo-6.jpeg',
  '/photos/photo-7.jpeg',
  '/photos/photo-8.jpeg',
  '/photos/photo-9.jpeg',
  '/photos/photo-10.jpeg',
  '/photos/photo-11.jpeg',
  '/photos/photo-12.jpeg',
  '/photos/photo-13.jpeg',
  '/photos/photo-14.jpeg',
  '/photos/photo-15.jpeg',
]

export function PhotosPageView() {
  return (
    <div className="mx-auto w-full max-w-[37.5rem] px-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="page-eyebrow enter">
          <T zh="फोटोज़" en="Photos" />
        </h1>
        <PixelCluster variant={4} className="enter shrink-0" />
      </div>
      <StaticPhotoWall images={myPhotos} />
    </div>
  )
}
