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
    primary: 'button text-base font-semibold text-white',
    secondary: 'border-white/15 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15'
  }

  const combinedStyles = cn(
    baseStyles,
    variants[variant],
    className
  )

  if (variant === 'primary') {
    const buttonContent = (
      <>
        {typeof children === 'string' ? (
          <span className="relative z-20">{children}</span>
        ) : (
          children
        )}
      </>
    )

    if (type === 'link' && href) {
      return (
        <div className="button-cont">
          <Link
            href={href}
            target={target}
            rel={rel}
            className={combinedStyles}
          >
            {buttonContent}
          </Link>
        </div>
      )
    }

    return (
      <div className="button-cont">
        <button
          onClick={onClick}
          className={combinedStyles}
          type="button"
        >
          {buttonContent}
        </button>
      </div>
    )
  }

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
