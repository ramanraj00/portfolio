import { PixelCluster } from '~/components/pixel-cluster'
import { StaticPhotoWall } from '~/components/static-photo-wall'
import { T } from '~/lib/i18n'

export function PhotosPageView() {
  return (
    <div className="mx-auto w-full max-w-[37.5rem] px-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="page-eyebrow enter">
          Photos
        </h1>
        <PixelCluster variant={4} className="enter shrink-0" />
      </div>
      <StaticPhotoWall />
    </div>
  )
}
