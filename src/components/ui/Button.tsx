import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'medium' | 'small'
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'medium',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`ui-button ui-button--${variant} ui-button--${size} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
