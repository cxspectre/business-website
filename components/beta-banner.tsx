"use client"

import { motion } from "framer-motion"
import { TestTube } from "lucide-react"

const BetaBanner = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-0 top-0 h-screen w-8 z-50 bg-gradient-to-b from-[#996475] via-[#b48a98] to-[#cea7b1] shadow-lg flex items-center justify-center"
    >
      <div className="transform -rotate-90 whitespace-nowrap">
        <div className="flex items-center gap-2 text-white text-xs font-medium tracking-wide">
          <TestTube className="w-3 h-3" />
          <span className="uppercase">Beta Version</span>
        </div>
      </div>
    </motion.div>
  )
}

export default BetaBanner 