import { Project, Skill, Category } from './types';
import { 
  Zap, 
  Workflow, 
  LayoutDashboard, 
  Globe, 
  PenTool, 
  Database,
  Smartphone,
  Server
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { 
    name: 'GoHighLevel', 
    icon: LayoutDashboard, 
    description: 'Full CRM architecture, funnels, and snapshot deployment.' 
  },
  { 
    name: 'n8n', 
    icon: Workflow, 
    description: 'Self-hosted complex workflow automation and data piping.' 
  },
  { 
    name: 'Make.com', 
    icon: Server, 
    description: 'Advanced scenario building for cross-platform integration.' 
  },
  { 
    name: 'Zapier', 
    icon: Zap, 
    description: 'Rapid connection setup between thousands of SaaS apps.' 
  },
  { 
    name: 'WordPress', 
    icon: Globe, 
    description: 'CMS management and plugin integration.' 
  },
  { 
    name: 'Landing Pages', 
    icon: PenTool, 
    description: 'High-converting design tailored for automation funnels.' 
  },
];

export const PROJECTS: Project[] = [
  // Zapier
  {
    id: 'z1',
    title: 'Automated Lead Engagement System',
    description: 'Integrated HubSpot, ChatGPT, and Slack for instant follow-up.',
    category: 'Zapier',
    tags: ['HubSpot', 'OpenAI', 'Slack']
  },
  {
    id: 'z2',
    title: 'Shopify Order Sync & Support',
    description: 'Automation for EcoGear Shop to streamline support tickets.',
    category: 'Zapier',
    tags: ['Shopify', 'Zendesk', 'Email']
  },
  {
    id: 'z3',
    title: 'API Weather-Based Lead Tagging',
    description: 'Innovative lead segmentation based on real-time data.',
    category: 'Zapier',
    tags: ['Webhooks', 'OpenWeatherMap', 'CRM']
  },
  // Make.com
  {
    id: 'm1',
    title: 'Invoices & Contracts in 1 Click',
    description: 'Full financial document automation.',
    category: 'Make',
    tags: ['QuickBooks', 'DocuSign', 'Google Drive']
  },
  {
    id: 'm2',
    title: 'Social Media Content Plan',
    description: 'Automated content scheduling and distribution.',
    category: 'Make',
    tags: ['Airtable', 'Buffer', 'GPT-4']
  },
  // GHL
  {
    id: 'g1',
    title: 'Free Yoga Trial System',
    description: 'High-converting lead capture and appointment booking system.',
    category: 'GHL',
    tags: ['Calendars', 'Forms', 'SMS']
  },
  {
    id: 'g2',
    title: 'Review Request Automation',
    description: 'SMS and Email workflows to boost reputation management.',
    category: 'GHL',
    tags: ['Reputation', 'Twilio', 'Email']
  },
  {
    id: 'g3',
    title: 'CRM Pipeline Management',
    description: 'Full architecture setup for sales tracking.',
    category: 'GHL',
    tags: ['Sales Pipelines', 'Triggers', 'Reporting']
  },
  // Design
  {
    id: 'd1',
    title: 'High-Converting GHL Landing Pages',
    description: 'Responsive design work focused on conversion rate optimization.',
    category: 'Design',
    tags: ['UI/UX', 'CSS', 'Funnels']
  }
];

export const CATEGORIES: Category[] = ['All', 'GHL', 'Make', 'Zapier', 'Design'];