import { Text } from "@/components/text";
import { Heading } from "@/components/heading";
import { Bounded } from "@/components/bounded";

const ProjectsPage = () => {
  return (
    <Bounded className="py-28">
      <div className="w-full max-w-2xl mx-auto my-20 space-y-8">
        <Heading>Projects</Heading>
        <Text>
          🚧 Building this page is still a work in progress. In the meantime,
          you can check out my{" "}
          <a
            href="https://www.linkedin.com/in/rbpolim/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-primary-500 hover:text-blue-800"
          >
            LinkedIn
          </a>{" "}
          for a more detailed list of my work experience.
        </Text>
      </div>
    </Bounded>
  );
};

export default ProjectsPage;
