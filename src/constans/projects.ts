type Project = {
  name: string;
  description: string;
  isOpenSource: boolean;
  githubUrl: string | null;
  demoUrl: string | null;
  thumbnail: string;
  pin: boolean;
  stack: string[];
};

export const projects: Project[] = [];
