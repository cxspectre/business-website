"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowRight } from "lucide-react"
import AnimatedLogo from "./animated-logo"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Video play observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-header-video-play') {
          const shouldPlay = (mutation.target as HTMLElement).getAttribute('data-header-video-play') === 'true'
          setShouldPlayVideo(shouldPlay)
        }
      })
    })

    const target = document.querySelector('[data-header-video-play]')
    if (target) {
      observer.observe(target, { attributes: true })
      setShouldPlayVideo(target.getAttribute('data-header-video-play') === 'true')
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    // Set initial scroll state
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out 
      ${isMounted && isScrolled 
        ? "top-6 w-[85%] bg-white shadow-lg border border-gray-100" 
        : "top-8 w-[92%] bg-white backdrop-blur-md border border-gray-100"}
      backdrop-blur-sm rounded-2xl`}
    >
      <div className={`max-w-[90rem] mx-auto flex items-center justify-between transition-all duration-300
        ${isMounted && isScrolled ? "px-5 h-14" : "px-6 h-16"}`}>
        <Link href="/" className="flex items-center">
          <div className={`relative transition-all duration-300 ${isMounted && isScrolled ? "h-12 w-36" : "h-14 w-40"}`}>
            <AnimatedLogo className="w-full h-full" isScrolled={isMounted && isScrolled} shouldPlay={shouldPlayVideo} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className={`flex transition-all duration-300 ${isMounted && isScrolled ? "space-x-5" : "space-x-6"}`}>
            <NavLink href="/services" label="Services" isScrolled={isMounted && isScrolled} />
            <NavLink href="/about" label="About" isScrolled={isMounted && isScrolled} />
            <NavLink href="/thetanjaroom" label="TheTanjaRoom" isScrolled={isMounted && isScrolled} />
          </div>
          <Link
            href="/contact"
            className={`ml-6 transition-all duration-300 group
              ${isMounted && isScrolled 
                ? "bg-white hover:bg-white/90 text-[#b48a98] px-4 py-1.5 text-[13px] rounded-full shadow-md hover:shadow-lg flex items-center gap-2" 
                : "bg-white hover:bg-white/90 text-[#b48a98] px-5 py-2 text-sm rounded-full shadow-lg hover:shadow-xl flex items-center gap-2"}`}
          >
            Contact
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#b48a98] hover:text-[#b48a98]/80 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            <MobileNavLink href="/services" label="Services" onClick={toggleMenu} />
            <MobileNavLink href="/about" label="About" onClick={toggleMenu} />
            <MobileNavLink href="/thetanjaroom" label="TheTanjaRoom" onClick={toggleMenu} />
            <Link
              href="/contact"
              className="bg-white hover:bg-white/90 text-[#b48a98] px-4 py-2 rounded-full text-center text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              onClick={toggleMenu}
            >
              Contact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLink = ({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) => {
  return (
    <Link 
      href={href} 
      className={`transition-all duration-300 relative group px-3 py-1.5 rounded-lg
        ${isScrolled 
          ? "text-gray-800 hover:text-[#b48a98] text-[13px] hover:bg-gray-50" 
          : "text-gray-800 hover:text-[#b48a98] text-sm hover:bg-gray-50"}`}
    >
      {label}
    </Link>
  )
}

const MobileNavLink = ({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick: () => void
}) => {
  return (
    <Link
      href={href}
      className="text-gray-800 font-medium hover:text-[#b48a98] transition-colors text-lg py-2 px-4 rounded-xl hover:bg-gray-50"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

export default Header
