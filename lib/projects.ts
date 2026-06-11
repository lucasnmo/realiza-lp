// lib/projects.ts
import projectsData from "../public/data/projects.json";

export type Category =
  | "residenciais"
  | "casas"
  | "comerciais"
  | "em_construcao"
  | "breve_lancamento";

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

export type ProjectStatus = "Em construção" | "Breve lançamento" | "Entregue";

export function getProjects(): Project[] {
  const projects = projectsData as Project[];

  return projects.sort((a, b) => {
    const yearA = a.technicalSheet.year ? parseInt(a.technicalSheet.year) : 0;
    const yearB = b.technicalSheet.year ? parseInt(b.technicalSheet.year) : 0;
    return yearB - yearA;
  });
}

export function getProjectStatus(project: Project): ProjectStatus {
  if (project.category === "em_construcao") return "Em construção";
  if (project.category === "breve_lancamento") return "Breve lançamento";
  return "Entregue";
}

export function isInvestmentProject(project: Project): boolean {
  return (
    project.category === "em_construcao" ||
    project.category === "breve_lancamento"
  );
}

export const PROJECTS = getProjects();
