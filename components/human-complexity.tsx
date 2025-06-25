"use client"

import { motion } from "framer-motion"
import { Heart, Users, Brain, Lightbulb, ArrowRight, Compass } from "lucide-react"
import { typography, getContainerClasses } from "@/lib/typography"

const HumanComplexity = () => {
  const humanAspects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotional Intelligence",
      description: "We acknowledge that transformation is deeply personal and emotional, not just procedural."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Relational Dynamics",
      description: "Understanding how relationships and team dynamics influence and drive transformation success."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Cognitive Complexity",
      description: "Recognizing that people process change differently and need varied approaches to embrace new ways."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Individual Potential",
      description: "Unlocking unique strengths and capabilities that emerge when people feel truly seen and supported."
    }
  ]

  return (
    <section className={`${typography.sectionSpacing.large} relative bg-gradient-to-br from-slate-50 to-white overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#cea7b1] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#5b3c46] rounded-full blur-3xl" />
      </div>

      <div className={`${getContainerClasses("main", "section")} relative`}>
        {/* Section Header */}
        <div className={typography.spacing.sectionMargin}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#cea7b1]/10 px-4 py-2 rounded-full mb-6"
          >
            <Compass className="w-4 h-4 text-[#5b3c46]" />
            <span className={`${typography.label.medium} text-[#5b3c46]`}>The Human Dimension</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${typography.h2} text-[#0B1C28] ${typography.spacing.titleMargin}`}
          >
            Beyond Systems:
            <span className="block text-[#5b3c46]">A Space for Human Complexity</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${typography.subtitle.large} text-slate-600 max-w-3xl ${typography.spacing.componentMargin}`}
          >
            While frameworks provide structure, real transformation happens in the messy, 
            beautiful complexity of human experience. We create space for both.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`${typography.h3} text-[#0B1C28] ${typography.spacing.componentMargin}`}>
              Where Others See Resistance, We See Wisdom
            </h3>
            
            <div className="space-y-6 text-slate-600">
              <p className={`${typography.body.large} ${typography.spacing.textMargin}`}>
                Most transformation efforts fail because they treat humans as variables in a system 
                rather than complex beings with valid concerns, deep wisdom, and untapped potential.
              </p>
              
              <p className={`${typography.body.large} ${typography.spacing.textMargin}`}>
                Our approach honors both the need for systematic thinking <em>and</em> the reality 
                that lasting change happens through human connection, understanding, and genuine care.
              </p>
              
              <p className={`${typography.body.large} ${typography.spacing.textMargin}`}>
                We don't just deliver frameworks—we create containers where people can safely 
                explore what transformation means for them, their relationships, and their future.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <blockquote className={`${typography.body.large} italic text-slate-700 ${typography.spacing.textMargin}`}>
                "The most profound transformations happen not when we follow a perfect process, 
                but when we create space for the perfectly imperfect human journey."
              </blockquote>
              <cite className={`block ${typography.body.small} font-medium text-[#5b3c46]`}>— Tanja Drefke</cite>
            </div>
          </motion.div>

          {/* Right Content - Human Aspects Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {humanAspects.map((aspect, index) => (
              <motion.div
                key={aspect.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#cea7b1] 
                         hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#cea7b1]/10 rounded-xl flex items-center justify-center 
                              text-[#5b3c46] mb-4 group-hover:bg-[#cea7b1]/20 transition-colors">
                  {aspect.icon}
                </div>
                
                <h4 className="text-lg font-semibold text-[#0B1C28] mb-3">
                  {aspect.title}
                </h4>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {aspect.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#5b3c46] to-[#cea7b1] 
                        text-white rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <span className="font-medium">Experience Transformation That Honors Complexity</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HumanComplexity 