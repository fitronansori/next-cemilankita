/**
 * Utility function to get the correct image path for GitHub Pages deployment
 * @param image_path - The relative image path
 * @returns The correct image path considering base path
 */
export const getImagePath = (image_path: string): string => {
  // If it's already an absolute URL, return as is
  if (image_path.startsWith("http://") || image_path.startsWith("https://")) {
    return image_path;
  }

  // For local images, Next.js will handle the base path automatically
  // when configured properly in next.config.ts
  return image_path;
};

/**
 * Fallback image path for when an image fails to load
 */
export const DEFAULT_PRODUCT_IMAGE = "/next-cemilankita/produk.png";
