import { Compass, Network, Cpu, ArrowRight, Building2, Timer, Lock } from "lucide-react"
import ServiceHero from "@/components/service-hero"
import ServiceDetail from "@/components/service-detail"
import ServiceProcess from "@/components/service-process"
import SecondaryCta from "@/components/secondary-cta"

const credibilityMarkers = [
  { icon: Building2, text: "Enterprise-scale" },
  { icon: Timer, text: "99.99% Uptime" },
  { icon: Lock, text: "Regulatory-Ready" }
]

export default function Services() {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ServiceDetail />
      <ServiceProcess />
      <SecondaryCta
        title="Ready to Transform Your Digital Landscape?"
        description="Let's discuss how our services can help you achieve your business goals."
        ctaText="Schedule a Consultation"
        ctaHref="/contact"
      />
    </main>
  )
}
