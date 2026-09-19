'use client'

import { useEffect } from 'react'

export function ReelsThemeEffect() {
  useEffect(() => {
    document.documentElement.classList.add('reels-active')
    document.body.classList.add('reels-active')
    return () => {
      document.documentElement.classList.remove('reels-active')
      document.body.classList.remove('reels-active')
    }
  }, [])
  
  return null
}
