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
}

export interface Experience {
  title: string;
  type: 'work' | 'education';
  position: string;
  date: string;
  description: string;
  notes: string[];
}

// export type