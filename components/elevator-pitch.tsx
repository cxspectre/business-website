"use client"

import { motion } from "framer-motion"
import { 
  ArrowRight,
  AlertCircle,
  ShieldCheck,
  Users,
  Layers,
  Network
} from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const challenges = [
  {
    icon: AlertCircle,
    text: "Operations Disruption",
    description: "Zero-downtime execution that keeps your business running – even when complexity hits hardest.",
    color: "from-[#FF6B6B] to-[#FF8E8E]"
  },
  {
    icon: ShieldCheck,
    text: "Compliance Risk",
    description: "Audit-ready systems built on frameworks that regulators trust.",
    color: "from-[#4ECDC4] to-[#6BE5DC]"
  },
  {
    icon: Users,
    text: "Team Alignment",
    description: "Change architecture that brings people together – not just org charts.",
    color: "from-[#FFD93D] to-[#FFE270]"
  },
  {
    icon: Layers,
    text: "Fragmented Initiatives",
    description: "A single transformation backbone – not scattered projects without traction.",
    color: "from-[#95A5A6] to-[#BDC3C7]"
  },
  {
    icon: Network,
    text: "Technology Silos",
    description: "Integrated platforms that speak the same language – across business and IT.",
    color: "from-[#9B59B6] to-[#B39DDB]"
  }
]

const ElevatorPitch = () => {
  return (
    <section id="elevator-pitch" className={`w-full ${typography.sectionSpacing.medium} bg-[#F9F9FA] relative z-10`}>
      <div className={getContainerClasses("main", "section")}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-20"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold leading-[1.1] text-midnight"
              >
                Transform with Clarity – Not Compromise
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Avoid the pitfalls that stall real transformation. TDC builds for results – not rework.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a 
                href="#solutions" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#b48a98]/90 transition-all duration-300 hover:gap-3 shadow-sm"
              >
                See how we make it happen
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Challenge Cards */}
          <div className="grid grid-cols-1 gap-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.text}
                initial={{ opacity: 0, x: 20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1]
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div 
                  className="absolute left-0 top-0 w-1 h-full rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom, ${challenge.color})` }}
                />
                
                <div className="relative bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:translate-x-1">
                  <div className="relative flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-lg opacity-10"
                        style={{ background: `linear-gradient(135deg, ${challenge.color})` }}
                      />
                      <div className="relative p-2.5 rounded-lg bg-white shadow-sm group-hover:shadow transition-all duration-300">
                        <challenge.icon className="w-5 h-5" style={{ color: challenge.color.split(' ')[1].slice(4) }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-midnight mb-1 group-hover:text-[#b48a98] transition-colors">
                        {challenge.text}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ElevatorPitch 