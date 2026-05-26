export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
  honors: string;
  coursework: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Certification {
  name: string;
  issuer: string;
  logoType: "cisco" | "gcp";
  bgColor?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface LeadershipItem {
  role: string;
  duration: string;
  description: string;
}
