import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { ProjectCard } from "@/components/project-card";

import { featuredProjects } from "@/data/resume-projects";

export const ProjectsSection = () => {
  return (
    <Bounded>
      <Heading size="lg" className="font-black">
        Featured projects
      </Heading>
      <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
    </Bounded>
  );
};
