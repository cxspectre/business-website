import { BookOpen } from "lucide-react"

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#b48a98]/5">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#b48a98]/20 to-[#b48a98]/10 rounded-3xl mb-8 animate-pulse">
            <BookOpen className="w-12 h-12 text-[#b48a98]" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Case <span className="text-[#b48a98]">Studies</span>
          </h1>
          
          {/* Coming Soon */}
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8">
              Coming Soon
            </h2>
            
            {/* Decorative dots */}
            <div className="flex justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#b48a98] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#b48a98] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-[#b48a98] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
          
          {/* Subtle tagline */}
          <p className="text-lg text-gray-500 italic">
            Transformation stories in the making...
          </p>
        </div>
      </section>
    </main>
  )
} 