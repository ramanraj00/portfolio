'use client'

import { useEffect, useState } from 'react'

export function ProfileViews() {
  const [views, setViews] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/views')
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => setViews(null))
  }, [])

  if (!views) return null

  return (
    <div className="flex items-center gap-1.5 text-muted-foreground ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[18px] h-[18px] opacity-80"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span>{views}</span>
    </div>
  )
}
