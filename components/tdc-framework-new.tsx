"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Target, Rocket, Shield, ArrowRight, ChevronRight, ChevronDown, CheckCircle2, Compass, Zap, Lock } from 'lucide-react'
import { typography, getContainerClasses } from "@/lib/typography"

// Custom styles for gradient animations
const customStyles = `
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 4s ease-in-out infinite;
  }
  
  .bg-size-200 {
    background-size: 200% 200%;
  }
  
  .hover\\:bg-pos-100:hover {
    background-position: 100% 50%;
  }
  
  .shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`

interface Phase {
  id: string
  icon: React.ReactNode
  title: string
  tagline: string
  punchline: string
  description: string
  deliverables: string[]
  conclusion: {
    without: string
    with: string
  }
  nextPhase?: {
    id: string
    title: string
  }
}

const phases: Phase[] = [
  {
    id: 'discover',
    icon: <Search className="w-6 h-6" />,
    title: 'Discover',
    tagline: 'Radical Due Diligence',
    punchline: 'We map what others overlook — across tech, politics, and people.',
    description: 'We map what others miss: hidden blockers, decision gaps, readiness risks — from tech to teams to tension. You can\'t solve what you haven\'t surfaced.',
    deliverables: [
      'Stakeholder map (with influence dynamics)',
      'Risk radar (tech + organizational)',
      'Gap assessment (real vs. assumed readiness)',
      'Culture indicators (resistance, fatigue, ownership)'
    ],
    conclusion: {
      without: 'Discovery without depth is theatre.',
      with: 'Discovery with TDC is ignition.'
    },
    nextPhase: {
      id: 'design',
      title: 'Design'
    }
  },
  {
    id: 'design',
    icon: <Target className="w-6 h-6" />,
    title: 'Design',
    tagline: 'Architecture with Consequence',
    punchline: 'Blueprints that hold under real pressure — not slides for approval.',
    description: 'No blueprints for show. We co-design transformation logic that fits your actual system — politics, pressure, and all.',
    deliverables: [
      'Transformation blueprint',
      'Change impact analysis',
      'Risk mitigation strategy',
      'Implementation roadmap'
    ],
    conclusion: {
      without: 'Design without context crumbles.',
      with: 'Design with TDC endures.'
    },
    nextPhase: {
      id: 'deliver',
      title: 'Deliver'
    }
  },
  {
    id: 'deliver',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Deliver',
    tagline: 'Execution with Spine',
    punchline: 'No noise. No drift. Just accountable momentum.',
    description: 'We execute with rhythm, checkpoints, and ruthless prioritization. No chaos, no drift — just momentum with accountability.',
    deliverables: [
      'Value stream activation',
      'Progress tracking framework',
      'Accountability matrix',
      'Success metrics dashboard'
    ],
    conclusion: {
      without: 'Delivery without direction dissipates.',
      with: 'Delivery with TDC accelerates.'
    },
    nextPhase: {
      id: 'drive',
      title: 'Drive'
    }
  },
  {
    id: 'drive',
    icon: <Shield className="w-6 h-6" />,
    title: 'Drive',
    tagline: 'Anchor the Change',
    punchline: 'We embed. We transfer. So transformation doesn\'t vanish after go-live.',
    description: 'Go-live is not the end. We embed structures, transfer ownership, and ensure change doesn\'t vanish under the next reorg. Behavioral anchoring and governance transfer ensure transformation sticks.',
    deliverables: [
      'Behavioral anchoring framework',
      'Governance transfer protocols', 
      'Capability transfer plan',
      'Sustainability framework',
      'Leadership enablement toolkit',
      'Long-term success indicators'
    ],
    conclusion: {
      without: 'Change without anchoring fades.',
      with: 'Change with TDC transforms.'
    }
  }
]

const corePrinciples = [
  {
    title: 'Structure beats inspiration',
    description: 'Real transformation needs architecture, not just ambition.'
  },
  {
    title: 'Accountability is architecture',
    description: 'Without clear ownership, change dissolves into good intentions.'
  },
  {
    title: 'Change is human, not just technical',
    description: 'Technology enables, but people transform.'
  }
]

