// Project registry — Raman's pinned GitHub repos. Edit freely.
export interface Project {
  name: string
  nameEn: string
  description: string
  descriptionEn?: string
  url: string
  icon: string
  domain: string
}

export const projects: Project[] = [
  {
    name: 'LockedIn',
    nameEn: 'LockedIn',
    description: 'A full-stack MERN productivity app for managing tasks, tracking deadlines, and monitoring productivity.',
    descriptionEn: 'A full-stack MERN productivity app for managing tasks, tracking deadlines, and monitoring productivity.',
    url: 'https://locked-in-five-olive.vercel.app',
    icon: '/images/projects/lockedin-v2.png',
    domain: 'vercel.app',
  },
  {
    name: 'Survey',
    nameEn: 'Survey',
    description: 'A full-stack serverless app powered by PostgreSQL and React for collecting consumer electricity data.',
    descriptionEn: 'A full-stack serverless app powered by PostgreSQL and React for collecting consumer electricity data.',
    url: 'https://survey-sigma-murex.vercel.app',
    icon: '/images/projects/survey-v2.png',
    domain: 'vercel.app',
  },
  {
    name: 'Media Downloader',
    nameEn: 'Media Downloader',
    description: 'A media downloader tool for grabbing content from various platforms.',
    descriptionEn: 'A media downloader tool for grabbing content from various platforms.',
    url: 'https://github.com/ramanraj00/media-downloader',
    icon: '/images/projects/media-downloader-v2.png',
    domain: 'github.com',
  },
  {
    name: 'Nolan',
    nameEn: 'Nolan',
    description: 'A web application built with modern technologies.',
    descriptionEn: 'A web application built with modern technologies.',
    url: 'https://nolan-lime.vercel.app',
    icon: '/images/projects/nolan-v2.png',
    domain: 'vercel.app',
  },
]
