"use client"

import { useEffect, useState } from "react"

import { Logo } from "@/components/logo"
import { NavRoutes } from "@/components/nav-routes"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { cn } from "@/lib/utils"

export const Header = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <header className={cn(
      'h-[100px] flex items-center fixed w-full z-50 transition duration-700 ease-in-out',
      scrollNav ? 'bg-primary-foreground/90' : 'bg-transparent',
    )}>
      <div className="flex items-center justify-between w-full max-w-6xl p-4 mx-auto">
        <Logo />
        <MobileSidebar />
        <NavRoutes />
        <ModeToggle />
      </div>
    </header>
  )
}