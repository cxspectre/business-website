import { Award, Heart, Lightbulb, ArrowRight, CheckCircle2, Trophy } from "lucide-react"
import DifferentiatorsSection from "@/components/about/differentiators-section"
import CtaSection from "@/components/about/cta-section"
import Image from "next/image"
import Link from "next/link"
import ScrollGradientDivider from "@/components/scroll-gradient-divider"
import { typography } from "@/lib/typography"
import { assetPath } from "@/lib/asset-path"

const highlights = [
  "20+ Years of Experience & Insight",
  "Enterprise-Scale Execution",
  "Trusted Across Regulated Industries"
]

const founderHighlights = [
  {
    title: "Certified Change Management Professional",
    badge: "CCMP™",
    description: "Expert in organizational transformation"
  },
  {
    title: "Project Management Professional",
    badge: "PMP®",
    description: "Leading complex program delivery"
  },
  {
    title: "Certified Scrum Master",
    badge: "CSM®",
    description: "Agile methodology expert"
  },
  {
    title: "SAFe® Program Consultant",
    badge: "SPC",
    description: "Enterprise agility specialist"
  }
]

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "We make complexity visible so teams can act with focus.",
    detail: "From strategy to execution, we create pathways that cut through noise."
  },
  {
    icon: Award,
    title: "Accountability",
    description: "We deliver what we promise and make impact measurable.",
    detail: "Our frameworks survive pressure because they're built on consequence."
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We embed human logic into every roadmap and rollout.",
    detail: "Real transformation requires real understanding of people and pressure points."
  }
]

const impactMetrics = [
  {
    metric: "€40M+",
    label: "Program Value",
    description: "Successfully delivered transformations"
  },
  {
    metric: "15+",
    label: "Countries",
    description: "Global implementation expertise"
  },
  {
    metric: "100%",
    label: "Delivery",
    description: "Zero-downtime transformation"
  }
]

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="w-full max-w-[98%] mx-auto mt-4 mb-8">
        <div className="overflow-hidden rounded-[40px]">
          <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={assetPath("/images/About.jpeg")}
                alt="About Hero Background"
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/25" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Trophy className="w-5 h-5 text-white" strokeWidth={1.5} />
                  <span className="text-white font-medium">Strategic Transformation Leadership</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Transforming Complexity into{" "}
                  <span className="text-white">Competitive Advantage</span>
                </h1>
                <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                  With 20+ years of experience, TDC helps enterprises decode complexity,
                  align people and systems, and deliver transformation that lasts.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="px-4 py-2 bg-white/10 text-white backdrop-blur-[1px] rounded-full text-sm font-medium border border-white/20"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-12 bg-white -mb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Clarity First. People Always.
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                We believe lasting transformation starts with brutal honesty and human logic.
              </p>
              <p>
                TDC combines systems thinking with stakeholder empathy — confronting complexity 
                without compromise. We don't deliver frameworks. We deliver frameworks that work 
                under pressure.
              </p>
              <div className="pt-4">
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 text-[#b48a98] font-medium hover:gap-3 transition-all"
                >
                  Learn how we turn clarity into action
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollGradientDivider />

      {/* Meet Tanja Section */}
      <section className="bg-gradient-to-br from-gray-50 via-gray-50 to-white -mt-7 -mb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 items-start">
            {/* Image Column */}
            <div className="relative max-w-md">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#b48a98]/5">
                <Image
                  src={assetPath("/images/TD.jpeg")}
                  alt="Tanja Drefke, CEO and Founder"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10" />
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-left">
                  Tanja Drefke
                </h2>
                <p className="text-lg text-[#b48a98] font-medium mb-6">
                  Founder. Change Strategist. Transformation Architect.
                </p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    With 20+ years leading multimillion-euro programs across global industries,
                    Tanja brings clarity to complexity.
                  </p>
                  <p>
                    Her leadership bridges deep technical expertise with people-first design.
                    Whether steering through governance chaos or aligning burned-out teams,
                    she brings consequence-driven transformation that sticks.
                  </p>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {impactMetrics.map((metric) => (
                  <div 
                    key={metric.label}
                    className="p-4 rounded-xl bg-white shadow-sm border border-gray-100"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {metric.metric}
                    </div>
                    <div className="text-sm font-medium text-[#b48a98] mb-1">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Certifications</h3>
                <div className="grid gap-3">
                  {founderHighlights.map((cert) => (
                    <div
                      key={cert.title}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white border border-gray-100"
                    >
                      <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#b48a98]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-medium text-gray-900">{cert.title}</span>
                          <span className="text-sm text-[#b48a98]">{cert.badge}</span>
                        </div>
                        <p className="text-sm text-gray-500">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollGradientDivider />

      {/* Values Section */}
      <section className="bg-white -mt-7 -mb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
              Values in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Our principles aren't just words. They're the foundation of how we deliver lasting change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b48a98]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#b48a98]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-900 mb-3">
                    {value.description}
                  </p>
                  <p className="text-sm text-gray-600">
                    {value.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ScrollGradientDivider />

      {/* What Makes Us Different */}
      <DifferentiatorsSection />

      <ScrollGradientDivider />

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
