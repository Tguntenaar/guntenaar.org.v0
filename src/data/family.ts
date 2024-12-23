import { Code2, Plane, Camera, Code } from 'lucide-react';

export const familyMembers = [
  {
    name: 'Thomas',
    subdomain: 'thomas.guntenaar.org',
    image: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80',
    role: 'Software Developer',
    expertise: ['Full Stack', 'Cloud Architecture', 'System Design'],
    icon: Code2,
  },
  {
    name: 'Boris',
    subdomain: 'boris.guntenaar.org',
    image: 'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?auto=format&fit=crop&q=80',
    role: 'Accountant & Drone Expert',
    expertise: ['Financial Planning', 'Drone Photography', 'Aerial Mapping'],
    icon: Plane, // Changed from Drone to Plane as Drone is not available
  },
  {
    name: 'Olivier',
    subdomain: 'olivier.guntenaar.org',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80',
    role: 'Software Developer',
    expertise: ['Frontend Development', 'UX Design', 'Mobile Apps'],
    icon: Code,
  },
  {
    name: 'Joost',
    subdomain: 'joost.guntenaar.org',
    image: 'https://images.unsplash.com/photo-1552933529-e359b2477252?auto=format&fit=crop&q=80',
    role: 'Photographer',
    expertise: ['Portrait Photography', 'Event Coverage', 'Photo Editing'],
    icon: Camera,
  },
];