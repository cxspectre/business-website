"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Shield, Settings, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
      timestamp: Date.now()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setShowBanner(false)
    
    // Here you would typically initialize your analytics, marketing tools, etc.
    console.log('All cookies accepted')
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: Date.now()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly))
    setShowBanner(false)
    
    console.log('Only necessary cookies accepted')
  }

  const savePreferences = () => {
    const userPreferences = {
      ...preferences,
      timestamp: Date.now()
    }
    localStorage.setItem('cookieConsent', JSON.stringify(userPreferences))
    setShowBanner(false)
    setShowSettings(false)
    
    console.log('Custom preferences saved:', userPreferences)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="relative bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl shadow-black/10"
            >
              {/* Main Banner */}
              {!showSettings && (
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#b48a98] to-[#5b3c46] rounded-xl flex items-center justify-center shadow-md">
                          <Cookie className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">We value your privacy</h3>
                          <p className="text-sm text-gray-500">TD Consult uses cookies</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed max-w-2xl">
                        We use cookies to enhance your browsing experience, provide personalized content, 
                        and analyze our traffic. Some cookies are essential for the website to function properly, 
                        while others help us improve our services and understand how you interact with our site.
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Shield className="w-4 h-4 text-[#b48a98]" />
                        <span>Your data is protected and never sold to third parties</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 lg:flex-col xl:flex-row lg:min-w-[280px]">
                      <Button
                        onClick={acceptAll}
                        className="bg-gradient-to-r from-[#b48a98] to-[#5b3c46] hover:from-[#5b3c46] hover:to-[#b48a98] text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Accept All Cookies
                      </Button>
                      
                      <Button
                        onClick={acceptNecessary}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-2.5 rounded-xl transition-all duration-300"
                      >
                        Necessary Only
                      </Button>
                      
                      <Button
                        onClick={() => setShowSettings(true)}
                        variant="ghost"
                        className="text-[#b48a98] hover:text-[#5b3c46] hover:bg-[#b48a98]/5 font-medium px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Panel */}
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                      <Settings className="w-5 h-5 text-[#b48a98]" />
                      Cookie Preferences
                    </h3>
                    <Button
                      onClick={() => setShowSettings(false)}
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-200/50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900">Necessary Cookies</h4>
                          <span className="px-2 py-1 bg-[#b48a98]/10 text-[#b48a98] text-xs font-medium rounded-full">Required</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Essential for the website to function properly. These cannot be disabled.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-[#b48a98] rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-[#b48a98]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between p-4 hover:bg-gray-50/50 rounded-xl border border-gray-200/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                        <p className="text-sm text-gray-600">
                          Help us understand how visitors interact with our website by collecting anonymous information.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => togglePreference('analytics')}
                          className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1 ${
                            preferences.analytics 
                              ? 'bg-[#b48a98] justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between p-4 hover:bg-gray-50/50 rounded-xl border border-gray-200/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                        <p className="text-sm text-gray-600">
                          Used to track visitors across websites to display relevant advertisements.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => togglePreference('marketing')}
                          className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1 ${
                            preferences.marketing 
                              ? 'bg-[#b48a98] justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Preference Cookies */}
                    <div className="flex items-start justify-between p-4 hover:bg-gray-50/50 rounded-xl border border-gray-200/30 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                        <p className="text-sm text-gray-600">
                          Remember your preferences and personalize your experience on our website.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => togglePreference('preferences')}
                          className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1 ${
                            preferences.preferences 
                              ? 'bg-[#b48a98] justify-end' 
                              : 'bg-gray-300 justify-start'
                          }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Settings Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <Button
                      onClick={savePreferences}
                      className="bg-gradient-to-r from-[#b48a98] to-[#5b3c46] hover:from-[#5b3c46] hover:to-[#b48a98] text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Save Preferences
                    </Button>
                    
                    <Button
                      onClick={acceptAll}
                      variant="outline"
                      className="border-[#b48a98]/30 text-[#b48a98] hover:bg-[#b48a98]/5 font-medium px-6 py-2.5 rounded-xl transition-all duration-300"
                    >
                      Accept All
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Privacy Policy Link */}
              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-gray-200/50">
                <p className="text-xs text-gray-500 text-center">
                  For more information, please read our{' '}
                  <a href="/privacy" className="text-[#b48a98] hover:text-[#5b3c46] underline transition-colors">
                    Privacy Policy
                  </a>
                  {' '}and{' '}
                  <a href="/imprint" className="text-[#b48a98] hover:text-[#5b3c46] underline transition-colors">
                    Imprint
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner 