import { ModeToggle } from "@/components/mode-toggle"
import { NavRoutes } from "@/components/nav-routes"
import { MobileSidebar } from "@/components/mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl p-4 mx-auto">
      <h2 className="hidden text-4xl font-black md:flex">
        rbpolim_
      </h2>
      <MobileSidebar />
      <NavRoutes />
      <ModeToggle />
    </div>
  )
}