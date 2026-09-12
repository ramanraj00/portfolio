'use client'

import { useEffect, useState, useRef } from 'react'

export function TimeOnEarth() {
  const [age, setAge] = useState<string>('...')
  const isHovered = useRef(false)

  useEffect(() => {
    // Modify this date to your exact birth date and time!
    const birthDate = new Date('2006-01-01T00:00:00Z').getTime()
    let animationFrameId: number

    // Set initial static value on load
    const setInitialValue = () => {
      const now = Date.now()
      const diffMs = now - birthDate
      const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
      setAge(diffYears.toFixed(9))
    }
    setInitialValue()

    const updateAge = () => {
      // Only update the React state (and thus re-render) if the user is hovering
      if (isHovered.current) {
        const now = Date.now()
        const diffMs = now - birthDate
        const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
        setAge(diffYears.toFixed(9))
      }
      // Keep the loop running in the background always
      animationFrameId = requestAnimationFrame(updateAge)
    }

    updateAge()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <span
      className="font-mono font-medium tabular-nums text-foreground cursor-default rounded-md px-1 -ml-1 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => {
        isHovered.current = false
        // Snap one last time when mouse leaves so it freezes accurately
        const birthDate = new Date('2006-01-01T00:00:00Z').getTime()
        const diffYears = (Date.now() - birthDate) / (1000 * 60 * 60 * 24 * 365.25)
        setAge(diffYears.toFixed(9))
      }}
      title="Hover to see real-time calculation"
    >
      {age}
    </span>
  )
}
