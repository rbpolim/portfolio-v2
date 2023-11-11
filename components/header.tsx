"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

import { Logo } from "@/components/logo"
import { NavRoutes } from "@/components/nav-routes"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar"

export const Header = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
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
      'h-[100px] flex items-center fixed w-full z-50 transition duration-700 ease-in-out backdrop-blur-sm',
      scrollNav ? 'bg-primary-foreground/30' : 'bg-transparent',
    )}>
      <div className="flex items-center justify-between w-full max-w-6xl p-4 mx-auto">
        <Logo />
        <MobileSidebar />
        <div className="flex items-center gap-x-8">
          <NavRoutes />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}