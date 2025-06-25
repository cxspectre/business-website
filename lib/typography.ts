import { cn } from "@/lib/utils"

// Typography utility classes for consistent heights and spacing
export const typography = {
  // Main headings (h1) - Hero/Page titles
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
  
  // Section headings (h2) - Major section titles  
  h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
  
  // Subsection headings (h3) - Component titles
  h3: "text-xl sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight",
  
  // Minor headings (h4) - Card/item titles
  h4: "text-lg sm:text-xl md:text-2xl font-bold leading-tight tracking-tight",
  
  // Small headings (h5) - Labels/small titles
  h5: "text-base sm:text-lg font-bold leading-tight tracking-tight",
  
  // Small labels (h6) - Tiny titles
  h6: "text-sm sm:text-base font-bold leading-tight tracking-tight",
  
  // Subtitles - Supporting text under headings
  subtitle: {
    large: "text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed",
    medium: "text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed", 
    small: "text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed",
    tiny: "text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed"
  },
  
  // Body text - Main content
  body: {
    large: "text-lg md:text-xl leading-relaxed",
    medium: "text-base md:text-lg leading-relaxed",
    small: "text-sm md:text-base leading-relaxed",
    tiny: "text-xs md:text-sm leading-relaxed"
  },
  
  // Labels and badges
  label: {
    large: "text-sm font-medium uppercase tracking-wide",
    medium: "text-xs font-medium uppercase tracking-wide", 
    small: "text-xs font-medium uppercase tracking-wide"
  },
  
  // Consistent spacing classes
  spacing: {
    titleMargin: "mb-4 sm:mb-6",
    sectionMargin: "mb-8 sm:mb-12 md:mb-16",
    componentMargin: "mb-6 sm:mb-8",
    itemMargin: "mb-3 sm:mb-4",
    textMargin: "mb-2 sm:mb-3"
  },

  // Consistent container and layout classes
  containers: {
    // Main content container - consistent width and centering
    main: "max-w-7xl mx-auto",
    
    // Narrow container for focused content (CTAs, quotes, etc.)
    narrow: "max-w-4xl mx-auto",
    
    // Wide container for hero sections
    wide: "max-w-6xl mx-auto",
    
    // Full width container
    full: "w-full"
  },

  // Consistent padding for different container types
  padding: {
    // Standard section padding
    section: "px-4 sm:px-6 lg:px-8",
    
    // Tight padding for nested components
    component: "px-4 sm:px-6",
    
    // Loose padding for hero sections
    hero: "px-6 sm:px-8 lg:px-10",
    
    // Minimal padding
    tight: "px-4"
  },

  // Consistent vertical spacing for sections
  sectionSpacing: {
    // Standard section padding
    standard: "py-16 sm:py-20 md:py-24",
    
    // Large section padding for hero/major sections
    large: "py-20 sm:py-24 md:py-32",
    
    // Medium section padding
    medium: "py-12 sm:py-16 md:py-20",
    
    // Small section padding
    small: "py-8 sm:py-12 md:py-16"
  }
}

// Helper function to get typography classes
export const getTypographyClasses = (
  type: keyof typeof typography,
  variant?: string,
  className?: string
) => {
  let baseClasses = ""
  
  if (typeof typography[type] === "string") {
    baseClasses = typography[type] as string
  } else if (variant && typeof typography[type] === "object") {
    const typeObj = typography[type] as Record<string, string>
    baseClasses = typeObj[variant] || ""
  }
  
  return cn(baseClasses, className)
}

// Helper function to get container classes
export const getContainerClasses = (
  container: keyof typeof typography.containers = "main",
  padding: keyof typeof typography.padding = "section",
  className?: string
) => {
  const containerClass = typography.containers[container]
  const paddingClass = typography.padding[padding]
  return cn(containerClass, paddingClass, className)
} 