"use client"

import { motion } from "framer-motion"
import { Brain, Rocket, CheckCircle2, ArrowRight, Compass, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { assetPath } from "@/lib/asset-path"
import { typography } from "@/lib/typography"

const serviceHighlights = [
  {
    icon: Brain,
    title: "Strategic Advisory",
    description: "Clarity in complexity for confident decisions."
  },
  {
    icon: Rocket,
    title: "Enterprise Execution",
    description: "Built for scale, speed, and measurable results."
  },
  {
    icon: CheckCircle2,
    title: "Proven Impact",
    description: "Transformation that lasts and delivers value."
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Aligning people and systems for real adoption."
  }
]

const ServiceHero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] max-h-[850px] flex items-center overflow-hidden" aria-label="Services Hero Section">
      {/* Background Image + Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/Herobackground.png")}
          alt="Services Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark and color overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-[#b48a98]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#b48a98]/30 via-transparent to-[#cea7b1]/10" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10 py-6">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[400px]">
          {/* Left: Main Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 mb-2 px-4 py-1.5 rounded-full bg-[#b48a98]/20 text-[#b48a98] text-xs font-semibold shadow-sm border border-[#b48a98]/30 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              Enterprise Transformation
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight [text-shadow:_0_2px_15px_rgb(0_0_0_/_50%)]">
              Solving What Matters{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b48a98] via-[#cea7b1] to-[#b48a98] [text-shadow:_0_2px_15px_rgb(206_167_177_/_30%)]">in the Digital Space</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-2xl font-medium [text-shadow:_0_1px_10px_rgb(0_0_0_/_30%)]">
              From advisory to execution, we help leaders navigate transformation with clarity, consequence, and measurable impact.
            </p>
            <Link
              href="#services-detail"
              className="group relative bg-gradient-to-r from-[#5b3c46] via-[#996475] to-[#cea7b1] hover:from-[#996475] hover:via-[#cea7b1] hover:to-[#ffeef3] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <span className="relative z-10">See Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </Link>
          </div>

          {/* Right: Service Highlights (vertical stack on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-end mt-10 lg:mt-0">
            {serviceHighlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5, type: 'spring' }}
                  className="flex flex-row items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg min-w-[260px] max-w-xs w-full"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b48a98] via-[#cea7b1] to-[#b48a98] flex items-center justify-center shadow-lg border-2 border-white/30 ring-2 ring-[#cea7b1]/40">
                    <Icon className="w-8 h-8 text-white drop-shadow-[0_2px_8px_rgba(180,138,152,0.5)]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-base leading-tight mb-1 [text-shadow:_0_1px_8px_rgb(0_0_0_/_30%)]">{item.title}</div>
                    <div className="text-xs text-white/80 leading-tight max-w-[180px] [text-shadow:_0_1px_8px_rgb(0_0_0_/_20%)]">{item.description}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero 