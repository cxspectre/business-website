"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface SectionObserverProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
}

export const SectionObserver = ({ children, threshold = 0.3, rootMargin = "0px" }: SectionObserverProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold, rootMargin },
    )

    const currentRef = sectionRef.current
    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [threshold, rootMargin, isMounted])

  return (
    <div ref={sectionRef} className={`section-animate ${!isMounted ? 'opacity-0' : ''}`}>
      {children}
    </div>
  )
}
