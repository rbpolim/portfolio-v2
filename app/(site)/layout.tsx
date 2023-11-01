import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full text-neutral-900 dark:text-foreground">
      <Header />
      <main className="max-w-6xl px-4 mx-auto space-y-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
