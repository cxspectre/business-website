/**
 * Utility function to handle asset paths for deployment
 * This ensures images and videos load correctly across different environments
 */
export function assetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  return normalizedPath
} 