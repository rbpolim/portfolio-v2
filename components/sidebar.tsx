import Link from "next/link"

import { Logo } from "@/components/logo"

export const Sidebar = () => {
  return (
    <div className="h-full overflow-y-auto border-r shadow-sm">
      <div className="flex flex-col h-full p-6">
        <Logo className="flex" />
        <nav className="grow">
          <ul className="flex flex-col items-center pt-20 text-4xl transition gap-y-20">
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
      </div>
    </div>
  )
}