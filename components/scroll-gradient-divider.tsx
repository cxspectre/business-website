"use client"

import { useEffect, useRef, useState } from "react"

const ScrollGradientDivider = () => {
  const [opacity, setOpacity] = useState(0.3)
  const lastScrollY = useRef(0)
  const dividerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return

      const rect = dividerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementVisible = rect.top < viewportHeight && rect.bottom >= 0

      if (elementVisible) {
        const currentScrollY = window.scrollY
        const scrollingDown = currentScrollY > lastScrollY.current
        
        // Adjust opacity based on scroll direction
        setOpacity(prev => {
          const newOpacity = scrollingDown ? 
            Math.min(prev + 0.05, 0.6) : 
            Math.max(prev - 0.05, 0.1)
          return newOpacity
        })
        
        lastScrollY.current = currentScrollY
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div 
      ref={dividerRef}
      className="w-full h-[24px] my-7"
      style={{
        background: `linear-gradient(135deg, rgba(180, 138, 152, ${opacity}), rgba(180, 138, 152, ${opacity * 0.5}))`
      }}
    />
  )
}

export default ScrollGradientDivider 