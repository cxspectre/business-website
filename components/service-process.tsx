"use client"

import { motion } from "framer-motion"
import { 
  Award, 
  Users, 
  Shield, 
  Layout,
  Workflow,
  Scale,
  ArrowRight,
  CheckCircle2,
  Trophy
} from "lucide-react"
import Link from "next/link"
import { typography, getContainerClasses } from "@/lib/typography"

const impactMetrics = [
  {
    icon: Award,
    metric: "25+",
    label: "Years",
    description: "Leading high-stakes enterprise transformation",
    detail: "Deep expertise in multi-million euro programs across global environments."
  },
  {
    icon: Users,
    metric: "90%+",
    label: "Adoption",
    description: "Cross-team transformation success rate",
    detail: "Embedded ownership that endures across business and IT boundaries."
  },
  {
    icon: Shield,
    metric: "Zero",
    label: "Downtime",
    description: "Global governance implementation",
    detail: "Risk-managed change that protects operational continuity."
  }
]

const clientOutcomes = [
  {
    icon: Layout,
    title: "Governance & Structure",
    stats: [
      "100% risk-based prioritization aligned to board mandates",
      "Cross-functional steering that survived executive churn",
      "Full compliance with ISO 27001, BCBS 239, GDPR"
    ]
  },
  {
    icon: Workflow,
    title: "Sustainable Delivery",
    stats: [
      "12+ months continuous agile rhythm without drift",
      "Escalation logic embedded in operational steering",
      "Roadmaps still in use 2+ years post-launch"
    ]
  },
  {
    icon: Scale,
    title: "Measurable Impact",
    stats: [
      "40% reduction in infrastructure costs",
      "200+ hours/month efficiency gains",
      "Zero critical findings in regulatory audits"
    ]
  }
]

const ClientResults = () => {
  return (
    <section className={`w-full ${typography.sectionSpacing.medium} bg-gradient-to-b from-white to-gray-50`}>
      <div className={getContainerClasses("main", "section")}>
        {/* Results Overview Group */}
        <div className="space-y-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <Trophy className="w-4 h-4 text-[#b48a98]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#b48a98]">Proven Impact</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${typography.h2} text-gray-900 ${typography.spacing.titleMargin}`}
            >
              From Complexity to Clarity — Backed by Results
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${typography.subtitle.large} max-w-2xl mx-auto`}
            >
              We don't just deliver change. We embed it. Explore the impact behind our frameworks.
            </motion.p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {impactMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-4 lg:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#b48a98]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#b48a98]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-gray-900">{metric.metric}</span>
                        <span className="text-[#b48a98] font-medium">{metric.label}</span>
                      </div>
                      <p className="text-gray-800 font-medium mb-2 leading-snug">{metric.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{metric.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Client Outcomes Group */}
        <div className="mt-16 space-y-8">
          {/* Client Outcomes */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
            {clientOutcomes.map((outcome, idx) => {
              const Icon = outcome.icon
              return (
                <motion.div
                  key={outcome.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className={`bg-gradient-to-br p-4 lg:p-5 rounded-2xl flex flex-col min-h-[320px] ${
                    idx % 2 === 0 
                      ? 'from-[#b48a98]/5 via-[#b48a98]/3 to-transparent shadow-sm' 
                      : 'from-[#b48a98]/7 via-[#b48a98]/4 to-transparent shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#b48a98]/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#b48a98]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{outcome.title}</h3>
                  </div>
                  <div className="space-y-2.5 flex-grow">
                    {outcome.stats.map((stat, statIdx) => (
                      <motion.div
                        key={statIdx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + statIdx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm"
                      >
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#b48a98]" strokeWidth={1.5} />
                        </div>
                        <span className="text-gray-700 text-sm leading-tight">{stat}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center pt-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full hover:bg-[#b48a98]/90 transition-all duration-300 text-sm font-medium group shadow-sm hover:shadow-md"
            >
              Discuss your transformation goals
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
      </div>
    </section>
  )
}

export default ClientResults 