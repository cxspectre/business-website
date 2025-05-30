"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SplashScreenProps {
  onComplete: () => void
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Handle video completion
    const video = document.getElementById("splash-video") as HTMLVideoElement
    if (video) {
      video.addEventListener("ended", () => {
        setIsVisible(false)
        setTimeout(onComplete, 1000) // Call onComplete after fade out animation
      })
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div className="w-[30%] relative">
            <video
              id="splash-video"
              autoPlay
              playsInline
              muted
              className="w-full h-auto bg-transparent [&::-webkit-media-controls]:!hidden [&::-webkit-media-controls-enclosure]:!hidden [&::-webkit-media-controls-panel]:!hidden [&::--webkit-media-controls-play-button]:!hidden [&::-webkit-media-controls-timeline]:!hidden [&::-webkit-media-controls-current-time-display]:!hidden [&::-webkit-media-controls-time-remaining-display]:!hidden [&::-webkit-media-controls-mute-button]:!hidden [&::-webkit-media-controls-toggle-closed-captions-button]:!hidden [&::-webkit-media-controls-volume-slider]:!hidden outline-none border-none"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent'
              }}
            >
              <source src="/videos/intro-animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen 