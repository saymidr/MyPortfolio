export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  views: string;
  image: string;
  embedUrl?: string; // URL for the video iframe (Google Drive, YouTube, etc.)
}

export interface StatItem {
  label: string;
  value: string;
}