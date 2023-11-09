import { cn } from "@/lib/utils"

type BoundedProps = {
  children: React.ReactNode
  className?: string
}

export const Bounded = ({
  children,
  className
}: BoundedProps) => {
  return (
    <section className={cn(
      'min-h-[calc(100vh-100px)]',
      className
    )}>
      {children}
    </section>
  )
}