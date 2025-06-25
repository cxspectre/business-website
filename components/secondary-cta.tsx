"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

interface SecondaryCtaProps {
  title: string
  description: string
  ctaText: string
  ctaHref: string
}

const SecondaryCta = ({ title, description, ctaText, ctaHref }: SecondaryCtaProps) => {
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
        <h2 className={`text-4xl font-bold mb-6 text-center text-pearl`}>
          Ready for <span className="gradient-text">Real Change</span>?
        </h2>
        <p className={`text-pearl/90 mb-6 ${typography.subtitle.large} text-center`}>
          {description}
        </p>
        <Link href={ctaHref} className="btn btn-primary inline-flex items-center">
          {ctaText}
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default SecondaryCta
