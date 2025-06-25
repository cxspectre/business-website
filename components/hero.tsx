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
    <section className="w-full h-[90vh] min-h-[700px] max-h-[900px] relative flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/Herobackground.png")}
          alt="Hero Background"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b3c46]/25 via-transparent to-[#996475]/20"></div>
      </div>

      <div className="absolute inset-0 z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#cea7b1]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -30, -20],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className={`w-full ${getContainerClasses("main", "section")} relative z-10`}>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-[#cea7b1]/20 rounded-full"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 rounded-full bg-gradient-to-br from-[#cea7b1] to-[#996475] flex items-center justify-center"
              >
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </motion.div>
              <span className="text-[#cea7b1] font-medium text-sm">
                25+ Years Enterprise Transformation Excellence
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white mb-2 drop-shadow-xl">
                  Transform Enterprise
                </span>
                <span className="block text-white mb-2 drop-shadow-xl">
                  Complexity Into
                </span>
                <span className="block bg-gradient-to-r from-[#cea7b1] via-[#ffeef3] to-[#cea7b1] bg-clip-text text-transparent drop-shadow-xl">
                  Measurable Results
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-lg"
            >
              Our proven <span className="text-[#cea7b1] font-semibold">4D Framework</span> delivers transformation under pressure, at enterprise scale, with measurable outcomes that endure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5b3c46] via-[#996475] to-[#cea7b1] hover:from-[#996475] hover:via-[#cea7b1] hover:to-[#ffeef3] text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-base"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="#4d-framework"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#cea7b1]/50 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base backdrop-blur-sm"
              >
                <span>Explore 4D Framework</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-[#cea7b1] font-semibold mb-2">Success Rate</div>
                <div className="text-white/70 text-sm">Transformations completed successfully</div>
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">€2.5B+</div>
                <div className="text-[#cea7b1] font-semibold mb-2">Value Created</div>
                <div className="text-white/70 text-sm">Measurable business impact delivered</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 text-[#cea7b1]" />
                <span className="text-white/80 text-sm font-medium">Zero Downtime Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-[#cea7b1]" />
                <span className="text-white/80 text-sm font-medium">Compliance Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-[#cea7b1]" />
                <span className="text-white/80 text-sm font-medium">Fortune 500 Trusted</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent py-6 border-t border-white/10"
      >
        <div className="flex flex-col items-center justify-center space-y-3">
          <p className="text-white/50 text-xs font-medium tracking-wider uppercase">
            Trusted across industries
          </p>
          <div className="relative w-full max-w-6xl overflow-hidden mx-auto">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
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
                "Energy & Utilities"
              ].map((industry, index) => (
                <span
                  key={industry}
                  className="inline-block px-6 text-white/40 text-xs font-medium"
                >
                  {industry}
                  {index < 5 && <span className="mx-4 text-[#cea7b1]/60">•</span>}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                "Banking & Financial Services",
                "Manufacturing & Supply Chain",
                "Healthcare & Life Sciences",
                "Technology & Software",
                "Insurance & Risk Management",
                "Energy & Utilities"
              ].map((industry, index) => (
                <span
                  key={`${industry}-duplicate`}
                  className="inline-block px-6 text-white/40 text-xs font-medium"
                >
                  {industry}
                  {index < 5 && <span className="mx-4 text-[#cea7b1]/60">•</span>}
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
