"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const services = [
  {
    id: 1,
    title: "Digital Strategy",
    description:
      "We help you develop a comprehensive digital roadmap aligned with your business objectives. Our strategic approach identifies opportunities for AI integration, process optimization, and technology modernization to drive sustainable growth.",
    benefits: [
      "Align technology investments with business goals",
      "Identify high-impact AI opportunities",
      "Create a clear implementation roadmap",
      "Optimize resource allocation",
    ],
  },
  {
    id: 2,
    title: "AI Implementation",
    description:
      "Transform your operations with custom AI solutions tailored to your specific needs. From initial concept to full deployment, we ensure seamless integration of AI technologies that deliver measurable business value.",
    benefits: [
      "Custom AI solutions for your unique challenges",
      "End-to-end implementation support",
      "Integration with existing systems",
      "Measurable ROI and performance metrics",
    ],
  },
  {
    id: 3,
    title: "Cloud Migration",
    description:
      "Modernize your infrastructure with secure, scalable cloud solutions. Our cloud migration services help you reduce costs, increase flexibility, and improve performance while ensuring business continuity throughout the transition.",
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability and flexibility",
      "Enhanced security and compliance",
      "Minimal disruption during migration",
    ],
  },
  {
    id: 4,
    title: "Process Optimization",
    description:
      "Streamline workflows and eliminate inefficiencies with our data-driven process optimization services. We analyze your current operations, identify bottlenecks, and implement targeted improvements to enhance performance and reduce costs.",
    benefits: [
      "Identify and eliminate process bottlenecks",
      "Reduce operational costs",
      "Improve customer and employee experience",
      "Enable data-driven decision making",
    ],
  },
  {
    id: 5,
    title: "Change Management",
    description:
      "Successfully navigate organizational transformation with our comprehensive change management approach. We ensure your team embraces new technologies and processes, maximizing adoption and minimizing resistance.",
    benefits: [
      "Increase adoption of new technologies",
      "Reduce resistance to change",
      "Maintain productivity during transitions",
      "Build lasting organizational capabilities",
    ],
  },
  {
    id: 6,
    title: "Technology Advisory",
    description:
      "Make informed decisions with expert guidance on technology investments and strategy. We provide strategic insights on emerging technologies, market trends, and best practices to help you stay ahead of the competition.",
    benefits: [
      "Expert guidance on technology investments",
      "Insights on emerging trends and innovations",
      "Vendor selection and management support",
      "Independent, objective recommendations",
    ],
  },
]

const ServiceGrid = () => {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
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
    <>
      <section ref={sectionRef} className={`w-full ${typography.sectionSpacing.small} section-animate`}>
        <div className={getContainerClasses("main", "section")}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card p-8 cursor-pointer hover:bg-glass-fill/20"
                onClick={() => setSelectedService(service)}
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-pearl/80 line-clamp-3">{service.description}</p>
                <button className="mt-4 text-dusty-rose hover:text-pearl transition-colors">Learn more</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="glass-card p-8 md:p-12 max-w-2xl w-full z-10 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-pearl/70 hover:text-pearl transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <p className="text-pearl/90 mb-8">{selectedService.description}</p>

            <div>
              <h3 className="text-xl font-bold mb-4">Why this matters</h3>
              <ul className="space-y-2">
                {selectedService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-plum mr-2">•</span>
                    <span className="text-pearl/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ServiceGrid
