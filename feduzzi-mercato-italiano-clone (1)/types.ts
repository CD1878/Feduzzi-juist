export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt: string;
  overlaySrc?: string; // For video posters
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}