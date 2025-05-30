"use client"
import { useEffect, useRef, useState } from "react"
import { Lightbulb, Clock, Target } from "lucide-react"

const ChallengeCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index])
            }
          })
        },
        { threshold: 0.3 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [visibleCards])

  return (
    <section className="w-full -mt-16">
      <div className="w-full">
        <div className="relative rounded-[32px] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight to-midnight/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-plum/5 via-transparent to-transparent opacity-80" />
          
          {/* Content Container */}
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 max-w-[1800px] mx-auto">
              {/* Content Side */}
              <div className="lg:w-[30%] mb-12 lg:mb-0">
                <div className="inline-block">
                  <p className="text-primary-plum font-medium px-4 py-2 rounded-full bg-primary-plum/10 border border-primary-plum/20 mb-4 text-sm">
                    Digital Transformation Strategy
                  </p>
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
                  <span className="text-pearl/40">Unlock Your</span>{" "}
                  <span className="bg-gradient-to-r from-pearl to-primary-plum bg-clip-text text-transparent">
                    Digital Potential
                  </span>
                </h2>
                <p className="text-xl text-pearl/70 leading-relaxed">
                  We help businesses overcome their IT challenges through strategic planning, efficient execution, and innovative solutions.
                </p>
              </div>

              {/* Cards Side */}
              <div className="lg:w-[70%] space-y-3">
                {/* Card 1 */}
                <div
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[0] = el
                  }}
                  className={`group transition-all duration-700 ease-out transform
                    ${visibleCards.includes(0) 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-[100px]"}`}
                >
                  <div className="relative bg-gradient-to-r from-midnight to-midnight/90 backdrop-blur-sm rounded-xl border border-white/10 p-5 overflow-hidden group-hover:border-primary-plum/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-primary-plum/[0.02] group-hover:bg-primary-plum/[0.04] transition-colors duration-300" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-plum/5 rounded-full blur-3xl group-hover:bg-primary-plum/10 transition-all duration-300" />
                    
                    <div className="relative flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-plum/20 to-transparent ring-1 ring-primary-plum/20">
                          <Lightbulb className="w-6 h-6 text-primary-plum" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-pearl group-hover:text-primary-plum transition-colors duration-300">
                          Fast & High-Quality Solutions
                        </h3>
                        <p className="text-pearl/70 text-base leading-relaxed">
                          Tailored strategies that align with your requirements, leveraging proven methodologies for optimal results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[1] = el
                  }}
                  className={`group transition-all duration-700 ease-out transform delay-150
                    ${visibleCards.includes(1) 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-[100px]"}`}
                >
                  <div className="relative bg-gradient-to-r from-midnight to-midnight/90 backdrop-blur-sm rounded-xl border border-white/10 p-5 overflow-hidden group-hover:border-primary-plum/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-primary-plum/[0.02] group-hover:bg-primary-plum/[0.04] transition-colors duration-300" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-plum/5 rounded-full blur-3xl group-hover:bg-primary-plum/10 transition-all duration-300" />
                    
                    <div className="relative flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-plum/20 to-transparent ring-1 ring-primary-plum/20">
                          <Clock className="w-6 h-6 text-primary-plum" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-pearl group-hover:text-primary-plum transition-colors duration-300">
                          Strategic Prioritization
                        </h3>
                        <p className="text-pearl/70 text-base leading-relaxed">
                          Efficiently implement your IT initiatives, ensuring business objectives are met without delays.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[2] = el
                  }}
                  className={`group transition-all duration-700 ease-out transform delay-300
                    ${visibleCards.includes(2) 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-[100px]"}`}
                >
                  <div className="relative bg-gradient-to-r from-midnight to-midnight/90 backdrop-blur-sm rounded-xl border border-white/10 p-5 overflow-hidden group-hover:border-primary-plum/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-primary-plum/[0.02] group-hover:bg-primary-plum/[0.04] transition-colors duration-300" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-plum/5 rounded-full blur-3xl group-hover:bg-primary-plum/10 transition-all duration-300" />
                    
                    <div className="relative flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-plum/20 to-transparent ring-1 ring-primary-plum/20">
                          <Target className="w-6 h-6 text-primary-plum" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-pearl group-hover:text-primary-plum transition-colors duration-300">
                          AI Transformation
                        </h3>
                        <p className="text-pearl/70 text-base leading-relaxed">
                          Identify opportunities and develop strategic roadmaps for measurable AI implementation outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengeCards
