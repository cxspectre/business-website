"use client"

import type React from "react"
import { Cpu, Cloud, Shield } from "lucide-react"
import { SectionObserver } from "@/lib/section-observer"
import { typography, getContainerClasses } from "@/lib/typography"

const Benefits = () => {
  return (
    <section className={`w-full ${typography.sectionSpacing.medium}`}>
      <div className={getContainerClasses("main", "section")}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-midnight">
          Why clients <span className="gradient-text">trust us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectionObserver>
            <BenefitCard
              icon={<Cpu size={32} className="text-primary-plum" />}
              title="AI-Powered Solutions"
              description="Leverage cutting-edge AI to transform your business processes and unlock new opportunities."
            />
          </SectionObserver>

          <SectionObserver>
            <BenefitCard
              icon={<Cloud size={32} className="text-primary-plum" />}
              title="Cloud-Native Speed"
              description="Accelerate your digital transformation with modern, scalable cloud architecture."
            />
          </SectionObserver>

          <SectionObserver>
            <BenefitCard
              icon={<Shield size={32} className="text-primary-plum" />}
              title="Enterprise Rigor"
              description="Benefit from 25+ years of experience delivering complex enterprise IT programs."
            />
          </SectionObserver>
        </div>
      </div>
    </section>
  )
}

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => {
  return (
    <div className="glass-card p-8 flex flex-col items-center text-center bg-midnight transform transition-all duration-500 hover:translate-y-[-10px]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-pearl">{title}</h3>
      <p className="text-pearl/80">{description}</p>
    </div>
  )
}

export default Benefits
