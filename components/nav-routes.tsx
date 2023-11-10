import Link from "next/link"
import { usePathname } from 'next/navigation'

import { cn } from "@/lib/utils"

export const NavRoutes = () => {
  const pathname = usePathname()

  const routes = [
    {
      label: "projects",
      path: "/",
      active: pathname === "/projects"
    },
    {
      label: "contact",
      path: "/contact",
      active: pathname === "/contact"
    },
    {
      label: "skills",
      path: "/",
      active: pathname === "/skills"
    }
  ]

  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center text-2xl transition-colors gap-x-10">
        {routes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className={cn(
                'hover:text-neutral-500',
                route.active && "font-bold text-neutral-700"
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}