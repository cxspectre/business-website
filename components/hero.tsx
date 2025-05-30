"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, TrendingUp, Sparkles, Target, Shield } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"
import { Button } from "@/components/ui/button"
import { assetPath } from "@/lib/asset-path"

const Hero = () => {
  return (
    <section className="w-full h-[85vh] min-h-[600px] max-h-[850px] relative flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/Herobackground.png")}
          alt="Hero Background"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b3c46]/20 via-transparent to-[#996475]/15"></div>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, -25, -15],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className={`w-full ${getContainerClasses("wide", "hero")} relative z-10 py-6`}>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[400px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 rounded-full bg-gradient-to-br from-[#cea7b1] to-[#996475] flex items-center justify-center"
                >
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </motion.div>
                <span className={`text-[#cea7b1] ${typography.label.medium}`}>
                  Enterprise Transformation Excellence
                </span>
              </div>
              
              <h1 className={`${typography.h1} ${typography.spacing.titleMargin}`}>
                <span className="block text-white [text-shadow:_0_2px_15px_rgb(0_0_0_/_50%)]">
                  Turning Digital Complexity into
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#cea7b1] via-[#ffeef3] to-[#cea7b1] [text-shadow:_0_2px_15px_rgb(206_167_177_/_30%)]">
                  Measurable Results
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-white/90 ${typography.body.large} font-medium [text-shadow:_0_1px_10px_rgb(0_0_0_/_30%)] max-w-xl ${typography.spacing.componentMargin}`}
            >
              Our 4D framework delivers transformation under pressure, at scale, with measurable outcomes that stick.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Link 
                href="/contact" 
                className="group relative bg-gradient-to-r from-[#5b3c46] via-[#996475] to-[#cea7b1] hover:from-[#996475] hover:via-[#cea7b1] hover:to-[#ffeef3] text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <span className="relative z-10">Start Your Transformation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              <Link
                href="/services"
                className="group relative border border-white/50 text-white hover:bg-white/10 font-medium flex items-center justify-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 text-sm backdrop-blur-sm hover:border-white/70"
              >
                <span>Explore 4D Framework</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#cea7b1]/15 to-[#5b3c46]/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/12 backdrop-blur-lg border border-white/25 rounded-xl p-3 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#cea7b1] to-[#5b3c46] rounded-lg flex items-center justify-center shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">98%</div>
                    <div className="text-white/80 text-xs font-medium">Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#996475]/15 to-[#cea7b1]/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/12 backdrop-blur-lg border border-white/25 rounded-xl p-3 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#996475] to-[#cea7b1] rounded-lg flex items-center justify-center shadow-md">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">150+</div>
                    <div className="text-white/80 text-xs font-medium">Transformations</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5b3c46]/15 to-[#996475]/15 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative bg-white/12 backdrop-blur-lg border border-white/25 rounded-xl p-3 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#5b3c46] to-[#996475] rounded-lg flex items-center justify-center shadow-md">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">Fortune 500</div>
                    <div className="text-white/80 text-xs font-medium">Trusted Partner</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-2 pt-2"
            >
              <div className="flex items-center gap-1.5 bg-white/8 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/15">
                <Target className="w-3 h-3 text-[#cea7b1]" />
                <span className="text-white/85 text-xs font-medium">Zero Downtime</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/8 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/15">
                <Shield className="w-3 h-3 text-[#cea7b1]" />
                <span className="text-white/85 text-xs font-medium">Compliance Ready</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent py-4 border-t border-white/5"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-white/60 text-xs font-medium tracking-wide uppercase">
            Trusted by transformation leaders across:
          </p>
          <div className="relative w-full max-w-5xl overflow-hidden mx-auto">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex whitespace-nowrap"
            >
              {[
                "Banking & Financial Services",
                "Manufacturing & Supply Chain",
                "Healthcare & Life Sciences",
                "Technology & Software",
                "Insurance & Risk Management",
                "Telecommunications",
                "Energy & Utilities",
                "Retail & Consumer Goods",
                "Public Sector & Government"
              ].map((industry, index) => (
                <span
                  key={industry}
                  className="inline-block px-4 text-white/40 text-xs font-medium hover:text-white/60 transition-colors"
                >
                  {industry}
                  {index < 8 && <span className="mx-3 text-[#cea7b1]">●</span>}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "Banking & Financial Services",
                "Manufacturing & Supply Chain",
                "Healthcare & Life Sciences",
                "Technology & Software",
                "Insurance & Risk Management",
                "Telecommunications",
                "Energy & Utilities",
                "Retail & Consumer Goods",
                "Public Sector & Government"
              ].map((industry, index) => (
                <span
                  key={`${industry}-duplicate`}
                  className="inline-block px-4 text-white/40 text-xs font-medium hover:text-white/60 transition-colors"
                >
                  {industry}
                  {index < 8 && <span className="mx-3 text-[#cea7b1]">●</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
