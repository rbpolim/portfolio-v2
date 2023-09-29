import { ModeToggle } from "@/components/mode-toggle"
import { NavRoutes } from "@/components/nav-routes"
import { MobileSidebar } from "@/components/mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="flex max-w-6xl p-4 mx-auto items-center justify-between">
      <h2 className="hidden md:flex text-4xl font-black">
        rbpolim_
      </h2>
      <MobileSidebar />
      <NavRoutes />
      <ModeToggle />
    </div>
  )
}