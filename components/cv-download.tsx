"use client"

import { useEffect, useRef } from "react"
import { FileDown } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const CvDownload = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`w-full ${typography.sectionSpacing.medium} section-animate`}>
      <div className={getContainerClasses("narrow", "section")}>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to learn more about my experience?</h2>
        <a href="#" className="btn btn-secondary inline-flex items-center">
          <FileDown size={18} className="mr-2" />
          Download CV
        </a>
      </div>
    </section>
  )
}

export default CvDownload
