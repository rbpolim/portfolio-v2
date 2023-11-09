import Link from "next/link"

export const NavRoutes = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center text-2xl transition-colors gap-x-10">
        <li>
          <Link href="/" className="hover:text-neutral-700">
            projects
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-neutral-700">
            contact
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-neutral-700">
            skills
          </Link>
        </li>
      </ul>
    </nav>
  )
}