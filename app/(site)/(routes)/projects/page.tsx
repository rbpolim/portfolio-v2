import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { Bounded } from "@/components/bounded";

const ProjectsPage = () => {
  return (
    <Bounded className="py-28">
      <div className="w-full max-w-2xl mx-auto space-y-8 my-20">
        <Heading>Projects</Heading>
        <Text>
          🚧 Building this page is still a work in progress. In the meantime,
          you can check out my{" "}
          <a
            href="https://www.linkedin.com/in/rbpolim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 underline text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>{" "}
          for a more detailed list of my work experience.
        </Text>
        {/* <Text>
          Here are some of the projects I&apos;ve worked on over the years.
        </Text> */}
        {/* <div className="grid grid-cols-1 gap-10 mt-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              buttons={project.buttons}
            />
          ))}
        </div> */}
      </div>
    </Bounded>
  );
};

export default ProjectsPage;
