export type Project = {
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
};

export type Experience = {
  title: string;
  position: string;
  date: string;
  description: string;
  notes: string[];
}