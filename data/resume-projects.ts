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
      "SaaS project application boasting a dashboard tailored for air conditioning management.",
    techs: ["TypeScript", "PostgreSQL", "Storybook", "Jest", "TailwindCSS"],
    buttons: [{ label: "VIEW SITE", href: "https://www.aeras.app/" }],
  },
  {
    title: "Logo Ipsum",
    description:
      "SaaS to manage Services Orders, Reports, Surveys and more.",
    techs: ["TypeScript", "MySQL", "Shadcn/ui", "TailwindCSS", "Next.js"],
    buttons: [
      { label: "VIEW SITE", href: "https://logo-ipsum-rbpolim.vercel.app/sign-in" },
      { label: "VIEW CODE", href: "https://github.com/rbpolim/logo-ipsum" }
    ],
  },
  {
    title: "Portfolio",
    description:
      "Developer portfolio build with TypeScript, Next.js & TailwindCSS.",
    techs: ["TypeScript", "Next.js", "TailwindCSS", "Animation 3D", "Sendgrid"],
    buttons: [
      { label: "VIEW CODE", href: "https://github.com/rbpolim/portfolio-v2" },
    ],
  },
];

export { projects, featuredProjects };
