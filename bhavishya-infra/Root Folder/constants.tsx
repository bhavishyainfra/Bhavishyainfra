
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Obsidian Tower',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    location: 'Chicago, IL',
    year: '2023',
    description: 'A 54-story mixed-use skyscraper featuring sustainable facade technology.'
  },
  {
    id: '2',
    title: 'Azure Heights',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    location: 'Miami, FL',
    year: '2022',
    description: 'Luxury residential complex with panoramic ocean views and eco-friendly infrastructure.'
  },
  {
    id: '3',
    title: 'Metro Hub Transit',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1449156001935-d28705351cb1?auto=format&fit=crop&q=80&w=1000',
    location: 'Seattle, WA',
    year: '2024',
    description: 'Modern transit terminal designed for maximum flow and architectural impact.'
  },
  {
    id: '4',
    title: 'Solaris Energy Park',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000',
    location: 'Phoenix, AZ',
    year: '2023',
    description: 'Industrial-scale solar farm construction and distribution center.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Building homes',
    description: 'Custom residential construction focusing on quality, comfort, and modern aesthetics tailored to your lifestyle.',
    icon: 'fa-home'
  },
  {
    id: 's2',
    title: 'Apartments',
    description: 'High-density residential projects and luxury apartment complexes built with superior engineering and design.',
    icon: 'fa-building'
  },
  {
    id: 's3',
    title: 'Developing ventures',
    description: 'Large-scale land development and commercial ventures that create value and community impact.',
    icon: 'fa-mountain-city'
  }
];
