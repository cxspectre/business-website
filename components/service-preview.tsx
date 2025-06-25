"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Compass, Network, Cpu } from "lucide-react"

const services = [
  {
    id: "strategy",
    title: "Digital Strategy & Architecture",
    icon: Compass,
    description: "Navigate complexity with confidence. We align tech with business goals to design scalable, future-proof architecture.",
    features: [
      "Enterprise Architecture Assessment",
      "Digital Transformation Strategy",
      "Technology Stack Optimization",
      "Cloud Migration Planning"
    ]
  },
  {
    id: "network",
    title: "Network Transformation",
    icon: Network,
    description: "Modernize your network infrastructure to support digital innovation. Our expertise ensures secure, reliable, and efficient connectivity.",
    features: [
      "SD-WAN Implementation",
      "Network Security Enhancement",
      "Infrastructure Modernization",
      "Performance Optimization"
    ]
  },
  {
    id: "automation",
    title: "Process Automation & AI",
    icon: Cpu,
    description: "Leverage cutting-edge automation and AI to streamline operations. We help you identify and implement intelligent solutions that deliver measurable results.",
    features: [
      "Workflow Automation",
      "AI-Driven Analytics",
      "RPA Implementation",
      "Process Mining & Optimization"
    ]
  }
]

const ServicePreview = () => {
  const [activeService, setActiveService] = useState(0)

  return (
    <div className="relative w-full bg-white rounded-[40px] -my-24 border border-gray-200">
      <div className="relative p-4">
        <div className="p-4">
          <div className="max-w-[1400px] mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block text-sm font-medium text-[#b48a98] mb-2"
              >
                Service Focus
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              >
                Transforming Your Digital Future
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gray-600 text-lg max-w-2xl"
              >
                Strategic solutions that drive innovation while ensuring operational stability
              </motion.p>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
              {/* Left Column - Service Navigation */}
              <div className="lg:w-[48%]">
                <div className="space-y-5">
                  {services.map((service, idx) => {
                    const Icon = service.icon
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setActiveService(idx)}
                        className={`group cursor-pointer transition-all duration-300 relative pb-5
                          ${activeService === idx ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-[#b48a98]/5
                            ${activeService === idx ? 'text-[#b48a98]' : 'text-gray-500'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className={`text-lg font-medium ${activeService === idx ? 'text-[#b48a98]' : 'text-gray-700'}`}>
                            {service.title}
                          </h3>
                        </div>
                        <div className={`absolute bottom-0 left-0 right-0 h-px bg-[#b48a98]/20
                          ${idx !== services.length - 1 ? 'opacity-100' : 'opacity-0'}`} />
                        <div className={`absolute bottom-0 left-0 h-px bg-[#b48a98] transition-all duration-300
                          ${activeService === idx ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                      </motion.div>
                    )
                  })}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#b48a98] font-medium mt-8 hover:gap-3 transition-all text-[15px]"
                >
                  Explore all of our services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Column - Service Details */}
              <div className="lg:w-[48%]">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {services[activeService].description}
                  </p>

                  <div className="space-y-3">
                    {services[activeService].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b48a98]/60" />
                        <span className="text-gray-600 text-[15px]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link 
                    href={`/services#${services[activeService].id}`}
                    className="inline-flex items-center gap-2 text-[#b48a98] font-medium mt-6 hover:gap-3 transition-all text-[15px]"
                  >
                    Learn more about this service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 text-right"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#b48a98] font-medium hover:gap-3 transition-all"
              >
                Start your digital transformation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePreview
