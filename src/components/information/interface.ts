// interface.ts
export interface ServiceSection {
  id: string;
  title: string;
  description: string[];
}

export interface ServiceData {
  sections: ServiceSection[];
}

export interface InformationSectionProps {
  className?: string;
}

export interface TabItemProps {
  section: ServiceSection;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
}

export interface TabContentProps {
  section: ServiceSection;
  isActive: boolean;
}

export interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}