const MiniNav = ({ activePhase, onPhaseSelect }: {
  activePhase: string | null
  onPhaseSelect: (id: string) => void
}) => {
  return (
    <div className="hidden lg:flex flex-col fixed left-8 top-1/2 -translate-y-1/2 gap-6">
      {phases.map((phase, index) => (
        <button
          key={phase.id}
          onClick={() => onPhaseSelect(phase.id)}
          className={`
            flex items-center gap-3 group transition-all duration-300
            ${activePhase === phase.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'}
          `}
        >
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            ${activePhase === phase.id ? 'bg-rose-50 text-rose-600' : 'bg-gray-50 text-gray-400'}
            transition-colors duration-300
          `}>
            {phase.icon}
          </div>
          <span className={`
            text-sm font-medium transition-all duration-300
            ${activePhase === phase.id ? 'text-midnight' : 'text-gray-400'}
          `}>
            Phase {index + 1}
          </span>
        </button>
      ))}
    </div>
  )
}

const PhaseCard = ({ phase, isExpanded, onToggle, onNextPhase }: {
  phase: Phase
  isExpanded: boolean
  onToggle: () => void
  onNextPhase?: (id: string) => void
}) => {
  const getPhaseIcon = (phaseId: string) => {
    switch(phaseId) {
      case 'discover': 
        return <Search className="w-5 h-5 text-[#b48a98]" />;
      case 'design': 
        return <Compass className="w-5 h-5 text-[#b48a98]" />;
      case 'deliver': 
        return <Zap className="w-5 h-5 text-[#b48a98]" />;
      case 'drive': 
        return <Shield className="w-5 h-5 text-[#b48a98]" />;
      default: 
        return <Search className="w-5 h-5 text-[#b48a98]" />;
    }
  };

  return (
    <div 
      className={`
        group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-in-out cursor-pointer
        ${isExpanded 
          ? 'bg-white shadow-xl border-[#b48a98]/20 ring-2 ring-[#b48a98]/10' 
          : 'bg-white shadow-sm border-gray-100 hover:shadow-lg hover:border-[#b48a98]/20'
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-xl bg-[#b48a98]/10 flex items-center justify-center group-hover:bg-[#b48a98]/15 transition-colors duration-300">
                {getPhaseIcon(phase.id)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#b48a98] transition-colors duration-300">
                  {phase.title}
                </h3>
                <p className="text-[#b48a98] text-sm font-medium">
                  {phase.tagline}
                </p>
              </div>
            </div>
          </div>
          <div className={`
            transition-transform duration-300 flex-shrink-0 mt-1
            ${isExpanded ? 'rotate-180' : ''}
          `}>
            <ChevronDown className="w-5 h-5 text-[#b48a98]" />
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <div className="border-t border-gray-100 pt-6 space-y-6">
              {/* Punchline */}
              <div className="bg-gradient-to-br from-[#b48a98]/5 to-[#b48a98]/10 p-4 rounded-xl border border-[#b48a98]/10">
                <p className="text-gray-900 text-base font-medium leading-relaxed">
                  {phase.punchline}
                </p>
              </div>

              {/* Main Content */}
              <div>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-sm font-semibold text-[#b48a98] mb-3 uppercase tracking-wide">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {phase.deliverables.map((deliverable, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#b48a98]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[#b48a98]" />
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <p className="text-gray-500 text-sm italic">{phase.conclusion.without}</p>
                <p className="text-gray-900 font-medium text-sm">{phase.conclusion.with}</p>
              </div>

              {/* Next Phase */}
              {phase.nextPhase && (
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onNextPhase?.(phase.nextPhase!.id)
                    }}
                    className="group inline-flex items-center gap-2 text-[#b48a98] hover:text-[#9a7a88] transition-colors duration-300 font-medium text-sm"
                  >
                    <span>Next: {phase.nextPhase.title}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TdcFrameworkNew() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null)

  const togglePhase = (id: string) => {
    setExpandedPhase(expandedPhase === id ? null : id)
  }

  return (
    <section className={`relative ${typography.sectionSpacing.standard} bg-gradient-to-br from-gray-50/50 via-white to-[#faf8f9] overflow-hidden`}>
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#b48a98]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#b48a98]/3 rounded-full blur-3xl" />

      <div className={`relative ${getContainerClasses("main", "section")}`}>
        {/* Section Header */}
        <div className={typography.spacing.sectionMargin}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#b48a98]/10 rounded-full mb-6 text-[#b48a98] font-medium text-sm"
          >
            <div className="w-1.5 h-1.5 bg-[#b48a98] rounded-full" />
            Our Framework
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${typography.h2} text-gray-900 ${typography.spacing.titleMargin}`}
          >
            The TDC 4D Operating System for{" "}
            <span className="text-[#b48a98]">
              Transformation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${typography.body.large} text-gray-600 max-w-3xl ${typography.spacing.componentMargin}`}
          >
            It's not just a framework. It's a strategic firewall — against wasted effort, lost trust, and fragile execution.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -2 }}
            onClick={() => setExpandedPhase('discover')}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#9a7a88] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See how we make it happen
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Core Principles - Clean horizontal layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="lg:flex-shrink-0 lg:w-72 mb-10 lg:mb-0"
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#b48a98] mb-3">
                The 4D Framework is guided by 
              </h3>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-[#b48a98]">3</span>
                <span className="text-lg text-gray-600">core beliefs</span>
              </div>
            </motion.div>
            
            <div className="flex flex-col md:flex-row md:gap-10 lg:gap-12 flex-1">
              {corePrinciples.map((principle, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex-1 pb-6 md:pb-0"
                >
                  <div className="mb-3">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#b48a98] to-[#b48a98]/30 rounded-full mb-3" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Framework Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-[#b48a98] font-medium mb-3 text-sm">The 4D Phases:</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Built for What Transformation{" "}
            <span className="text-[#b48a98]">Really Takes</span>
          </h2>
        </motion.div>

        {/* Framework Grid - Simplified */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <PhaseCard
                phase={phase}
                isExpanded={expandedPhase === phase.id}
                onToggle={() => togglePhase(phase.id)}
                onNextPhase={setExpandedPhase}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insight - Simple and clean */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mb-12"
        >
          <div>
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-4">
              Transformation is not a project. It's a system with memory — if you build it right.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              From vision to velocity — TDC delivers what transformation really takes.
            </p>
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#b48a98] text-white rounded-full font-semibold hover:bg-[#9a7a88] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            See 4D in Action
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 