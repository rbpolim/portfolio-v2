export type Project = {
  title: string;
  description: string;
  techs: string[];
  buttons: {
    label: string;
    href: string;
  }[];
};

const projects = [
  {
    title: "Aeras",
    description:
      "MVC application to manage recipes, users and chefs. Built with Javascript and PostgreSQL.",
    techs: ["TypeScript", "PostgreSQL", "Prisma", "Storybook", "Jest"],
    buttons: [{ label: "VIEW CODE", href: "/" }],
  },
  {
    title: "Foodfy",
    description:
      "MVC application to manage recipes, users and chefs. Built with Javascript and PostgreSQL.",
    techs: ["Javascript", "PostgreSQL", "HTML", "CSS"],
    buttons: [{ label: "VIEW CODE", href: "/" }],
  },
  {
    title: "Foodfy",
    description:
      "MVC application to manage recipes, users and chefs. Built with Javascript and PostgreSQL.",
    techs: ["Javascript", "PostgreSQL", "HTML", "CSS"],
    buttons: [
      { label: "VIEW CODE", href: "/" },
      { label: "VIEW CODE", href: "/" },
    ],
  },
];

const featuredProjects = [
  {
    title: "Aeras",
    description:
      "SaaS project boasting a dashboard tailored for air conditioning management.",
    techs: ["TypeScript", "PostgreSQL", "Storybook", "Jest", "TailwindCSS"],
    buttons: [{ label: "VIEW SITE", href: "https://www.aeras.app/" }],
  },
  {
    title: "Portfolio",
    description:
      "A portfolio website from web/mobile Developer build with TypeScript, NextJS & TailwindCSS.",
    techs: ["TypeScript", "Next.js", "TailwindCSS", "Animation 3D", "Sendgrid"],
    buttons: [
      { label: "VIEW CODE", href: "https://github.com/rbpolim/portfolio-v2" },
    ],
  },
];

export { projects, featuredProjects };
