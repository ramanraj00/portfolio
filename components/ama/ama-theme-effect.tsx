'use client'

import { useEffect } from 'react'

export function AmaThemeEffect() {
  useEffect(() => {
    document.documentElement.classList.add('ama-active')
    document.body.classList.add('ama-active')
    return () => {
      document.documentElement.classList.remove('ama-active')
      document.body.classList.remove('ama-active')
    }
  }, [])
  
  return null
}
