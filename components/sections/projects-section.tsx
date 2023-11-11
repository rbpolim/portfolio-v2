import { Bounded } from "@/components/bounded"
import { Heading } from "@/components/heading"
import { ProjectCard } from "@/components/project-card"

import { featuredProjects } from "@/constants/projects"

export const ProjectsSection = () => {
  return (
    <Bounded>
      <Heading title="featured projects" />
      <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            buttons={project.buttons}
          />
        ))}
      </div>
    </Bounded>
  )
}
