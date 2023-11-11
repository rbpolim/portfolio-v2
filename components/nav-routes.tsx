import Link from "next/link"
import { usePathname } from 'next/navigation'

import { cn } from "@/lib/utils"

export const NavRoutes = () => {
  const pathname = usePathname()

  const routes = [
    {
      label: "Home",
      path: "/",
      active: pathname === "/"
    },
    {
      label: "About",
      path: "/about",
      active: pathname === "/about"
    },
    {
      label: "Projects",
      path: "/projects",
      active: pathname === "/projects"
    }
  ]

  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center text-xl transition gap-x-10">
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
        <li className="hover:text-neutral-500">
          CV
        </li>
      </ul>
    </nav>
  )
}