import { featuredProjects } from "@/constants/projects";

import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { Bounded } from "@/components/bounded";
import { ProjectCard } from "@/components/project-card";

const ProjectsPage = () => {
  return (
    <Bounded className="py-28">
      <div className="w-full max-w-2xl mx-auto space-y-8 my-20">
        <Heading>Projects</Heading>
        <Text>
          Here are some of the projects I&apos;ve worked on over the years.
        </Text>
        <div className="grid grid-cols-1 gap-10 mt-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              buttons={project.buttons}
            />
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ProjectsPage;
