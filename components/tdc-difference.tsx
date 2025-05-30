"use client"

import { motion } from "framer-motion"
import { Shield, Settings, Users, ArrowRight } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"
import Link from "next/link"

const principles = [
  {
    icon: Shield,
    title: "Governance Built-In",
    description: "Compliance isn't an afterthought. We design with ISO 27001, GDPR, DORA and real-world accountability — from day one.",
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-[#b48a98]/10",
    iconColor: "text-[#5b3c46]"
  },
  {
    icon: Settings,
    title: "Architecture That Fits Reality",
    description: "No templates. No \"one-size\". Every structure we design reflects operational noise, fragmented systems and political dynamics.",
    gradient: "from-purple-500 to-violet-600",
    iconBg: "bg-[#996475]/10",
    iconColor: "text-[#996475]"
  },
  {
    icon: Users,
    title: "Human-Centric Execution",
    description: "We don't push change. We co-own it — by aligning people before platforms, and anchoring accountability into delivery.",
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-[#cea7b1]/10",
    iconColor: "text-[#cea7b1]"
  }
]

const TdcDifference = () => {
  return (
    <section className={`w-full ${typography.sectionSpacing.medium} bg-gradient-to-b from-gray-50/30 to-white`}>
      <div className={getContainerClasses("main", "section")}>
        {/* Header */}
        <div className={typography.spacing.sectionMargin}>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#b48a98]/10 rounded-full mb-4"
            >
              <div className="w-2 h-2 bg-[#b48a98] rounded-full"></div>
              <span className={`text-[#b48a98] ${typography.label.medium}`}>
                Leadership Under Pressure
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${typography.h2} text-midnight ${typography.spacing.titleMargin}`}
            >
              Leadership That{" "}
              <span className="bg-gradient-to-r from-[#b48a98] to-[#9a7a88] bg-clip-text text-transparent">
                Builds Under Pressure
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Rest of component content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${typography.subtitle.large} max-w-3xl ${typography.spacing.componentMargin}`}
        >
          When systems fail and stakeholders panic, most leaders retreat to reactive management. 
          We help you lead through complexity with systematic confidence.
        </motion.p>

        {/* Three Pillars */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full group-hover:-translate-y-2 hover:border-[#cea7b1]/30">
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-12 h-12 rounded-xl ${principle.iconBg} flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <principle.icon className={`w-6 h-6 ${principle.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-midnight mb-3 group-hover:text-[#5b3c46] transition-colors duration-300">
                    {principle.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                {/* Subtle brand accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cea7b1] to-[#b48a98] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to 4D Method */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              These aren't buzzwords. They're the foundation behind every phase of our{" "}
              <span className="font-bold bg-gradient-to-r from-[#b48a98] to-[#9a7a88] bg-clip-text text-transparent text-xl">
                4D Framework
              </span>.
            </p>
            
            <motion.a
              href="#4d-framework"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b48a98] to-[#9a7a88] text-white rounded-full font-semibold hover:from-[#9a7a88] hover:to-[#8a6a78] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore the 4D Method
              <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default TdcDifference 