import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Aeras",
    description: "MVC application to manage recipes, users and chefs. Built with Javascript and PostgreSQL.",
    techs: ["Javascript", "PostgreSQL", "HTML", "CSS"],
    buttons: [
      { label: "VIEW CODE", href: "/" }
    ]
  },
  {
    title: "Foodfy",
    description: "MVC application to manage recipes, users and chefs. Built with Javascript and PostgreSQL.",
    techs: ["Javascript", "PostgreSQL", "HTML", "CSS"],
    buttons: [
      { label: "VIEW CODE", href: "/" }
    ]
  },
  {
    title: "Foodfy",
    description: "MVC application to manage recipes, users and chefs. Built with Javascript and PostgreSQL.",
    techs: ["Javascript", "PostgreSQL", "HTML", "CSS"],
    buttons: [
      { label: "VIEW CODE", href: "/" },
      { label: "VIEW CODE", href: "/" }
    ]
  },
]

export const ProjectsSection = () => {
  return (
    <section className="h-[calc(100vh-90px)]">
      <div className="flex items-center gap-x-4">
        <h2 className="text-7xl font-black">
          projects
        </h2>
        <div className="w-full h-1 bg-neutral-800 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            buttons={project.buttons}
          />
        ))}
      </div>
    </section>
  )
}
