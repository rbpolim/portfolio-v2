import { Navbar } from "@/components/navbar"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full text-neutral-900 dark:text-foreground">
      <header className="h-[80px] fixed w-full z-50 bg-white">
        <Navbar />
      </header>
      <main className="max-w-6xl px-4 py-2 mx-auto pt-[80px]">
        {children}
      </main>
    </div>
  )
}
