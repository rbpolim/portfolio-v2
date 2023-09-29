import Link from "next/link"

export const NavRoutes = () => {
  return (
    <nav>
      <ul className="hidden md:flex items-center text-2xl gap-x-6 transition-colors">
        <li >
          <Link href="/" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300">
            projects
          </Link>
        </li>
        <li>
          <Link href="/" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300">
            contact
          </Link>
        </li>
        <li>
          <Link href="/" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300">
            skills
          </Link>
        </li>
      </ul>
    </nav>
  )
}