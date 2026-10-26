export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: 'multimodal' | 'fullstack-rag' | 'nlp';
  categoryLabel: string;
  status: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  modelsAndAlgorithms: string[];
  techStack: string[];
  features: string[];
  contributions: string[];
  challenges: string[];
  limitations: string[];
  futureWork: string[];
  metrics?: { label: string; value: string }[];
  architectureFlow: {
    step: number;
    title: string;
    description: string;
    details: string;
  }[];
  githubUrl: string;
  liveUrl?: string;
  verifiedAccuracyNote?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    badge?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  deliverables: string[];
  tools: string[];
  metrics: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  coursework: string[];
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  category: string;
  description: string;
  topics: string[];
  credentialStatus: 'Completed' | 'Verified';
}

export interface AchievementItem {
  title: string;
  category: string;
  metric: string;
  description: string;
  icon: string;
  highlight?: boolean;
}
