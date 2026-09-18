import type { PublicPhotoSelection } from './repository'

export function devPhotoSelectionFixture(): PublicPhotoSelection | null {
  return {
    revision: 'dev-fixture-v3',
    publishedAt: new Date(),
    count: 15,
    items: [
      {
        id: 'dev-photo-0',
        width: 2048,
        height: 1536,
        altText: { zhHans: 'Photo 1', en: 'Photo 1' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/HIh9R-EbUAA1F42%20copy.jpeg',
            width: 2048,
            height: 1536,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 0 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.01,
          iso: 400,
        }
      },
      {
        id: 'dev-photo-1',
        width: 1206,
        height: 883,
        altText: { zhHans: 'Photo 2', en: 'Photo 2' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.50.41.jpeg',
            width: 1206,
            height: 883,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 1 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.002,
          iso: 50,
        }
      },
      {
        id: 'dev-photo-2',
        width: 982,
        height: 1280,
        altText: { zhHans: 'Photo 3', en: 'Photo 3' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.51.22.jpeg',
            width: 982,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 2 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.001,
          iso: 800,
        }
      },
      {
        id: 'dev-photo-3',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 4', en: 'Photo 4' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.52.09.jpeg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 3 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.05,
          iso: 400,
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
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.55.57.jpeg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 4 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.001,
          iso: 200,
        }
      },
      {
        id: 'dev-photo-5',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 6', en: 'Photo 6' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.57.00.jpeg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 5 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.002,
          iso: 400,
        }
      },
      {
        id: 'dev-photo-6',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 7', en: 'Photo 7' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.57.13.jpeg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 6 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.05,
          iso: 800,
        }
      },
      {
        id: 'dev-photo-7',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 8', en: 'Photo 8' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.57.19.jpeg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 7 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Telephoto 120mm f/2.8',
          focalLengthMillimeters: 120,
          aperture: 2.8,
          shutterSpeedSeconds: 0.05,
          iso: 50,
        }
      },
      {
        id: 'dev-photo-8',
        width: 720,
        height: 1280,
        altText: { zhHans: 'Photo 9', en: 'Photo 9' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-18%20at%2023.57.26.jpeg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 8 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.005,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-9',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 10', en: 'Photo 10' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-19%20at%2000.01.18.jpeg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 9 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.01,
          iso: 200,
        }
      },
      {
        id: 'dev-photo-10',
        width: 1280,
        height: 960,
        altText: { zhHans: 'Photo 11', en: 'Photo 11' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-19%20at%2000.02.29.jpeg',
            width: 1280,
            height: 960,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 10 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.02,
          iso: 800,
        }
      },
      {
        id: 'dev-photo-11',
        width: 1280,
        height: 960,
        altText: { zhHans: 'Photo 12', en: 'Photo 12' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-19%20at%2000.02.42.jpeg',
            width: 1280,
            height: 960,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 11 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Main Camera 24mm f/1.78',
          focalLengthMillimeters: 24,
          aperture: 1.78,
          shutterSpeedSeconds: 0.02,
          iso: 50,
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
            src: '/photos/WhatsApp%20Image%202026-09-19%20at%2000.03.01.jpeg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 12 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Telephoto 120mm f/2.8',
          focalLengthMillimeters: 120,
          aperture: 2.8,
          shutterSpeedSeconds: 0.001,
          iso: 100,
        }
      },
      {
        id: 'dev-photo-13',
        width: 960,
        height: 1280,
        altText: { zhHans: 'Photo 14', en: 'Photo 14' },
        renditions: [
          {
            profileWidth: 1080,
            src: '/photos/WhatsApp%20Image%202026-09-19%20at%2000.03.15.jpeg',
            width: 960,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 13 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.01,
          iso: 800,
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
            src: '/photos/proxy.jpeg',
            width: 720,
            height: 1280,
          }
        ],
        focalPoint: { x: 0.5, y: 0.5 },
        capturedAt: new Date(Date.now() - 14 * 86400000),
        camera: {
          make: 'Apple',
          model: 'iPhone 16 Pro',
          lens: 'Ultra Wide 13mm f/2.2',
          focalLengthMillimeters: 13,
          aperture: 2.2,
          shutterSpeedSeconds: 0.05,
          iso: 800,
        }
      },
    ],
  }
}
