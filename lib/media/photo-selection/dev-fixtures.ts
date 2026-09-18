import type { PublicPhotoSelection } from './repository'

export function devPhotoSelectionFixture(): PublicPhotoSelection | null {
  return {
    revision: 'dev-fixture-v2',
    publishedAt: new Date(),
    count: 23,
    items: [
      {
        id: 'dev-photo-0',
        width: 1200,
        height: 1600,
        altText: { zhHans: 'Photo 1', en: 'Photo 1' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-1.jpg',
            width: 1200,
            height: 1600,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 0 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-1',
        width: 1200,
        height: 1600,
        altText: { zhHans: 'Photo 2', en: 'Photo 2' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-2.jpg',
            width: 1200,
            height: 1600,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 1 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-2',
        width: 2208,
        height: 2992,
        altText: { zhHans: 'Photo 3', en: 'Photo 3' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-3.jpg',
            width: 2208,
            height: 2992,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 2 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-3',
        width: 1200,
        height: 1600,
        altText: { zhHans: 'Photo 4', en: 'Photo 4' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-4.jpg',
            width: 1200,
            height: 1600,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 3 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-4',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 5', en: 'Photo 5' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-5.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 4 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-5',
        width: 1200,
        height: 1600,
        altText: { zhHans: 'Photo 6', en: 'Photo 6' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-6.jpg',
            width: 1200,
            height: 1600,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 5 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-6',
        width: 1280,
        height: 960,
        altText: { zhHans: 'Photo 7', en: 'Photo 7' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-7.jpg',
            width: 1280,
            height: 960,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 6 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-7',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 8', en: 'Photo 8' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-8.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 7 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-8',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 9', en: 'Photo 9' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-9.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 8 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-9',
        width: 1206,
        height: 883,
        altText: { zhHans: 'Photo 10', en: 'Photo 10' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-10.jpg',
            width: 1206,
            height: 883,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 9 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-10',
        width: 982,
        height: 1280,
        altText: { zhHans: 'Photo 11', en: 'Photo 11' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-11.jpg',
            width: 982,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 10 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-11',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 12', en: 'Photo 12' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-12.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 11 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-12',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 13', en: 'Photo 13' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-13.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 12 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-13',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 14', en: 'Photo 14' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-14.jpg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 13 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-14',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 15', en: 'Photo 15' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-15.jpg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 14 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-15',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 16', en: 'Photo 16' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-16.jpg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 15 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-16',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 17', en: 'Photo 17' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-17.jpg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 16 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-17',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 18', en: 'Photo 18' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-18.jpg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 17 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-18',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 19', en: 'Photo 19' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-19.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 18 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-19',
        width: 1280,
        height: 960,
        altText: { zhHans: 'Photo 20', en: 'Photo 20' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-20.jpg',
            width: 1280,
            height: 960,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 19 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-20',
        width: 1280,
        height: 960,
        altText: { zhHans: 'Photo 21', en: 'Photo 21' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-21.jpg',
            width: 1280,
            height: 960,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 20 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-21',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 22', en: 'Photo 22' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-22.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 21 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-22',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 23', en: 'Photo 23' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/images/photos/photo-23.jpg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 22 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 15 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
    ],
  }
}
