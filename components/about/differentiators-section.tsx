"use client"

import { motion } from "framer-motion"
import { Network, Gauge, Rocket } from "lucide-react"

const differentiators = [
  {
    icon: Network,
    title: "Built for Complexity",
    description: "Cross-functional logic that aligns architecture and leadership.",
    detail: "Our frameworks bridge silos, connect stakeholders, and create lasting alignment across your organization."
  },
  {
    icon: Gauge,
    title: "Zero-Downtime Transformation",
    description: "Delivery that protects operations while moving forward.",
    detail: "We implement change without compromising your core business — maintaining stability while driving progress."
  },
  {
    icon: Rocket,
    title: "Sustainable Impact",
    description: "Structures that outlast org charts and leadership changes.",
    detail: "Our solutions are designed for permanence, embedding accountability that survives reorganizations and transitions."
  }
]

export default function DifferentiatorsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 -mt-7 -mb-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Built for Pressure. Designed for Permanence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl"
          >
            At TDC, we don't do surface-level consulting. We embed frameworks that survive real-world stress.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#b48a98]/10 flex items-center justify-center mb-4 group-hover:bg-[#b48a98]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#b48a98]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {diff.title}
                </h3>
                <p className="text-gray-900 mb-3">
                  {diff.description}
                </p>
                <p className="text-sm text-gray-600">
                  {diff.detail}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 