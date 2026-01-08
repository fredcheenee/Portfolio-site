import { LucideIcon } from 'lucide-react';

export type Category = 'All' | 'Zapier' | 'Make' | 'GHL' | 'Design';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}