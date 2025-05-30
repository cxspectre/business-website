"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe2, Lightbulb, Shield, CloudIcon, Gauge, Cpu, Award } from "lucide-react"
import { motion } from "framer-motion"
import { typography } from "@/lib/typography"

const expertise = [
  {
    icon: Shield,
    label: "Compliance & Governance",
    detail: "Enterprise-wide digital compliance"
  },
  {
    icon: Globe2,
    label: "Global Transformation",
    detail: "Cross-continental program delivery"
  },
  {
    icon: Lightbulb,
    label: "Innovation Leadership",
    detail: "Future-ready solution design"
  }
]

const impacts = [
  {
    icon: CloudIcon,
    metric: "40%",
    label: "Cost Reduction",
    description: "Global cloud transformation across 288 sites"
  },
  {
    icon: Gauge,
    metric: "200+ hours",
    label: "Monthly Efficiency Gain",
    description: "Automated compliance and governance framework"
  },
  {
    icon: Cpu,
    metric: "15 Countries",
    label: "AI Integration",
    description: "End-to-end SAP and AI/ML supply chain optimization"
  }
]

const AboutTeaser = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className={typography.spacing.sectionMargin}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`text-[#b48a98] ${typography.label.large} inline-block ${typography.spacing.itemMargin}`}
        >
          About Our Leadership
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`${typography.h2} text-gray-900 ${typography.spacing.titleMargin}`}
        >
          Leadership You Can Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-gray-600 ${typography.subtitle.large} max-w-2xl ${typography.spacing.componentMargin}`}
        >
          Over 23 Years of Driving Global IT Transformation
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-[350px,1fr] gap-8 lg:gap-16 items-start">
        {/* Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/TD.jpeg"
                alt="Tanja Drefke, CEO and Founder"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#b48a98]" />
                <div>
                  <div className={`${typography.h6} text-gray-900`}>23+ Years</div>
                  <div className={`${typography.body.tiny} text-gray-500`}>Experience</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="space-y-8">
            {/* About Section */}
            <div>
              <h3 className={`${typography.h4} text-gray-900 ${typography.spacing.itemMargin}`}>About Tanja</h3>
              <p className={`text-gray-700 ${typography.body.medium} ${typography.spacing.componentMargin}`}>
                With over 23 years of experience in enterprise IT, Tanja Drefke has led transformation programs across 
                industries and continents — specializing in turning complexity into streamlined, scalable solutions.
              </p>
            </div>

            {/* Impact Cards */}
            <div>
              <h3 className={`${typography.h4} text-gray-900 ${typography.spacing.itemMargin}`}>Proven Impact</h3>
              <div className="grid gap-3">
                {impacts.map((impact, index) => {
                  const Icon = impact.icon
                  return (
                    <div key={index} className="bg-white rounded-lg border border-gray-100 p-4 hover:border-[#b48a98]/30 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-[#b48a98]/5">
                          <Icon className="w-5 h-5 text-[#b48a98]" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className={`${typography.h4} text-gray-900`}>{impact.metric}</span>
                            <span className={`text-[#b48a98] ${typography.body.small} font-medium`}>{impact.label}</span>
                          </div>
                          <p className={`${typography.body.small} text-gray-600`}>{impact.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Testimonial */}
            <figure className="bg-[#b48a98]/5 rounded-lg p-4 border border-[#b48a98]/10">
              <blockquote className="text-gray-700 text-base">
                "Tanja doesn't just solve problems — she transforms entire organizations."
              </blockquote>
              <figcaption className="mt-2 text-[#b48a98] text-sm font-medium">
                — CTO, Global Enterprise Client
              </figcaption>
            </figure>

            <Link
              href="/about"
              className="inline-flex items-center px-5 py-2.5 bg-[#b48a98] text-white rounded-full hover:bg-[#b48a98]/90 transition-colors text-sm font-medium group"
            >
              See Her Method in Action
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutTeaser
