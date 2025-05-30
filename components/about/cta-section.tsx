"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-[#b48a98] to-[#8b4c5f] -mt-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Define Your Transformation Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let's start a conversation about transforming your organization with clarity and consequence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg bg-white text-[#b48a98] hover:bg-gray-50 transition-colors duration-300"
            >
              Define Your Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 