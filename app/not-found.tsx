import Link from "next/link"
import { Home, ArrowLeft, Search, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#b48a98]/5">
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-[#b48a98]/20 leading-none select-none">
              404
            </h1>
          </div>
          
          {/* Main Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              It looks like the page you're looking for has moved, been deleted, 
              or doesn't exist. Don't worry — transformation often involves new paths.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center space-x-2 mb-12">
            <div className="w-3 h-3 bg-[#b48a98] rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-[#b48a98]/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-[#b48a98]/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b48a98] text-white rounded-full font-medium hover:bg-[#b48a98]/90 transition-all duration-300 group"
              >
                <Home className="w-4 h-4" />
                Go Home
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#b48a98] text-[#b48a98] rounded-full font-medium hover:bg-[#b48a98]/5 transition-all duration-300"
              >
                <Search className="w-4 h-4" />
                Explore Services
              </Link>
            </div>

            <div className="pt-8 border-t border-gray-200 mt-12">
              <p className="text-sm text-gray-500 mb-4">
                Still can't find what you're looking for?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#b48a98] hover:text-[#b48a98]/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in touch with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 