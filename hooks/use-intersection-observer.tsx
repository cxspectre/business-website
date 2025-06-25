"use client"

import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  onIntersect?: (entry: IntersectionObserverEntry) => void
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const elementRef = useRef<T>(null)

  const { threshold = 0.3, rootMargin = "0px", onIntersect } = options

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting)
          if (entry.isIntersecting && onIntersect) {
            onIntersect(entry)
          }
        })
      },
      { threshold, rootMargin }
    )

    const currentElement = elementRef.current
    observer.observe(currentElement)

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
      observer.disconnect()
    }
  }, [threshold, rootMargin, onIntersect, isMounted])

  return {
    elementRef,
    isIntersecting: isMounted && isIntersecting,
    isMounted
  }
} 