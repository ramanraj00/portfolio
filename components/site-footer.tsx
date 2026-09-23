import { cacheLife } from 'next/cache'
import Link from 'next/link'

import { FooterClock } from '~/components/footer-clock'
import {
  EmailCard,
  GitHubCard,
  type GitHubSnapshot,
  type SocialSnapshot,
  LinkedInCard,
  MediumCard,
  XCard,
  
} from '~/components/social-cards'
import { brailleText } from '~/lib/braille'

function Tree({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="footer-tree">
      <h2 className="footer-label">
        {label}
      </h2>
      <ul>{children}</ul>
    </div>
  )
}

async function CopyrightYear() {
  'use cache'
  cacheLife({ stale: 86_400, revalidate: 86_400, expire: 86_400 })

  return new Date().getFullYear()
}

export function SiteFooter({
  social,
  github,
}: {
  social: { x: SocialSnapshot; linkedin: SocialSnapshot; medium: SocialSnapshot }
  github: GitHubSnapshot
}) {
  return (
    <footer className="mx-auto mt-24 w-full max-w-[37.5rem] px-6 pb-24 text-sm text-muted-foreground sm:pb-12">
      <div className="hairline-top grid grid-cols-2 gap-x-6 gap-y-8 pt-8 sm:grid-cols-3">
        <Tree label="contact">
          <li>
            <XCard data={social.x} />
          </li>
          <li>
            <LinkedInCard data={social.linkedin} />
          </li>
          <li>
            <MediumCard data={social.medium} />
          </li>
          <li>
            <GitHubCard data={github} />
          </li>
          <li>
            <EmailCard address="r02519625@gmail.com" />
          </li>
        </Tree>
        <Tree label="index">
          <li>
            <Link href="/" className="footer-tree-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="footer-tree-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/photos" className="footer-tree-link">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/blog" className="footer-tree-link">
              Writing
            </Link>
          </li>
          <li>
            <a href="/feed.xml" className="footer-tree-link">
              RSS
            </a>
          </li>
        </Tree>
        <div className="footer-colophon col-span-2 sm:order-first sm:col-span-1">
          <div>
            <p>
              © <CopyrightYear /> Raman Raj
            </p>
            <p className="footer-braille" aria-hidden>
              {brailleText('RAMAN RAJ')}
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <FooterClock />
            <div className="footer-geo" aria-hidden>
              <svg className="footer-geo-globe" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="9" />
                <ellipse cx="10" cy="10" rx="4" ry="9" />
                <path d="M1 10h18M1.9 6h16.2M1.9 14h16.2" />
              </svg>
              <span className="footer-geo-lines">
                <span>28.6139° N</span>
                <span>77.2090° E</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
