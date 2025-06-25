"use client"

import { useEffect, useRef, useState } from "react"
import { Cpu, CloudOff, ShieldAlert, Users2, Database, ChevronRight } from "lucide-react"

const ProblemCards = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const prefersReducedMotion = useRef<boolean>(false)

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveCardIndex(index)
            }
          })
        },
        { 
          threshold: [0.5],
          rootMargin: "-45% 0px -45% 0px"
        }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  const problems = [
    {
      icon: Cpu,
      title: "AI Implementation Challenges",
      description: "Moving from AI proof-of-concepts to production is stalling. Security, compliance, and integration hurdles are blocking real business value.",
      solution: "We help you build a secure, compliant AI pipeline that delivers measurable ROI."
    },
    {
      icon: CloudOff,
      title: "Cloud Cost Management",
      description: "Multi-cloud environments are causing spiraling costs. Lack of governance leads to inefficient resource usage and security risks.",
      solution: "We implement cloud cost optimization strategies and governance frameworks that reduce spend while maintaining performance."
    },
    {
      icon: ShieldAlert,
      title: "Regulatory Compliance",
      description: "Evolving regulations like DORA and BCBS 239 force costly project rework. Compliance requirements threaten delivery timelines.",
      solution: "Our compliance-first approach ensures your projects meet regulations without compromising delivery dates."
    },
    {
      icon: Users2,
      title: "Team Alignment",
      description: "Business, data, and operations teams work in silos. Communication gaps lead to reduced velocity and increased change resistance.",
      solution: "We create unified workflows and communication frameworks that align teams and accelerate delivery."
    },
    {
      icon: Database,
      title: "Data Quality Issues",
      description: "Poor data quality undermines AI initiatives. Inconsistent data and missing metadata produce unreliable insights.",
      solution: "We implement data quality frameworks and governance that ensure your AI systems deliver trustworthy results."
    }
  ]

  return (
    <section className="relative w-full min-h-screen bg-midnight py-24">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24 lg:w-[40%] max-w-xl">
            <p className="inline-block text-primary-plum font-medium px-4 py-2 rounded-full bg-primary-plum/10 border border-primary-plum/20 mb-6 text-sm">
              Digital Transformation Strategy
            </p>
            <h2 className="text-[56px] font-bold leading-tight mb-6">
              <span className="text-pearl/40">Facing</span><br />
              <span className="text-pearl/40">These</span><br />
              <span className="bg-gradient-to-r from-pearl to-primary-plum bg-clip-text text-transparent">Challenges?</span>
            </h2>
            <p className="text-xl text-pearl/70 leading-relaxed">
              We help businesses overcome their IT challenges through strategic planning, efficient execution, and innovative solutions.
            </p>
          </div>

          {/* Right Content - Scrolling Cards */}
          <div className="relative lg:w-[60%] lg:ml-auto space-y-6 mt-12 lg:mt-0">
            {/* Arrow Indicator */}
            <div 
              aria-hidden="true"
              className={`hidden lg:flex absolute -right-5 items-center justify-center
                w-10 h-10 rounded-full
                bg-[#CEA7B1]/25 border-2 border-[#5B3C46]
                shadow-[0_0_6px_rgba(255,238,243,0.25)]
                transition-all duration-450 ease-out
                ${activeCardIndex === null ? 'opacity-0' : 'opacity-100'}
                z-50`}
              style={{
                transform: `translateY(${activeCardIndex !== null ? `${activeCardIndex * 180 + 90}px` : '0px'})`,
                transition: prefersReducedMotion.current ? 'none' : 'all 0.45s ease-out'
              }}
            >
              <ChevronRight className="w-6 h-6 text-[#5B3C46]" strokeWidth={2} />
            </div>

            {problems.map((problem, index) => (
              <div 
                key={index}
                ref={(el) => { cardRefs.current[index] = el }}
                className="group"
              >
                <div className="relative bg-[#0B1218] rounded-2xl border border-white/10 p-8 hover:border-primary-plum/30 transition-all duration-300">
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-plum/20 to-transparent">
                        <problem.icon className="w-6 h-6 text-primary-plum" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-pearl group-hover:text-primary-plum transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-pearl/70 text-base leading-relaxed mb-3">
                        {problem.description}
                      </p>
                      <p className="text-primary-plum text-base leading-relaxed">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemCards 