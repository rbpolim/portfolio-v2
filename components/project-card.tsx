import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/resume-projects";
import { Badge } from "./ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  buttons: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
};

type BatataProps = {
  data: Project;
};

export const ProjectCard = ({ data }: BatataProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{data.description}</CardDescription>
        <div className="mt-4 flex items-center flex-wrap gap-1">
          {data.techs.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-md">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="space-x-4 mt-4">
          {data.buttons.map((button) => (
            <Button asChild key={button.href} variant="outline">
              <a target="_blank" rel="noopener noreferrer" href={button.href}>
                {button.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
