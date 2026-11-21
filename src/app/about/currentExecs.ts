import type { Exec } from "./components/ExecCard";

const dir = "/images/execs/2026-2027";

export const currentExecsYear = "2026–2027";

export const currentExecs: Exec[] = [
  {
    name: "Christina Xie",
    pronouns: "she/her",
    role: "Co-President",
    imageUrl: `${dir}/christina.jpg`,
    bio: "Drawing/painting portraits",
  },
  {
    name: "Seoyun Yang",
    pronouns: "she/her",
    role: "Co-President",
    imageUrl: `${dir}/seoyun.jpg`,
    bio: "Reading, crocheting/knitting, watching anime",
  },
  {
    name: "Yaarish Ali",
    pronouns: "he/him",
    role: "VP Operations",
    imageUrl: `${dir}/yaarish.jpg`,
    bio: "Travelling, table tennis, photography",
  },
  {
    name: "Marko Rajicic",
    pronouns: "he/him",
    role: "VP Finance",
    imageUrl: `${dir}/marko.jpg`,
    bio: "Films, football, hiking",
  },
  {
    name: "Peter Lee",
    pronouns: "he/him",
    role: "VP Web Development, Project Lead: LLM Gateway",
    imageUrl: `${dir}/peter.jpg`,
    bio: "Lifting, bouldering, guitar, cooking",
  },
  {
    name: "Jake Maly",
    pronouns: "he/him",
    role: "Project Lead: Socratic AI Tutor",
    imageUrl: `${dir}/jake.jpg`,
    bio: "Mystery/thriller shows, cooking",
  },
  {
    name: "Sameha Tasnim",
    pronouns: "she/her",
    role: "Project Co-Lead: Synthetic Data Quality",
    imageUrl: `${dir}/sameha.jpg`,
    bio: "Cooking, baking, travelling",
  },
  {
    name: "Andy Li",
    pronouns: "he/him",
    role: "Project Co-Lead: Synthetic Data Quality Screening",
    bio: "Photography, 3D modelling, art",
  },
  {
    name: "Shaurya Sareen (Rye)",
    pronouns: "he/him",
    role: "Project Lead: Uncertainty-Aware RAG",
    imageUrl: `${dir}/rye.jpg`,
    bio: "Soccer, swimming",
  },
  {
    name: "Akash Nagabhirava",
    pronouns: "he/him",
    role: "Project Lead: LLM Sycophancy Mitigation",
    imageUrl: `${dir}/akash.jpg`,
    bio: "I coach youth volleyball and ultimate!",
  },
];
