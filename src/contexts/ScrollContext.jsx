import { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react'

// Separate contexts so dimension-only consumers (e.g. BauhausWorld) don't
// re-render on every scroll frame — only on viewport resize.
const DimensionsContext = createContext(null)
const ScrollContext = createContext(null)

export function ScrollProvider({ children }) {
  const [vw, setVw] = useState(window.innerWidth)
  const [vh, setVh] = useState(window.innerHeight)
  const [scrollY, setScrollY] = useState(0)

  const currentScrollY = useRef(0)
  const targetScrollY  = useRef(0)
  const rafId          = useRef(null)

  useEffect(() => {
    const handleScroll = () => { targetScrollY.current = window.scrollY }
    const handleResize = () => {
      setVw(window.innerWidth)
      setVh(window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    const animate = () => {
      const current = currentScrollY.current
      const target  = targetScrollY.current
      const next    = current + (target - current) * 0.08
      if (Math.abs(next - current) > 0.1) {
        currentScrollY.current = next
        setScrollY(next)
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  const u = Math.min(vw, vh)
  const p = scrollY / vh

  // Stable object — only changes on resize, not scroll
  const dimensions = useMemo(() => ({ vw, vh, u }), [vw, vh, u])

  return (
    <DimensionsContext.Provider value={dimensions}>
      <ScrollContext.Provider value={{ p, vw, vh, u }}>
        {children}
      </ScrollContext.Provider>
    </DimensionsContext.Provider>
  )
}

export function useScroll() {
  return useContext(ScrollContext)
}

// Use this in components that only need viewport dimensions (not scroll position).
// Avoids re-renders on every scroll frame.
export function useDimensions() {
  return useContext(DimensionsContext)
}
