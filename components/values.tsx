"use client"

import { useEffect, useRef } from "react"
import { typography, getContainerClasses } from "@/lib/typography"

const values = [
  {
    title: "Empowerment",
    description:
      "We believe in enabling our clients to take ownership of their digital future. Our solutions are designed to build capabilities, not dependencies.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication and honest feedback are at the core of our approach. We maintain complete visibility throughout the engagement process.",
  },
  {
    title: "Resilience",
    description:
      "We build solutions that withstand the test of time and adapt to changing business needs. Our focus is on creating sustainable, long-term value.",
  },
  {
    title: "Sustainability",
    description:
      "Environmental and social responsibility guide our recommendations. We prioritize solutions that minimize ecological impact while maximizing business outcomes.",
  },
]

const Values = () => {
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
      <div className={getContainerClasses("main", "section")}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="gradient-text">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-pearl/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
