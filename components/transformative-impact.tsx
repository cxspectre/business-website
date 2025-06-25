"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Building2, Factory, Landmark, ArrowRight } from "lucide-react"
import Link from "next/link"
import { typography, getContainerClasses } from "@/lib/typography"

type Phase = "Discover" | "Design" | "Deliver" | "Drive"

interface CaseStudy {
  title: string
  client: string
  industry: string
  phases: Phase[]
  icon: any
  challenge: string
  solution: string
  impacts: string[]
  color: {
    light: string
    base: string
    dark: string
    accent: string
    icon: string
    iconColor: string
    badge: string
    hover: string
  }
}

const caseStudies: CaseStudy[] = [
  {
    title: "Regulatory Readiness",
    client: "Global Insurance Group",
    industry: "Insurance / Financial Services",
    phases: ["Discover", "Design"],
    icon: Building2,
    challenge: "Outdated compliance framework ahead of Solvency II + DORA rollout. Siloed risk data. No unified controls.",
    solution: "Mapped governance/data gaps in Discover. Built rule-based controls and co-stewardship in Design.",
    impacts: [
      "Compliance readiness 3 months early",
      "Full audit traceability",
      "Cross-functional alignment"
    ],
    color: {
      light: "bg-[#faf8f9]",
      base: "bg-[#b48a98]/10",
      dark: "text-[#996475]",
      accent: "from-[#b48a98]/10 to-[#996475]/20",
      icon: "bg-[#b48a98]/10",
      iconColor: "text-[#996475]",
      badge: "bg-[#b48a98]/10 text-[#996475]",
      hover: "group-hover:border-[#cea7b1]"
    }
  },
  {
    title: "AI Forecasting in FMCG",
    client: "Multinational CPG Enterprise",
    industry: "FMCG / Manufacturing",
    phases: ["Deliver", "Drive"],
    icon: Factory,
    challenge: "Disjointed planning across 15 OpCos led to volatility and manual workarounds.",
    solution: "Deployed AI demand platform. Integrated SAP S/4HANA + forecast feedback. Embedded process ownership via change enablement.",
    impacts: [
      "95% forecast accuracy",
      "30% inventory reduction", 
      "75% automation across OpCos"
    ],
    color: {
      light: "bg-[#faf8f9]",
      base: "bg-[#b48a98]/10",
      dark: "text-[#996475]",
      accent: "from-[#b48a98]/10 to-[#996475]/20",
      icon: "bg-[#b48a98]/10",
      iconColor: "text-[#996475]",
      badge: "bg-[#b48a98]/10 text-[#996475]",
      hover: "group-hover:border-[#cea7b1]"
    }
  },
  {
    title: "SAP Cloud Migration",
    client: "European Public Sector",
    industry: "Government / Utilities",
    phases: ["Design", "Deliver"],
    icon: Landmark,
    challenge: "Mission-critical SAP replatforming under ISO 27001 & national compliance laws.",
    solution: "Hybrid-cloud blueprint with legacy/vendor constraints. Audit-traceable sprints & fallback logic in Delivery.",
    impacts: [
      "Zero downtime",
      "Hybrid-cloud compliant",
      "Resilient rollout structure"
    ],
    color: {
      light: "bg-[#faf8f9]",
      base: "bg-[#b48a98]/10",
      dark: "text-[#996475]",
      accent: "from-[#b48a98]/10 to-[#996475]/20",
      icon: "bg-[#b48a98]/10",
      iconColor: "text-[#996475]",
      badge: "bg-[#b48a98]/10 text-[#996475]",
      hover: "group-hover:border-[#cea7b1]"
    }
  }
]

const TransformativeImpact: React.FC = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null)
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)

  return (
    <section className={`w-full ${typography.sectionSpacing.medium} bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden`}>
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#b48a98]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#b48a98]/3 rounded-full blur-3xl" />
      
      <div className={`${getContainerClasses("main", "section")} relative z-10`}>
        {/* Section Header */}
        <div className={typography.spacing.sectionMargin}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#b48a98]/10 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-[#b48a98] rounded-full"></div>
            <span className={`text-[#b48a98] ${typography.label.medium}`}>
              Proof Points
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`${typography.h2} text-midnight ${typography.spacing.titleMargin}`}
          >
            4D in Action – Real Transformation,{" "}
            <span className="bg-gradient-to-r from-[#b48a98] to-[#9a7a88] bg-clip-text text-transparent">
              Systemically Delivered
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`${typography.subtitle.large} max-w-3xl ${typography.spacing.componentMargin}`}
          >
            Real organizations, measurable outcomes, sustainable results. Here's what happens 
            when transformation is built to last.
          </motion.p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              onHoverStart={() => setHoveredCase(index)}
              onHoverEnd={() => setHoveredCase(null)}
              onClick={() => setExpandedCase(expandedCase === index ? null : index)}
              className="group relative cursor-pointer"
            >
              <div className={`relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full group-hover:-translate-y-2 ${caseStudy.color.hover}`}>
                
                {/* Header with icon */}
                <div className="relative mb-6">
                  <div className={`w-12 h-12 rounded-xl ${caseStudy.color.icon} flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 mb-4`}>
                    <caseStudy.icon className={`w-6 h-6 ${caseStudy.color.iconColor}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-midnight mb-2 group-hover:text-[#5b3c46] transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {caseStudy.client}
                    </p>
                    <p className="text-xs text-gray-500 mb-3">
                      {caseStudy.industry}
                    </p>
                  </div>
                  
                  {/* 4D Phases */}
                  <div className="flex gap-2">
                    {caseStudy.phases.map((phase) => (
                      <span
                        key={phase}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${caseStudy.color.badge}`}
                      >
                        {phase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">?</span>
                    The Challenge
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                </div>
                
                <AnimatePresence>
                  {(expandedCase === index || hoveredCase === index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">→</span>
                          What We Did
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">✓</span>
                          The Impact
                        </h4>
                        <div className="grid gap-2">
                          {caseStudy.impacts.map((impact, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center gap-3 p-2.5 rounded-lg ${caseStudy.color.light} hover:${caseStudy.color.base} transition-colors duration-300`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${caseStudy.color.iconColor.replace('text-', 'bg-')}`} />
                              <span className="text-sm text-gray-600">{impact}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle brand accent on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${caseStudy.color.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to 4D Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Different industries. Different constraints.{" "}
              <span className="font-bold bg-gradient-to-r from-[#b48a98] to-[#9a7a88] bg-clip-text text-transparent text-xl">
                One method: The TDC 4D Framework.
              </span>
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/framework"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b48a98] to-[#9a7a88] text-white rounded-full font-semibold hover:from-[#9a7a88] hover:to-[#8a6a78] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore the 4D Framework
                <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TransformativeImpact 