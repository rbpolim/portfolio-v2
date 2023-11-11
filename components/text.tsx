import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

type TextProps = {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Text = ({
  children,
  className,
  asChild
}: TextProps) => {
  const Component = asChild ? Slot : 'p'

  return (
    <Component className={cn(
      'leading-relaxed font-medium text-foreground/60',
      className
    )}>
      {children}
    </Component>
  )
}