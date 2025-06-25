"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin, ArrowUp } from "lucide-react"
import AnimatedLogo from "./animated-logo"
import { useState } from "react"

// Client component for the back to top button
const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      onClick={scrollToTop}
      className="mt-4 md:mt-0 flex items-center gap-2 text-[#b48a98] hover:text-[#b48a98]/80 transition-colors"
    >
      Back to top
      <ArrowUp className="w-4 h-4" />
    </button>
  )
}

const Footer = () => {
  const [shouldPlayLogo, setShouldPlayLogo] = useState(false)

  return (
    <footer className="w-full bg-gradient-to-br from-white via-[#b48a98]/5 to-[#b48a98]/10 border-t border-[#b48a98]/10">
      <div className="max-w-[92%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="text-center">
            <Link 
              href="/" 
              className="block mb-4 inline-block"
              onMouseEnter={() => setShouldPlayLogo(true)}
            >
              <div className="relative h-20 w-56 mx-auto">
                <AnimatedLogo className="w-full h-full" isScrolled={false} shouldPlay={shouldPlayLogo} />
              </div>
              <p className="text-[#b48a98] mt-1">Human-Centered Digital Transformation</p>
            </Link>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-[#b48a98] mr-3" />
                <a 
                  href="mailto:info@td-consult.info" 
                  className="text-gray-600 group-hover:text-[#b48a98] transition-colors"
                >
                  info@td-consult.info
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-[#b48a98] mr-3" />
                <a 
                  href="tel:+31707445888" 
                  className="text-gray-600 group-hover:text-[#b48a98] transition-colors"
                >
                  +31 (0)70 74 45 88 8
                </a>
              </li>
              <li className="flex items-center group">
                <Linkedin className="w-5 h-5 text-[#b48a98] mr-3" />
                <a
                  href="https://linkedin.com/in/tanjadrefke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 group-hover:text-[#b48a98] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#b48a98] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-600 hover:text-[#b48a98] transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-[#b48a98] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#b48a98] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-[#b48a98] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-gray-600 hover:text-[#b48a98] transition-colors">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#b48a98]/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Tanja Drefke Consult.
            <span className="text-[#b48a98] ml-2">Backed by 25+ years of hands-on expertise.</span>
          </p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  )
}

export default Footer
