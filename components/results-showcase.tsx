"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const caseStudies = [
  {
    id: 1,
    title: "Deutsche Bank Wi-Fi & VPN",
    subtitle: "500+ branches",
    description: "Transformed network infrastructure across 500+ branches in just 5 months, ensuring secure, reliable connectivity for 40+ experts managing €13m in assets.",
    impact: "Zero downtime during transition",
    category: "Infrastructure"
  },
  {
    id: 2,
    title: "Heineken supply-chain AI",
    subtitle: "15 OpCos",
    description: "Implemented AI-driven forecasting across 15 Operating Companies, optimizing inventory levels while improving prediction accuracy.",
    impact: "30% inventory reduction",
    category: "AI & Analytics"
  },
  // Add more case studies as needed
]

const ResultsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className={`w-full ${typography.sectionSpacing.medium} bg-gradient-to-b from-white to-gray-50`}>
      <div className={getContainerClasses("main", "section")}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped leading enterprises transform their operations
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className={`inline-block px-4 py-2 rounded-full bg-dusty-rose/10 text-dusty-rose text-sm font-medium ${typography.spacing.itemMargin}`}>
                      {caseStudies[currentIndex].category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {caseStudies[currentIndex].subtitle}
                    </h3>
                    <h4 className="text-xl text-gray-700 mb-6">
                      {caseStudies[currentIndex].title}
                    </h4>
                    <p className="text-gray-600 mb-8">
                      {caseStudies[currentIndex].description}
                    </p>
                    <div className="flex items-center">
                      <span className="text-sm text-dusty-rose font-medium mr-3">Key Impact:</span>
                      <span className="text-lg font-semibold text-gray-900">
                        {caseStudies[currentIndex].impact}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
                    {/* Placeholder for case study visualization/image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">Case Study Visualization</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-dusty-rose" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsShowcase 