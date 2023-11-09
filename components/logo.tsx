import { cn } from '@/lib/utils'

type LogoProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Logo = ({
  size = 'md',
  className = '',
}: LogoProps) => {
  return (
    <div className={cn(
      'items-center hidden md:flex',
      className,
    )}>
      <h2 className={cn(
        'font-black',
        size === 'sm' && 'text-2xl',
        size === 'md' && 'text-4xl',
        size === 'lg' && 'text-6xl',
      )}>
        rbpolim
        <span className="duration-1000 animate-ping">_</span>
      </h2>
    </div>
  )
}