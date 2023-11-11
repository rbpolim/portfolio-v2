import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

type HeadingProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  asChild?: boolean
}

export const Heading = ({
  children,
  className,
  size = 'md',
  asChild
}: HeadingProps) => {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component className={cn(
      'leading-relaxed font-bold',
      size === 'sm' && 'text-xl md:text-2xl',
      size === 'md' && 'text-3xl md:text-5xl',
      size === 'lg' && 'text-5xl md:text-7xl',
      className
    )}>
      {children}
    </Component>
  )
}