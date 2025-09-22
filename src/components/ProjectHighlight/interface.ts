import { ProjectHighlightsProps } from "../HighlightText/interface";

export interface GalleryItem {
  id: number;
  hasImage: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export interface GalleryProps {
  items?: GalleryItem[];
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
  headingProps?: ProjectHighlightsProps;
  containerClassName?: string;
  renderCustomItem?: (item: GalleryItem) => React.ReactNode;
}

export type GalleryItemWithImage = GalleryItem & {
  hasImage: true;
  imageSrc: string;
  imageAlt: string;
};

export type GalleryItemEmpty = GalleryItem & {
  hasImage: false;
  imageSrc?: never;
  imageAlt?: never;
};