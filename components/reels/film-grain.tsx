'use client'

// Lightweight film grain effect using a CSS-only noise pattern.
// Replaces the previous SVG feTurbulence approach which created a 96-megapixel
// animated overlay and destroyed Safari GPU compositing.
export function FilmGrain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] opacity-[0.06]"
      style={{
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMAESIzRFUl8oYEAAAASUlEQVQ4y2NgsGFgYGBhBREsDAwMFkCKBUQJMjCwAilBIEUITDECKSYGhv8QirEASLEwMEApRiDFBKREGBhEQBQTkBIBUUwAACkMAXh08lVmAAAAAElFTkSuQmCC")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '48px 48px',
      }}
      aria-hidden
    />
  )
}
