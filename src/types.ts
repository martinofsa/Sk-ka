export type CourseCategory = 'all' | 'kids' | 'teens' | 'adults';

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'kids' | 'teens' | 'adults';
  ageRange: string;
  level: string;
  description: string;
  detailedInfo: {
    focus: string[];
    attire: string;
    scheduleSummary: string;
    duration: string;
    capacity: string;
  };
  highlight?: string;
  image?: string;
}

export interface TimetableSlot {
  id: string;
  day: 'Pondelok' | 'Utorok' | 'Streda' | 'Štvrtok' | 'Piatok' | 'Sobota';
  time: string;
  title: string;
  category: 'kids' | 'teens' | 'adults';
  level: string;
  instructor: string;
  hall: string;
  spotsLeft: number;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BookingData {
  courseId: string;
  courseName: string;
  fullName: string;
  email: string;
  phone: string;
  ageCategory: string;
  preferredDay: string;
  experienceLevel: string;
  note?: string;
}
