import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { Bookshelf } from '~/components/bookshelf'
import { ExternalLabel } from '~/components/external-mark'
import { HomeIntroduction } from '~/components/home-introduction'
import { NavCards, PhotoNavCard } from '~/components/nav-cards'
import { PixelCluster } from '~/components/pixel-cluster'
import { PortraitHiddenStage } from '~/components/portrait-hidden-stage'
import { PostRow } from '~/components/post-row'
import { ProfileAvatar } from '~/components/profile-avatar'
import { StatusBubble } from '~/components/status-bubble'
import { TimeOnEarth } from '~/components/time-on-earth'
import { VinylShelf } from '~/components/vinyl-shelf'
import { getAllPosts } from '~/lib/content'
import { T } from '~/lib/i18n'
import { localePath, type Locale } from '~/lib/locale-route'
import { books, experience, records } from '~/lib/personal'
import { projects } from '~/lib/projects'
import { getGitHub, getSocial } from '~/lib/social-live'
import { STATIC_PHOTOS } from '~/lib/photos-data'

function SectionTitle({
  index,
  children,
  delay,
}: {
  index: string
  children: React.ReactNode
  delay: number
}) {
  return (
    <h2
      className="section-tag enter"
      style={{ '--enter-delay': `${delay}ms` } as React.CSSProperties}
    >
      <span className="section-tag-index" aria-hidden>
        {index}
      </span>
      <span className="section-tag-hatch" aria-hidden />
      <span className="section-tag-label">{children}</span>
    </h2>
  )
}

export async function HomePageView({ locale }: { locale: Locale }) {
  const [social, github] = await Promise.all([getSocial(), getGitHub()])
  const posts = getAllPosts()
  const latest = posts.slice(0, 5)
  const center = (latest.length - 1) / 2

  // section tags number in render order; conditional shelves never leave gaps
  let sectionCount = 0
  const nextSectionIndex = () => String(++sectionCount).padStart(2, '0')

  return (
    <div className="mx-auto w-full max-w-[37.5rem] px-6">
      <div className="flex flex-col gap-8 sm:gap-10 mt-6 sm:mt-10 mb-10 w-full">
        {/* Top Row: Identity (Avatar + Name) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          <div className="w-28 shrink-0 sm:w-36">
            <PortraitHiddenStage
              label={
                locale === 'en'
                  ? "Reveal the hidden topographic field"
                  : '显现隐藏的等高线场'
              }
            >
              <div className="relative w-full h-full">
                
                <StatusBubble />
                <ProfileAvatar
                  realSrc="/images/real-avatar.jpg"
                  animeSrc="/images/anime-avatar.jpg"
                  alt="Profile photo"
                />
              </div>
            </PortraitHiddenStage>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[2.75rem] leading-tight">
                hi, Raman here
              </h1>
              <PixelCluster variant={2} className="shrink-0 scale-125 origin-left" />
            </div>
            
            <p className="mt-2 text-muted-foreground font-medium tracking-wide">
              been here for <TimeOnEarth /> years
            </p>
            <div className="mt-3 flex items-start">
              <a
                href="https://cal.com/raman-mnnz8w/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="border-b border-transparent group-hover:border-foreground transition-colors pb-0.5">
                  Book an intro call
                </span>
                <span className="ml-1.5 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Full Width Intro (with social links included) */}
        <div className="enter opacity-95 leading-relaxed text-[1.05rem] max-w-full">
          <HomeIntroduction social={social} github={github} />
        </div>
      </div>

      <NavCards
        postCount={posts.length}
        projectCount={projects.length}
        locale={locale}
        photoCard={
          <Suspense
            fallback={
              <PhotoNavCard
                photoPreview={null}
                locale={locale}
                pending
              />
            }
          >
            <StaticPhotoNavCard locale={locale} />
          </Suspense>
        }
      />

      <section className="mt-16">
        <SectionTitle index={nextSectionIndex()} delay={120}>
          Projects
        </SectionTitle>
        <ul className="mt-4 flex flex-col">
          {projects.map((project, i) => (
            <li
              key={project.name}
              className="enter-swing hairline-top"
              style={{ '--enter-delay': `${150 + i * 40}ms` } as React.CSSProperties}
            >
              <Link
                href={
                  project.url.startsWith('/')
                    ? localePath(locale, project.url)
                    : project.url
                }
                target={project.url.startsWith('/') ? undefined : '_blank'}
                rel={project.url.startsWith('/') ? undefined : 'noreferrer'}
                className="project-row group"
              >
                <span className="project-icon-frame" aria-hidden="true">
                  <Image
                    src={project.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="project-icon"
                  />
                </span>
                <span className="project-identity">
                  <span className="project-name font-medium">
                    {project.url.startsWith('/') ? (
                      project.nameEn
                    ) : (
                      <ExternalLabel>
                        {project.nameEn}
                      </ExternalLabel>
                    )}
                  </span>
                  <span className="project-domain text-muted-foreground">{project.domain}</span>
                </span>
                <span className="project-description text-muted-foreground">
                  {project.descriptionEn ?? project.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <SectionTitle index={nextSectionIndex()} delay={200}>
            Writing
          </SectionTitle>
          <Link
            href={'/blog'}
            className="enter relative shrink-0 text-sm text-muted-foreground transition-colors duration-150 ease-[ease] after:absolute after:-inset-x-2 after:-inset-y-3 after:content-[''] hover:text-foreground focus-visible:rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
            style={{ '--enter-delay': '200ms' } as React.CSSProperties}
          >
            View all
          </Link>
        </div>
        <ul className="focus-list mt-4 flex flex-col">
          {latest.map((post, index) => (
            <li
              key={post.slug}
              className="enter-swing"
              style={
                { '--enter-delay': `${240 + Math.abs(index - center) * 50}ms` } as React.CSSProperties
              }
            >
              <PostRow post={post} headingLevel="h3" dateStyle="short" locale={locale} />
            </li>
          ))}
        </ul>
      </section>

      {records.length > 0 && (
        <section className="mt-16">
          <SectionTitle index={nextSectionIndex()} delay={320}>
            On rotation
          </SectionTitle>
          <div className="enter mt-5" style={{ '--enter-delay': '360ms' } as React.CSSProperties}>
            <VinylShelf />
          </div>
        </section>
      )}

      {books.length > 0 && (
        <section className="mt-16">
          <SectionTitle index={nextSectionIndex()} delay={380}>
            Books I Love
          </SectionTitle>
          <div className="enter mt-5" style={{ '--enter-delay': '420ms' } as React.CSSProperties}>
            <Bookshelf />
          </div>
        </section>
      )}
    </div>
  )
}

function StaticPhotoNavCard({ locale }: { locale: Locale }) {
  const photoPreview = {
    count: STATIC_PHOTOS.length,
    items: STATIC_PHOTOS.slice(0, 3).map(p => ({
      id: p.id,
      renditions: [{ src: p.src }],
      focalPoint: { x: 0.5, y: 0.5 }
    }))
  } as any

  return (
    <PhotoNavCard
      photoPreview={photoPreview}
      locale={locale}
    />
  )
}
