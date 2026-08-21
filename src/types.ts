export interface Project {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Language' | 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Tools' | 'Other';
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  score?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}
