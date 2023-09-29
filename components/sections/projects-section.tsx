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
    <section className="h-screen space-y-10">
      <div className="flex items-center gap-x-4">
        <h2 className="font-black text-7xl">
          projects
        </h2>
        <div className="w-full h-1 rounded-full bg-neutral-800" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
