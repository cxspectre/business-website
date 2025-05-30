"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Compass, 
  Cloud, 
  Cpu, 
  Settings, 
  Shield, 
  Users, 
  Database,
  Network,
  Brain,
  BarChart,
  ArrowRight,
  Lightbulb,
  Workflow,
  Building2
} from "lucide-react"
import Link from "next/link"
import { typography, getContainerClasses } from "@/lib/typography"

const services = [
  {
    id: "strategy",
    title: "Transformation Strategy & Governance",
    icon: Compass,
    subheading: "Empowering CxOs with clarity, speed, and control",
    description: "From CIO advisory to board-level alignment, we guide enterprise IT through structured decision-making, crisis moments, and digital urgency. Our approach combines strategic insight with practical execution frameworks.",
    capabilities: [
      "CIO & CTO advisory services",
      "Digital transformation roadmaps",
      "Governance design (ITIL, COBIT)",
      "Audit-ready architecture",
      "Strategic portfolio management"
    ],
    outcomes: [
      "Increased strategic visibility",
      "Faster, grounded decisions",
      "Executive alignment",
      "Regulatory compliance",
      "Optimized investment impact"
    ],
    tags: ["Strategy", "Governance", "Advisory"]
  },
  {
    id: "cloud",
    title: "Cloud & Hybrid Infrastructure",
    icon: Cloud,
    subheading: "Building resilient, compliant, and scalable foundations",
    description: "Design and implement future-ready infrastructure that combines cloud agility with enterprise control. Our solutions address both technical excellence and regulatory demands.",
    capabilities: [
      "Hybrid cloud architecture",
      "SD-WAN implementation",
      "Cloud compliance (GDPR)",
      "Infrastructure automation",
      "Performance optimization"
    ],
    outcomes: [
      "Enhanced operational resilience",
      "Regulatory compliance",
      "Reduced infrastructure costs",
      "Improved scalability",
      "Streamlined operations"
    ],
    tags: ["Cloud", "Infrastructure", "Security"]
  },
  {
    id: "platforms",
    title: "Enterprise Platforms & Service Management",
    icon: Settings,
    subheading: "Transforming service delivery with modern ITSM frameworks",
    description: "Implement and optimize enterprise-wide service management solutions that enhance efficiency, visibility, and user satisfaction while ensuring regulatory compliance.",
    capabilities: [
      "ServiceNow program setup",
      "ITSM/ESM operating models",
      "Platform consolidation",
      "Service catalog design",
      "Process automation"
    ],
    outcomes: [
      "Streamlined service delivery",
      "Cost optimization",
      "Enhanced visibility",
      "Improved user satisfaction",
      "Operational efficiency"
    ],
    tags: ["ITSM", "ServiceNow", "Platforms"]
  },
  {
    id: "ai-automation",
    title: "AI & Intelligent Automation",
    icon: Brain,
    subheading: "Driving results through AI, RPA, and predictive analytics",
    description: "Transform operations with intelligent automation solutions that deliver measurable impact. From RPA implementation to predictive analytics, we ensure AI initiatives create lasting value.",
    capabilities: [
      "RPA & AI strategy",
      "Data & process mining",
      "Predictive analytics",
      "Low-code automation",
      "AI governance frameworks"
    ],
    outcomes: [
      "Operational efficiency gains",
      "Data-driven decisions",
      "Reduced manual effort",
      "Predictive insights",
      "Scalable automation"
    ],
    tags: ["AI", "Automation", "Analytics"]
  },
  {
    id: "organizational",
    title: "Organizational Design & Enablement",
    icon: Users,
    subheading: "Building capable, resilient teams for sustainable change",
    description: "Create lasting transformation through strategic change management, role redesign, and comprehensive enablement programs that put people at the center of change.",
    capabilities: [
      "Change architecture (ADKAR)",
      "Role design & transition",
      "Capability development",
      "Team resilience programs",
      "Knowledge transfer frameworks"
    ],
    outcomes: [
      "Successful adoption",
      "Reduced change resistance",
      "Enhanced capabilities",
      "Sustainable transformation",
      "Empowered teams"
    ],
    tags: ["Change", "Enablement", "People"]
  },
  {
    id: "data",
    title: "Security, Risk & Data Governance",
    icon: Shield,
    subheading: "Ensuring security and compliance across the digital landscape",
    description: "Build robust security and governance frameworks that protect your organization while enabling innovation. Our approach integrates security, risk management, and compliance.",
    capabilities: [
      "AI-driven data validation",
      "Secure SAP integrations",
      "GRC implementation",
      "Risk assessment frameworks",
      "Compliance automation"
    ],
    outcomes: [
      "Enhanced security posture",
      "Regulatory compliance",
      "Reduced risk exposure",
      "Automated controls",
      "Data protection"
    ],
    tags: ["Security", "Risk", "Compliance"]
  }
]

const ServiceDetail = () => {
  const [activeService, setActiveService] = useState(0)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // Get unique tags
  const allTags = Array.from(new Set(services.flatMap(service => service.tags)))

  return (
    <section className={`w-full ${typography.sectionSpacing.small}`}>
      <div className={getContainerClasses("main", "section")}>
        {/* Section Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block text-sm font-medium text-[#b48a98] mb-2"
          >
            Our Expertise
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Solving What Matters in the Digital Space
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600 text-lg max-w-2xl mb-8"
          >
            From advisory to execution, we help leaders navigate transformation with clarity, consequence, and measurable impact.
          </motion.p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all
                  ${activeFilter === tag 
                    ? 'bg-[#b48a98] text-white shadow-sm' 
                    : 'bg-[#b48a98]/5 text-[#b48a98] hover:bg-[#b48a98]/10'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-start">
          {/* Left Column - Service Navigation */}
          <div>
            <div className="space-y-4">
              {services
                .filter(service => !activeFilter || service.tags.includes(activeFilter))
                .map((service, idx) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setActiveService(idx)}
                      className={`group cursor-pointer transition-all duration-300 relative p-4 rounded-xl border
                        ${activeService === idx 
                          ? 'border-[#b48a98] bg-gradient-to-br from-[#b48a98]/5 via-[#b48a98]/3 to-transparent' 
                          : 'border-gray-100 hover:border-[#b48a98]/30 hover:bg-gradient-to-br hover:from-[#b48a98]/3 hover:via-[#b48a98]/2 hover:to-transparent'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                          ${activeService === idx 
                            ? 'bg-[#b48a98]/10 text-[#b48a98] shadow-sm' 
                            : 'bg-gray-50 text-gray-400 group-hover:bg-[#b48a98]/5 group-hover:text-[#b48a98]'}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`text-lg font-medium mb-1 transition-colors duration-300
                            ${activeService === idx ? 'text-[#b48a98]' : 'text-gray-900 group-hover:text-[#b48a98]'}`}>
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2">{service.subheading}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
              })}
            </div>
          </div>

          {/* Right Column - Service Details */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {services[activeService].description}
                    </p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {services[activeService].capabilities.map((capability, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#b48a98]" />
                          <span className="text-gray-600 text-sm">{capability}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Outcomes</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {services[activeService].outcomes.map((outcome, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-[#b48a98]/5 hover:bg-[#b48a98]/10 transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#b48a98]" />
                          <span className="text-gray-600 text-sm">{outcome}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full hover:bg-[#b48a98]/90 transition-all duration-300 text-sm font-medium group shadow-sm hover:shadow-md"
                    >
                      Discuss your {services[activeService].title.toLowerCase()} needs
                      <motion.span
                        className="w-4 h-4"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail 