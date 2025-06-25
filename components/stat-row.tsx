"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { typography, getContainerClasses } from "@/lib/typography"

const stats = [
  { label: "Years Experience", value: "23+" },
  { label: "Projects Delivered", value: "75+" },
  { label: "Budget Managed", value: "€250M+" },
]

const clients = [
  { name: "Heineken", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Vodafone", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Bayer", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Société Générale", logo: "/placeholder.svg?height=40&width=120" },
  { name: "AUDI", logo: "/placeholder.svg?height=40&width=120" },
]

const StatRow = () => {
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
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 glass-card">
                <div className="text-3xl md:text-4xl font-bold text-pearl mb-2">{stat.value}</div>
                <div className="text-dusty-rose">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-glass-border">
            <h3 className="text-xl font-bold mb-8 text-center">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {clients.map((client, index) => (
                <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatRow
