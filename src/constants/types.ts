export interface Project {
  name: string;
  url: string;
  description: string;
  features: string[];
  notes: string[];
  pitch: string;
  images: string[];
  github: {
    frontEnd: string,
    backEnd: string,
  };
  tech: string[],
}

export interface Experience {
  employer: string;
  type: 'work' | 'education';
  position: string;
  date: string;
  description: string;
  notes: string[];
  ext: {
    link: string;
    image: string;
  },
}

export interface Skill {
  name: string;
  devIconLink: string;
  strength: number;
  aspect: 'frontend' | 'backend' | 'general';
}

export interface Takeaway {
  title: string;
  detail: string;
}