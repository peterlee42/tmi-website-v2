import type { Exec } from "../components/ExecCard";

export interface ExecYear {
  year: string;
  execs: Exec[];
}

const dir = "/images/execs/2025-2026";

export const pastExecs: ExecYear[] = [
  {
    year: "2025–2026",
    execs: [
      { name: "Joeun", role: "Co-President", imageUrl: `${dir}/joeun.jpeg`, bio: "Swimming, kickboxing, travelling" },
      { name: "Steven", role: "Co-President", imageUrl: `${dir}/steven.jpeg`, bio: "I'm a big map nerd lol" },
      { name: "Anthony", role: "VP Webmaster", imageUrl: `${dir}/anthony.jpeg`, bio: "I run and eat too much" },
      { name: "Lillian", role: "VP Finance", imageUrl: `${dir}/lillian.jpeg`, bio: "Violin, golf, archery" },
      { name: "Kera", role: "VP Learnings", imageUrl: `${dir}/kera.png`, bio: "Piano, reading" },
      {
        name: "Christina",
        role: "Project Lead: Context-Based Captioning",
        imageUrl: `${dir}/christina.jpeg`,
        bio: "Human-centric AI, ML for Privacy/Defense",
      },
      {
        name: "Clementine",
        role: "Project Lead: LLM Social Simulation",
        imageUrl: `${dir}/clementine.jpeg`,
        bio: "I have a dog and I play badminton",
      },
      {
        name: "Seoyun",
        role: "Project Lead: Machine Unlearning",
        imageUrl: `${dir}/seoyun.jpeg`,
        bio: "Reading, crocheting/knitting, watching anime",
      },
      {
        name: "Yiping",
        role: "Project Lead: Explainable Censorship",
        imageUrl: `${dir}/yiping.jpeg`,
        bio: "I like playing tetris!!!",
      },
    ],
  },
];
