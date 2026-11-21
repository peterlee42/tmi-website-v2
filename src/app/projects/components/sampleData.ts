import { Project } from "./types";

export const sampleProjects: Project[] = [
  // 26/27 projects
  {
    id: "5",
    title: "LLM Sycophancy Mitigation",
    description:
      "Detect and correct sycophantic behaviour in LLMs.",
    status: "Active",
    tags: ["LLMs", "Sycophancy", "Alignment", "Robustness"],
    leads: ["Akash Nagabhirava"],
    links: {
      proposal:
        "https://docs.google.com/document/d/18ixg4s_yK7XIg57KUF7iQx4igkmsfxPke4AEb0am4Wk/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "6",
    title: "Socratic AI Tutor",
    description:
      "Build a jail-break resistant AI tutor that guides students toward answers without simply giving them away.",
    status: "Active",
    tags: ["AI in Education", "LLMs", "Human-AI Interaction"],
    leads: ["Jake Maly"],
    links: {
      proposal:
        "https://docs.google.com/document/d/1rL0hzYbRthrpLczFMHq1yX5OD7W0vqo5eatygBtXl1A/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "8",
    title: "Synthetic Data Screening",
    description:
      "Design screening pipelines for evaluating the quality of synthetic training data.",
    status: "Active",
    tags: ["Synthetic Data", "Data Quality", "Responsible AI"],
    leads: ["Andy Li", "Sameha Tasnim"],
    links: {
      proposal:
        "https://docs.google.com/document/d/1wGd7tVCHAJ8ntJD-n_MAHbqc8EWJhJi_ZhhxXn36Lj0/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "9",
    title: "Uncertainty-Aware RAG",
    description:
      "Build RAG systems that recognize uncertainty and know when to answer, ask, or defer.",
    status: "Active",
    tags: ["RAG", "Uncertainty", "LLMs", "Reliability"],
    leads: ["Shaurya Sareen (Rye)"],
    links: {
      proposal:
        "https://docs.google.com/document/d/1oxy9txFOXoEpWfCnNlQ8bOCk9ruSjBrhTLEzDjnRIPk/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  {
    id: "11",
    title: "Privacy-Preserving LLM Gateway",
    description:
      "Build a gateway that protects sensitive data before prompts are sent to external model providers.",
    status: "Active",
    tags: ["Privacy", "LLMs", "Data Protection"],
    leads: ["Peter Lee"],
    links: {
      proposal:
        "https://docs.google.com/document/d/1oDY23HJIKzhTuS8ukdYnuBkjADiQgc19OZtcNxqMAf0/edit?usp=sharing",
    },
    media: [{ type: "overview" }],
  },
  // Past projects
  {
    id: "1",
    title: "Explainable Censorship",
    description:
      "Explaining how open-source moderation models behave in ambiguous cases, using the UC Berkeley Measuring Hate Speech dataset.",
    status: "Completed",
    tags: ["Content Moderation", "Interpretability", "Fairness", "Transformers", "NLP"],
    leads: ["Yiping Chen"],
    links: {},
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure1.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure2.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure3.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure4.png",
        alt: "",
      },
      {
        type: "image",
        src: "/images/projects/explainable-censorship/ec-figure5.png",
        alt: "",
      },
    ],
  },
  {
    id: "2",
    title: "Context Based Captioning",
    description:
      "Live transcription that nails STEM terminology by biasing distil-whisper with course materials via ModernBERT and Shallow Fusion.",
    status: "Completed",
    tags: [
      "Accessibility",
      "Explainable AI",
      "Real Time Systems",
      "Ed Tech",
      "Speech Recognition",
      "ASR",
      "NLP",
    ],
    leads: [
      "Christina Xie",
    ],
    advisor: "Steve Engels",
    links: {
      github: "https://github.com/uoft-tmi/context-based-captioning/",
      huggingface: "https://huggingface.co/TMICCProj",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure1.png",
        alt: "Context Based Captioning figure 1",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure2.png",
        alt: "Context Based Captioning figure 2",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure3.png",
        alt: "Context Based Captioning figure 3",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure4.png",
        alt: "Context Based Captioning figure 4",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure5.png",
        alt: "Context Based Captioning figure 5",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure6.png",
        alt: "Context Based Captioning figure 6",
      },
      {
        type: "image",
        src: "/images/projects/context-based-captioning/cbc-figure7.png",
        alt: "Context Based Captioning figure 7",
      }
    ],
  },
  {
    id: "3",
    title: "Machine Unlearning",
    description:
      "Benchmarking machine unlearning frameworks by simulating user data removal requests in social media recommenders.",
    status: "Completed",
    tags: ["Machine Unlearning", "Data Privacy", "AI Safety", "GDPR", "Benchmark"],
    leads: ["Seoyun Yang"],
    links: {
      github: "https://github.com/seoyunyang31/machine_unlearning",
      proposal: "https://docs.google.com/document/d/1DOOZNwlPp33dMcIkNiYM5xNLXm147IPjf-WB8COrdZ4/edit?usp=sharing",
      slides: "https://docs.google.com/presentation/d/1pvaj-36cZTPxDmqwFCc6sK4-BkKW7B4ivpam8pDfG54/edit?usp=sharing",
    },
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure1.png",
        alt: "Machine Unlearning figure 1",
      },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure2.png",
        alt: "Machine Unlearning figure 2",
      },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure3.png",
        alt: "Machine Unlearning figure 3",
      },
      {
        type: "image",
        src: "/images/projects/machine-unlearning/mu-figure4.png",
        alt: "Machine Unlearning figure 4",
      },
    ],
  },
  {
    id: "4",
    title: "LLM Social Simulation",
    description:
      "How LLM agents cooperate or collapse when competing over shared, regenerating resources.",
    status: "Completed",
    tags: ["Multi-Agent Systems", "LLM Agents", "Social Simulation", "Cooperation", "Game Theory"],
    leads: ["Clementine Yang"],
    links: {},
    media: [
      { type: "overview" },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure1.png",
        alt: "LLM Social Simulation figure 1",
      },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure2.png",
        alt: "LLM Social Simulation figure 2",
      },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure3.png",
        alt: "LLM Social Simulation figure 3",
      },
      {
        type: "image",
        src: "/images/projects/llm-social-simulation/lss-figure4.png",
        alt: "LLM Social Simulation figure 4",
      },
    ],
  },
];