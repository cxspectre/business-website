"use client"

import { useState } from "react"
// import SplashScreen from "./splash-screen"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  // const [showSplash, setShowSplash] = useState(true)
  const [headerVideoShouldPlay, setHeaderVideoShouldPlay] = useState(true) // Set to true immediately

  // const handleSplashComplete = () => {
  //   setShowSplash(false)
  //   // Start header video almost immediately
  //   setTimeout(() => {
  //     setHeaderVideoShouldPlay(true)
  //   }, 100) // Reduced from 500ms to 100ms
  // }

  return (
    <>
      {/* {showSplash && <SplashScreen onComplete={handleSplashComplete} />} */}
      <div data-header-video-play={headerVideoShouldPlay}>
        {children}
      </div>
    </>
  )
} 