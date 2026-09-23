'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import {
  ReelsIcon,
  MediaIcon,
  PhotosIcon,
  PreferencesIcon,
  SiteReturnIcon,
} from '~/components/dock-icons'
import { DockGlass, DockItem, DockTip } from '~/components/dock'
import { Preferences } from '~/components/preferences'
import { useDockActiveIndicator } from '~/hooks/use-dock-active-indicator'
import { adminGoKeyFor, useAdminGoShortcuts } from '~/hooks/use-dock-go-shortcuts'

const ITEMS = [
  { href: '/admin/ama', label: 'AMA', icon: ReelsIcon },
  { href: '/admin/media', label: 'Media', icon: MediaIcon },
  { href: '/admin/photos', label: 'Photos', icon: PhotosIcon },
] as const

export function AdminDockFallback() {
  return (
    <nav
      className="dock"
      aria-label={'Admin navigation'}
      aria-busy="true"
    >
      <DockGlass />
      <DockItem
        href="/admin"
        label="Overview"
        goKey={adminGoKeyFor('/admin')}
      >
        <span className="dock-avatar">
          <Image src="/images/avatar2.png" alt="" width={32} height={32} />
        </span>
      </DockItem>
      <span className="dock-rule" aria-hidden />
      {ITEMS.map(({ href, label, icon: Icon }) => (
        <DockItem
          key={href}
          href={href}
          label={label}
          goKey={adminGoKeyFor(href)}
        >
          <Icon />
        </DockItem>
      ))}
      <span className="dock-rule" aria-hidden />
      <DockItem
        href="/"
        label="Back to site"
        goKey={adminGoKeyFor('/')}
      >
        <SiteReturnIcon />
      </DockItem>
      <button
        type="button"
        className="dock-item"
        aria-label={'Loading preferences'}
        disabled
      >
        <PreferencesIcon />
      </button>
    </nav>
  )
}

export function AdminDock() {
  const pathname = usePathname()
  const activeHref =
    pathname === '/admin'
      ? '/admin'
      : ITEMS.find(({ href }) => pathname.startsWith(href))?.href
  const { dockRef, indicatorRef, registerItem, handleNavigate } =
    useDockActiveIndicator(activeHref)

  useAdminGoShortcuts({
    activeHref,
    onNavigate: handleNavigate,
  })

  return (
    <nav
      ref={dockRef}
      className="dock"
      aria-label={'Admin navigation'}
    >
      <DockGlass />
      <span ref={indicatorRef} className="dock-active-indicator" aria-hidden />
      <DockItem
        href="/admin"
        label="Overview"
        goKey={adminGoKeyFor('/admin')}
        active={pathname === '/admin'}
        itemRef={(element) => registerItem('/admin', element)}
        onNavigate={handleNavigate}
      >
        <span className="dock-avatar">
          <Image src="/images/avatar2.png" alt="" width={32} height={32} />
        </span>
      </DockItem>
      <span className="dock-rule" aria-hidden />
      {ITEMS.map(({ href, label, icon: Icon }) => (
        <DockItem
          key={href}
          href={href}
          label={label}
          goKey={adminGoKeyFor(href)}
          active={pathname.startsWith(href)}
          itemRef={(element) => registerItem(href, element)}
          onNavigate={handleNavigate}
        >
          <Icon />
        </DockItem>
      ))}
      <span className="dock-rule" aria-hidden />
      <DockItem
        href="/"
        label="Back to site"
        goKey={adminGoKeyFor('/')}
        onNavigate={handleNavigate}
      >
        <SiteReturnIcon />
      </DockItem>
      <Preferences variant="admin" />
    </nav>
  )
}
