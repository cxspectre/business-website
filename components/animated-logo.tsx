"use client"

import { useRef, useEffect } from "react"

interface AnimatedLogoProps {
  className?: string
  isScrolled?: boolean
  shouldPlay?: boolean
}

const AnimatedLogo = ({ className = "", isScrolled = false, shouldPlay = false }: AnimatedLogoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && shouldPlay) {
      videoRef.current.currentTime = 0 // Reset to start
      videoRef.current.play()
    }
  }, [shouldPlay])

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        autoPlay={false}
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
        className={`w-full h-full object-contain ${isScrolled ? 'scale-90' : 'scale-100'} transition-transform duration-300`}
        style={{
          WebkitAppearance: 'none',
          appearance: 'none',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          pointerEvents: 'none'
        }}
      >
        <source src="/videos/intro-animation.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default AnimatedLogo 