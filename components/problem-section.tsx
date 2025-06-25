"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  AlertCircle, 
  ArrowRight,
  TrendingDown,
  Shield,
  Users,
  Zap,
  Building
} from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const painPoints = [
  {
    icon: TrendingDown,
    title: "Strategy fades after kickoff",
    description: "Great slide decks. No structure behind the execution.",
    color: "from-[#5b3c46] to-[#996475]"
  },
  {
    icon: Shield,
    title: "Compliance is added too late",
    description: "Risk isn't managed — it's retrofitted. Auditors notice.",
    color: "from-[#996475] to-[#cea7b1]"
  },
  {
    icon: Users,
    title: "Change is delivered without ownership",
    description: "People aren't aligned. Adoption is performative at best.",
    color: "from-[#cea7b1] to-[#ffeef3]"
  },
  {
    icon: Zap,
    title: "Tech-first ≠ transformation",
    description: "Tools get installed. Nothing actually changes.",
    color: "from-[#5b3c46] to-[#cea7b1]"
  },
  {
    icon: Building,
    title: "Silos win over systems",
    description: "Departments protect themselves instead of moving together.",
    color: "from-[#996475] to-[#5b3c46]"
  }
]

const ProblemSection = () => {
  return (
    <section className={`${typography.sectionSpacing.standard} bg-gradient-to-b from-white to-gray-50 relative overflow-hidden`}>
      <div className={`${getContainerClasses("main", "section")} relative z-10`}>
        {/* Header */}
        <div className={typography.spacing.sectionMargin}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className={`text-[#b48a98] ${typography.label.large} inline-block ${typography.spacing.itemMargin}`}
          >
            The Reality Check
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${typography.h2} text-midnight ${typography.spacing.titleMargin}`}
          >
            Why Most Transformations{" "}
            <span className="bg-gradient-to-r from-[#b48a98] to-[#5b3c46] bg-clip-text text-transparent">
              Stall
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${typography.subtitle.large} max-w-3xl ${typography.spacing.componentMargin}`}
          >
            Enterprise transformation is littered with brilliant strategies that collapse under operational reality. 
            Here's what we see, and why it happens.
          </motion.p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Background card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col hover:border-[#cea7b1]/30">
                
                {/* Warning Icon and Main Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#b48a98]/10 flex items-center justify-center border border-[#b48a98]/20">
                    <AlertCircle className="w-4 h-4 text-[#b48a98]" />
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <point.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0b1c28] mb-3 leading-tight group-hover:text-[#5b3c46] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Subtle brand accent on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#cea7b1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-white to-[#ffeef3]/20 rounded-[40px] p-16 shadow-sm border border-[#cea7b1]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0b1c28] mb-8 leading-tight">
              We don't fix symptoms. We build the structure that prevents failure — from day one.
            </h3>
            <Link 
              href="/services"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#5b3c46] via-[#996475] to-[#cea7b1] hover:from-[#996475] hover:via-[#cea7b1] hover:to-[#ffeef3] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discover the 4D Approach
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ProblemSection 