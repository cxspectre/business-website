import { Mail, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react"
import ContactForm from "@/components/contact/contact-form"

const expectations = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond within 1–2 business days"
  },
  {
    icon: MessageSquare,
    title: "Senior Expertise",
    description: "Direct contact with senior consultants — no sales reps"
  },
  {
    icon: MapPin,
    title: "Global Reach",
    description: "Based in Europe, working globally"
  }
]

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Start Your{" "}
              <span className="text-[#b48a98]">Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're exploring ideas or already deep in a change journey — we're here to help.
              Reach out, and let's navigate complexity together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#b48a98]/90 transition-all duration-300 group"
              >
                Start the Conversation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="https://calendly.com/tdc-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#b48a98] text-[#b48a98] rounded-full font-medium hover:bg-[#b48a98]/5 transition-all duration-300"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-start">
            {/* Form Column */}
            <ContactForm />

            {/* Info Column */}
            <div className="space-y-12">
              {/* Direct Contact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Want to talk directly?
                </h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:info@td-consult.info"
                    className="flex items-center gap-3 text-[#b48a98] hover:text-[#8b4c5f] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">info@td-consult.info</span>
                  </a>
                </div>
              </div>

              {/* Expectations */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  When You Reach Out, You Can Expect...
                </h3>
                <div className="space-y-6">
                  {expectations.map((exp) => {
                    const Icon = exp.icon
                    return (
                      <div key={exp.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#b48a98]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#b48a98]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Testimonial */}
              <figure className="relative bg-gradient-to-br from-[#b48a98]/5 via-[#b48a98]/3 to-transparent p-6 rounded-2xl">
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "TDC doesn't just help you transform — they help you understand why you're transforming. That clarity changed everything."
                </blockquote>
                <figcaption className="text-sm">
                  <span className="font-medium text-gray-900">CTO</span>
                  <span className="text-gray-500"> · Global Enterprise Client</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
