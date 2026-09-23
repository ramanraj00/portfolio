import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'

import { AmbientBackground } from '~/components/ambient-background'
import { Dock, DockFallback } from '~/components/dock'
import { PreviewCardTimingProvider } from '~/components/preview-card-timing'
import {
  RouteMotionController,
  RouteViewTransition,
} from '~/components/route-motion-controller'
import { SiteFooter } from '~/components/site-footer'
import { ThemeProvider } from '~/components/theme-provider'
import { getGitHub, getSocial } from '~/lib/social-live'
import { PREPAINT_SCRIPT } from '~/lib/security/inline-scripts'
import { seo } from '~/lib/seo'
import { cn } from '~/lib/utils'

import { fontVariablesForLocale } from '../fonts'

export const rootMetadata: Metadata = {
  metadataBase: seo.url,
  title: {
    default: 'Raman Raj',
    template: '%s | Raman Raj',
  },
}

export async function SiteDocument({
  children,
  isAdmin = false,
}: Readonly<{
  children: React.ReactNode
  isAdmin?: boolean
}>) {
  const fontVariables = fontVariablesForLocale('en')

  if (isAdmin) {
    return (
      <html
        lang="en"
        suppressHydrationWarning
        className={cn('font-sans', fontVariables, 'public-site')}
      >
        <head>
          <script dangerouslySetInnerHTML={{ __html: PREPAINT_SCRIPT }} />
        </head>
        <body className="antialiased">
          <ThemeProvider>
            <AmbientBackground />
            <div className="flex min-h-screen flex-col pb-20">
              <main className="flex-1 pt-14">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    )
  }

  const [social, github] = await Promise.all([getSocial(), getGitHub()])

  return (
    <html
      lang="en"
      data-route-motion="none"
      suppressHydrationWarning
      className={cn('font-sans', fontVariables, 'public-site')}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PREPAINT_SCRIPT }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <PreviewCardTimingProvider>
            <RouteMotionController />
            <AmbientBackground />
            <div className="flex min-h-screen flex-col pb-20">
              <main className="flex-1 pt-14">
                <RouteViewTransition>{children}</RouteViewTransition>
              </main>
              <SiteFooter social={social} github={github} />
            </div>
            <Suspense fallback={<DockFallback />}>
              <Dock />
            </Suspense>
          </PreviewCardTimingProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
