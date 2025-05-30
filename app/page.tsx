import Hero from "@/components/hero"
import ProblemSection from "@/components/problem-section"
import ValueProposition from "@/components/value-proposition"
import TdcFrameworkNew from "@/components/tdc-framework-new"
import TransformativeImpact from "@/components/transformative-impact"
import TdcDifference from "@/components/tdc-difference"
import HumanComplexity from "@/components/human-complexity"
import AboutTeaser from "@/components/about-teaser"
import CtaBanner from "@/components/cta-banner"
import ScrollGradientDivider from "@/components/scroll-gradient-divider"
import { typography } from "@/lib/typography"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* 1. Hero Section */}
      <div className="w-full max-w-[98%] mx-auto mt-4 mb-16">
        <div className="overflow-hidden rounded-[40px]">
          <Hero />
        </div>
      </div>

      {/* 2. Why Most Transformations Stall */}
      <div className="w-full">
        <ProblemSection />
      </div>

      <ScrollGradientDivider />

      {/* 3. What Makes Transformation Hold – When Pressure Comes */}
      {/* <div className="w-full">
        <ValueProposition />
      </div>

      <ScrollGradientDivider /> */}

      {/* 4. The TDC 4D Operating System for Transformation */}
      <div className="w-full">
        <TdcFrameworkNew />
      </div>

      <ScrollGradientDivider />

      {/* 5. 4D in Action – Real Transformation, Systemically Delivered */}
      <div className="w-full">
        <TransformativeImpact />
      </div>

      <ScrollGradientDivider />

      {/* 6. Leadership That Builds Under Pressure */}
      <div className="w-full">
        <TdcDifference />
      </div>

      <ScrollGradientDivider />

      {/* 7. Beyond Systems: A Space for Human Complexity (Optional Section) */}
      <div className="w-full">
        <HumanComplexity />
      </div>

      <ScrollGradientDivider />

      {/* 8. About Tanja Drefke */}
      <div className="w-full">
        <div className={`${typography.containers.main} ${typography.padding.section} ${typography.sectionSpacing.medium}`}>
          <AboutTeaser />
        </div>
      </div>

      <ScrollGradientDivider />

      {/* 9. Let's Build Your Next Transformation — Together */}
      <div className="w-full">
        <CtaBanner />
      </div>
    </div>
  )
}
