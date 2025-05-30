"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Cog, Brain, MousePointer2 } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const pyramidLayers = [
  {
    icon: Shield,
    title: "Governance Built-In",
    description: "ISO 27001, GDPR, DORA — not as afterthoughts, but baked into the foundation.",
    color: "from-[#b48a98]/5 to-[#b48a98]/10",
    hoverColor: "from-[#b48a98]/10 to-[#b48a98]/20",
    width: "w-[85%] sm:w-[75%]",
    translate: "translate-x-[8%] sm:translate-x-[16.67%]"
  },
  {
    icon: Cog,
    title: "Architecture That Fits Reality",
    description: "Designed for multi-cloud, SAP, and real-world stress — not lab conditions.",
    color: "from-[#b48a98]/10 to-[#b48a98]/15",
    hoverColor: "from-[#b48a98]/15 to-[#b48a98]/25",
    width: "w-[92%] sm:w-[87.5%]",
    translate: "translate-x-[4%] sm:translate-x-[7.14%]"
  },
  {
    icon: Brain,
    title: "Human-Centric Execution",
    description: "Transformation only works when people align first. ADKAR logic makes it real.",
    color: "from-[#b48a98]/15 to-[#b48a98]/20",
    hoverColor: "from-[#b48a98]/20 to-[#b48a98]/30",
    width: "w-full",
    translate: "translate-x-0"
  }
]

const ValueProposition = () => {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Check for touch device and reduced motion preference
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Debounced hover handler to prevent rapid state changes
  const handleHover = useCallback((index: number | null) => {
    if (isTouchDevice) return // Don't handle hover on touch devices
    setHoveredLayer(index)
    if (index !== null) setHasInteracted(true)
  }, [isTouchDevice])

  // Handle touch interaction
  const handleTouch = useCallback((index: number) => {
    if (!isTouchDevice) return // Only handle touch on touch devices
    setHoveredLayer(prev => prev === index ? null : index)
    setHasInteracted(true)
  }, [isTouchDevice])

  return (
    <section className={`w-full bg-gradient-to-b from-white to-gray-50 ${typography.sectionSpacing.medium} relative overflow-hidden`}>
      <div className={`${getContainerClasses("main", "section")} relative z-10`}>
        {/* Section Header */}
        <div className={typography.spacing.sectionMargin}>
          <motion.span
            initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isReducedMotion ? 0 : 0.5 }}
            className={`text-[#b48a98] ${typography.label.large} inline-block ${typography.spacing.itemMargin}`}
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isReducedMotion ? 0 : 0.5, delay: 0.1 }}
            className={`${typography.h2} text-midnight ${typography.spacing.titleMargin}`}
          >
            What Makes Transformation Hold – When Pressure Comes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isReducedMotion ? 0 : 0.5, delay: 0.2 }}
            className={`${typography.body.large} text-gray-600 max-w-3xl ${typography.spacing.componentMargin}`}
          >
            Most transformations crumble under real-world pressure. Ours don't. Here's why.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[45%,55%] gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Content moved to section header above */}
          <div className="max-w-xl">
            {/* Content moved to unified header above */}
          </div>

          {/* Right Column - Interactive Pyramid */}
          <div className="relative py-8 sm:py-12 lg:col-span-2">
            {/* Hover/Touch Instruction */}
            <AnimatePresence>
              {!hasInteracted && (
                <motion.div
                  initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: isReducedMotion ? 0 : 0.3 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs sm:text-sm text-[#b48a98]/80 bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm backdrop-blur-sm border border-[#b48a98]/10 whitespace-nowrap"
                >
                  <MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{isTouchDevice ? "Tap to explore each layer" : "Hover to explore each layer"}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-3 sm:space-y-4">
              {pyramidLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: isReducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: isReducedMotion ? 0 : 0.5,
                    delay: isReducedMotion ? 0 : index * 0.1
                  }}
                  onHoverStart={() => handleHover(index)}
                  onHoverEnd={() => handleHover(null)}
                  onClick={() => handleTouch(index)}
                  className={`${layer.width} ${layer.translate} relative cursor-pointer group select-none`}
                >
                  <motion.div
                    className={`w-full rounded-lg sm:rounded-xl border border-[#b48a98]/10 shadow-sm 
                      transition-all duration-300 backdrop-blur-[2px] overflow-hidden
                      ${hoveredLayer === index ? 'shadow-lg scale-[1.02] -translate-y-1' : 'shadow-sm'}`}
                    style={{
                      background: `linear-gradient(to right, ${hoveredLayer === index ? layer.hoverColor : layer.color})`,
                    }}
                  >
                    <div className="p-3 sm:p-4 md:p-5">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`p-2 sm:p-2.5 rounded-lg bg-white/90 shadow-sm transform transition-transform duration-300
                          ${hoveredLayer === index ? 'scale-110 rotate-[360deg]' : ''}`}>
                          <layer.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#b48a98]" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-300 truncate
                            ${hoveredLayer === index ? 'text-[#b48a98]' : 'text-midnight'}`}>
                            {layer.title}
                          </h3>
                        </div>
                      </div>
                      <AnimatePresence mode="wait">
                        {hoveredLayer === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: isReducedMotion ? 0 : 0.2 }}
                          >
                            <div className="mt-3 sm:mt-4 pl-9 sm:pl-14 pr-2 sm:pr-4">
                              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {layer.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                  
                  {/* Layer Connection Line */}
                  {index < pyramidLayers.length - 1 && (
                    <div className="absolute left-8 sm:left-12 bottom-0 w-px h-3 sm:h-4 bg-gradient-to-b from-[#b48a98]/10 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pyramid Shape Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(180, 138, 152, 0.01) 0%, rgba(180, 138, 152, 0.03) 100%)',
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition 