"use client"

import { motion } from "framer-motion"
import { Brain, Rocket, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { typography, getContainerClasses } from "@/lib/typography"

const credibilityMarkers = [
  {
    icon: Brain,
    label: "Strategy-Driven",
    description: "Clarity in complexity"
  },
  {
    icon: Rocket,
    label: "Enterprise-Ready",
    description: "Built for scale"
  },
  {
    icon: CheckCircle2,
    label: "Proven Execution",
    description: "Measurable impact"
  }
]

const ServiceHero = () => {
  return (
    <section className={`relative ${typography.sectionSpacing.large} bg-gradient-to-br from-slate-50 to-white overflow-hidden`}>
      <div className={getContainerClasses("main", "section")}>
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-sm font-medium text-[#b48a98] mb-4"
            >
              Our Approach
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]"
            >
              Solving What Matters{" "}
              <span className="text-[#b48a98]">
                in the Digital Space
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              From advisory to execution, we help leaders navigate transformation with clarity, consequence, and measurable impact.
            </motion.p>

            {/* Credibility Markers */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {credibilityMarkers.map((marker, idx) => {
                const Icon = marker.icon
                return (
                  <motion.div
                    key={marker.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#b48a98]/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-[#b48a98]" />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {marker.label}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {marker.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full hover:bg-[#b48a98]/90 transition-all duration-300 text-sm font-medium group shadow-sm hover:shadow-md"
              >
                Explore Our Expertise
                <motion.span
                  className="w-4 h-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#b48a98]/20 via-[#b48a98]/10 to-[#b48a98]/5 p-8">
                <div className="w-full h-full rounded-xl bg-white/80 backdrop-blur-sm border border-[#b48a98]/10 shadow-xl">
                  {/* Add decorative elements or illustrations here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 opacity-50">
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <div
                          key={idx}
                          className="w-16 h-16 rounded-lg bg-[#b48a98]/10"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-8 right-8 w-64 h-64 bg-[#b48a98]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-8 left-8 w-48 h-48 bg-[#b48a98]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero 