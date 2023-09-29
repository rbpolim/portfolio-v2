import Link from "next/link"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  title: string
  description: string
  buttons: {
    label: string
    href: string
    variant?: "primary" | "secondary"
  }[]
}

export const ProjectCard = ({
  title,
  description,
  buttons
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="space-x-4">
          {buttons.map((button) => (
            <Button
              asChild
              key={button.href}
              variant={button.variant as any}
            >
              <Link href={button.href}>
                {button.label}
              </Link>
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
