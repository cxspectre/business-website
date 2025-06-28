import { ArrowRight, Brain, BookOpen, FileText, Leaf, Zap, Book, CheckCircle } from "lucide-react"

const offerings = [
  {
    icon: Brain,
    title: "AI Companion",
    subtitle: "Intelligence in Every Step",
    description: "Context-aware decision layer that scaffolds reflection, supports action, and adapts dynamically. Not a chatbot — a hybrid between conversational guidance and protocol-based logic.",
    features: ["Personal pattern recognition", "Adaptive capacity matching", "Clear, never overwhelming"]
  },
  {
    icon: BookOpen,
    title: "Signature Programs",
    subtitle: "Depth, On Your Terms",
    description: "Self-paced courses for sustainable transformation — from foundational recalibration to advanced system literacy.",
    features: ["Free intro modules", "Signature deep-work programs", "Self-directed structure"]
  },
  {
    icon: FileText,
    title: "Transformation Tools",
    subtitle: "From Signals to Structure",
    description: "Translate body signals into system logic with data-guided templates and regenerative routines.",
    features: ["Self-led assessments", "Tracking templates", "Recalibration rituals"]
  },
  {
    icon: Leaf,
    title: "CellSync Supplements",
    subtitle: "Precision Regeneration",
    description: "Clinically-referenced formulas for mitochondrial resilience and nervous system restoration.",
    features: ["Batch-tested purity", "Synergy-calibrated", "Irritant-free formulation"]
  },
  {
    icon: Zap,
    title: "Integrative Devices",
    subtitle: "Evidence Meets Application",
    description: "Scientifically substantiated technologies, certified through independent audits.",
    features: ["Medical review process", "Global sourcing", "Real-world testing"]
  },
  {
    icon: Book,
    title: "Systemic Insights",
    subtitle: "Navigate Complexity",
    description: "Fieldbooks for systemic self-leadership — integrating experience with systems thinking.",
    features: ["Pain logic frameworks", "Trauma pattern mapping", "Regeneration psychology"]
  }
]

export default function TheTanjaRoom() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-8 bg-gradient-to-br from-white via-[#fdf9fb] to-[#b48a98]/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b48a98]/10 rounded-full text-[#b48a98] text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-[#b48a98] rounded-full animate-pulse"></div>
              Healthtech Venture
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              THE TANJA ROOM IS A<br />
              <span className="text-[#b48a98]">NEXT-GENERATION</span><br />
              HEALTHTECH VENTURE
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
              <p className="font-medium">
                Founded on 25+ years of enterprise consulting and medical systems expertise.
              </p>
              <p>
                It's where regenerative science meets intelligent systems – with a clear mission: to bring structure and relief to people facing complex health journeys.
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-100 mb-12">
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p className="text-xl font-semibold text-gray-900">
                  This is not a side project.
                </p>
                <p>
                  It's my second real venture – a startup born from both legacy and necessity.
                </p>
                <p>
                  We are currently in review within several European and cross-border innovation and health grant programs, and we're laying the foundation for a scalable, AI-driven health ecosystem.
                </p>
                <p className="font-medium">
                  The Tanja Room is being built to last – with real infrastructure, medical oversight, and the kind of focus that only comes from lived experience.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-[#b48a98]">
                <div className="w-8 h-px bg-[#b48a98]"></div>
                <span className="text-2xl">⬇</span>
                <div className="w-8 h-px bg-[#b48a98]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            "If it doesn't hold under pressure, it doesn't belong in your system."
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
            <p>
              Whether you live with invisible symptoms, chronic dysregulation, or simply a deep sense of misalignment — 
              this is a place where your experience isn't questioned. It's decoded, supported, and structured.
            </p>
            <p>
              Every framework, tool, and companion layer must be intelligent, adaptive, and backed by more than belief.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm">
              <CheckCircle className="w-10 h-10 text-[#b48a98] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">Grounded in medical research, not ideology</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm">
              <CheckCircle className="w-10 h-10 text-[#b48a98] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adaptive Intelligence</h3>
              <p className="text-gray-600">Structure that adapts to your complexity</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm">
              <CheckCircle className="w-10 h-10 text-[#b48a98] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Systems Thinking</h3>
              <p className="text-gray-600">Decode signals, understand patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence-Based Foundation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Grounded in Evidence — Not Ideology
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-8">
            <p>
              The Tanja Room is built on medical research, system mapping, longitudinal pattern analysis and validated protocols. 
              It draws from fields like bioinformatics, neuroimmunology, process automation, clinical regulation, and architecture logic.
            </p>
            <p>
              The frameworks, routines, and recommendations inside this space are not spiritual guesses or feel-good advice. 
              They are derived from peer-reviewed science, real-world data, and years of lived pattern recognition across human systems — technical and biological.
            </p>
            <p className="font-semibold text-gray-900 text-xl">
              If it doesn't hold under pressure, it's not in here.
            </p>
            <p>
              Every module, product, and companion tool must pass one test: 
              Is it intelligent, adaptive, and backed by more than belief?
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Six Pillars of Regenerative Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive system where AI supports healing, data meets regeneration, 
              and chronic complexity becomes navigable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <div key={offering.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#b48a98]/10 flex items-center justify-center group-hover:bg-[#b48a98]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#b48a98]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{offering.title}</h3>
                      <p className="text-sm text-[#b48a98] font-medium">{offering.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#b48a98] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#fdf9fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Because You Don't Need Another Solution
          </h2>
          <div className="text-xl text-gray-700 leading-relaxed space-y-6 mb-12">
            <p>
              You need a place where your complexity makes sense.
            </p>
            <p>
              A space to learn, reflect, choose, and rebuild — at your own rhythm, with real support.
            </p>
            <p>
              With structure that adapts.<br />
              With intelligence that doesn't overwhelm.<br />
              And with the kind of presence that the system never gave you.
            </p>
          </div>
          <div className="inline-flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#b48a98]/90 transition-all duration-300 group"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#b48a98] text-[#b48a98] rounded-full font-medium hover:bg-[#b48a98]/5 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          
          {/* Pre-launch status */}
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
            <p className="text-gray-700 text-lg">
              Currently pre-launch. Open for selected partners, collaborators & early adopters.
            </p>
          </div>
          
          <p className="text-2xl font-bold text-[#b48a98]">
            The Tanja Room is here — to hold what no protocol could.
          </p>
        </div>
      </section>
    </main>
  )
} 