import { Logo } from "@/components/logo"
import { ModeToggle } from "@/components/mode-toggle"
import { NavRoutes } from "@/components/nav-routes"
import { MobileSidebar } from "@/components/mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-6xl p-4 mx-auto">
      <Logo />
      <MobileSidebar />
      <NavRoutes />
      <ModeToggle />
    </div>
  )
}