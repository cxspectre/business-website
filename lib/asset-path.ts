/**
 * Utility function to handle asset paths for GitHub Pages deployment
 * This ensures images and videos load correctly with the basePath configuration
 */
export function assetPath(path: string): string {
  // Get the basePath from environment or default to empty string for development
  const basePath = process.env.NODE_ENV === 'production' ? '/business-website' : ''
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  return `${basePath}${normalizedPath}`
} 