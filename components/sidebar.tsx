import Link from "next/link"
import { usePathname } from "next/navigation"
import { Linkedin, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"

import { Logo } from "@/components/logo"

export const Sidebar = () => {
  const pathName = usePathname()

  const routes = [
    {
      label: "home",
      path: "/",
      isActive: pathName === "/",
    },
    {
      label: "about",
      path: "/about",
      isActive: pathName === "/about",
    },
    {
      label: "contact",
      path: "/contact",
      isActive: pathName === "/contact",
    },
    {
      label: "skills",
      path: "/skills",
      isActive: pathName === "/skills",
    },
  ]

  return (
    <div className="flex flex-col h-full overflow-y-auto border-r shadow-sm">
      <div className="p-8">
        <Logo className="flex" />
      </div>
      <nav className="flex flex-col items-start mt-10 transition grow">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              'w-full p-6 text-3xl transition border-y border-muted-foreground/20 hover:bg-foreground hover:text-muted-foreground',
              route.isActive && 'bg-muted-foreground/20'
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <footer className="flex items-center justify-center p-6 gap-x-6">
        <Link
          href="https://twitter.com/rbpolim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-8 h-8 animate-bounce" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rbpolim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-8 h-8 animate-bounce" />
        </Link>
      </footer>
    </div>
  )
}