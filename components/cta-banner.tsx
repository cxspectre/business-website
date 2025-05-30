"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Target, Shield } from "lucide-react"
import Link from "next/link"
import { typography, getContainerClasses } from "@/lib/typography"

const CtaBanner = () => {
  return (
    <section className={`relative ${typography.sectionSpacing.medium} overflow-hidden bg-gradient-to-b from-white to-gray-50`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#b48a98] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#cea7b1] rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#b48a98]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className={`${getContainerClasses("narrow", "section")} relative z-10 text-center`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#b48a98]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#b48a98]/20"
        >
          <Sparkles className="w-4 h-4 text-[#b48a98]" />
          <span className={`text-[#b48a98] ${typography.label.medium} font-medium`}>Ready to Transform?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${typography.h2} text-gray-900 ${typography.spacing.titleMargin}`}
        >
          Let's Build Your Next Transformation —{" "}
          <span className="bg-gradient-to-r from-[#b48a98] to-[#9a7a88] bg-clip-text text-transparent">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-gray-600 ${typography.subtitle.large} max-w-3xl mx-auto ${typography.spacing.componentMargin}`}
        >
          Ready to move beyond quick fixes? Let's design transformation that lasts — 
          built for your complexity, delivered with precision.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-[#b48a98] to-[#9a7a88] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <Link
            href="/services"
            className="group border-2 border-[#b48a98]/30 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-[#b48a98]/5 hover:border-[#b48a98] backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>Explore the 4D Method</span>
            <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 text-[#b48a98]" />
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="w-4 h-4 text-[#b48a98]" />
            <span className={`${typography.body.small} font-medium`}>Risk-Free Consultation</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Target className="w-4 h-4 text-[#b48a98]" />
            <span className={`${typography.body.small} font-medium`}>Tailored Solutions</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Sparkles className="w-4 h-4 text-[#b48a98]" />
            <span className={`${typography.body.small} font-medium`}>Proven Results</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaBanner
