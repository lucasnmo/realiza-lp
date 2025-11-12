import projectsData from "../public/data/projects.json";

export type Category = "residenciais" | "casas" | "comerciais" | "breve";

export type TechnicalSheet = {
  year?: string;
  regime?: string;
  address?: string;
  architect?: string;
  totalArea?: string;
  floors?: string;
  bedrooms?: string;
  unitArea?: string;
  infrastructure?: string;
};

export type Project = {
  id: string;
  category: Category;
  name: string;
  images: string[];
  technicalSheet: TechnicalSheet;
};

export function getProjects(): Project[] {
  const projects = projectsData as Project[];

  return projects.sort((a, b) => {
    const yearA = a.technicalSheet.year ? parseInt(a.technicalSheet.year) : 0;
    const yearB = b.technicalSheet.year ? parseInt(b.technicalSheet.year) : 0;
    return yearB - yearA;
  });
}

export const PROJECTS = getProjects();
