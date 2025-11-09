import Link from 'next/link'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type AnimatedCTAButtonProps = {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  type?: 'link' | 'button'
  target?: string
  rel?: string
}

export function AnimatedCTAButton({
  href,
  onClick,
  children,
  className,
  variant = 'primary',
  type = 'link',
  target,
  rel
}: AnimatedCTAButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full border transition-all duration-500'

  const variants = {
    primary: 'group relative h-auto overflow-hidden border-cobalt/30 bg-gradient-to-r from-cobalt via-platinum to-cobalt px-8 py-4 text-base font-semibold text-white shadow-glow before:absolute before:top-1 before:right-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-aurora before:blur-xl before:transition-all before:duration-700 after:absolute after:top-3 after:right-8 after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-cobalt/60 after:blur-2xl after:transition-all after:duration-700 hover:shadow-[0_0_60px_rgba(31,111,235,0.8)] hover:before:-bottom-8 hover:before:right-12 hover:after:-right-8 hover:after:top-12',
    secondary: 'border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15'
  }

  const combinedStyles = cn(
    baseStyles,
    variants[variant],
    className
  )

  if (type === 'link' && href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={combinedStyles}
      >
        {typeof children === 'string' ? (
          <span className="relative z-20">{children}</span>
        ) : (
          children
        )}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
      type="button"
    >
      {typeof children === 'string' ? (
        <span className="relative z-20">{children}</span>
      ) : (
        children
      )}
    </button>
  )
}
