import Link from "next/link"

export const NavRoutes = () => {
  return (
    <nav>
      <ul className="items-center hidden text-2xl transition-colors md:flex gap-x-10">
        <li >
          <Link href="/" className="hover:text-neutral-700 dark:text-neutral-300">
            projects
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-neutral-700 dark:text-neutral-300">
            contact
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-neutral-700 dark:text-neutral-300">
            skills
          </Link>
        </li>
      </ul>
    </nav>
  )
}