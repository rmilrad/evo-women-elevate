
export interface PortfolioItem {
  id: number;
  image?: string;  // Optional when video is provided
  video?: string;
  mediaType?: 'image' | 'video';
  titleKey?: string;  // Made optional
  descriptionKey?: string;  // Made optional
}

// Type guard to ensure either image or video is provided
export function isValidPortfolioItem(item: PortfolioItem): boolean {
  return (
    (item.mediaType === 'video' && !!item.video) ||
    ((!item.mediaType || item.mediaType === 'image') && !!item.image)
  );
}
