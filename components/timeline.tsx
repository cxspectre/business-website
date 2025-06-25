"use client"

import { useEffect, useRef } from "react"
import { typography, getContainerClasses } from "@/lib/typography"

const timelineEntries = [
  {
    year: "2020-2023",
    client: "Global Financial Services Firm",
    description:
      "Led the digital transformation of core banking systems, implementing AI-powered risk assessment tools that reduced processing time by 68% while improving accuracy. Orchestrated the migration of legacy systems to a cloud-native architecture.",
  },
  {
    year: "2018-2020",
    client: "Multinational Automotive Manufacturer",
    description:
      "Designed and implemented an integrated supply chain optimization platform using predictive analytics and machine learning. The solution reduced inventory costs by €12M annually while improving production efficiency by 23%.",
  },
  {
    year: "2015-2018",
    client: "European Telecommunications Provider",
    description:
      "Spearheaded the development of a customer experience transformation program, leveraging AI and data analytics to create personalized service journeys. Resulted in a 34% increase in customer satisfaction and 28% reduction in churn.",
  },
  {
    year: "2012-2015",
    client: "Global Pharmaceutical Company",
    description:
      "Led the implementation of a regulatory compliance platform that streamlined approval processes across 27 countries. The solution reduced time-to-market by 40% while ensuring 100% compliance with varying regional requirements.",
  },
  {
    year: "2008-2012",
    client: "International Retail Corporation",
    description:
      "Developed and executed an omnichannel retail strategy, integrating online and physical store experiences. The initiative increased digital sales by 156% and drove a 23% increase in overall revenue within two years.",
  },
]

const Timeline = () => {
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
          Flagship <span className="gradient-text">Engagements</span>
        </h2>

        <div className="glass-card p-8 md:p-12">
          <div className="md:hidden">
            {/* Mobile Timeline */}
            <div className="relative pl-8 border-l-2 border-primary-plum">
              {timelineEntries.map((entry, index) => (
                <div key={index} className="mb-12 last:mb-0 relative">
                  <div className="absolute -left-[25px] w-6 h-6 rounded-full bg-primary-plum"></div>
                  <div className="mb-2">
                    <span className="text-xl font-bold text-dusty-rose">{entry.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{entry.client}</h3>
                  <p className="text-pearl/80">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            {/* Desktop Timeline */}
            {timelineEntries.map((entry, index) => (
              <div key={index} className="grid grid-cols-10 gap-6 mb-12 last:mb-0">
                <div className="col-span-3 text-right">
                  <span className="text-xl font-bold text-dusty-rose">{entry.year}</span>
                </div>
                <div className="col-span-7">
                  <h3 className="text-xl font-bold mb-2">{entry.client}</h3>
                  <p className="text-pearl/80">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
