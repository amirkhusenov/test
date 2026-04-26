import type { InputHTMLAttributes, ReactNode } from 'react'

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  ariaLabel: string
  rightSlot?: ReactNode
  onChange?: (value: string) => void
}

export function TextField({ ariaLabel, rightSlot, className = '', onChange, ...props }: TextFieldProps) {
  return (
    <label className={`ui-field ${className}`.trim()}>
      <input
        aria-label={ariaLabel}
        onChange={onChange ? (event) => onChange(event.currentTarget.value) : undefined}
        {...props}
      />
      {rightSlot}
    </label>
  )
}
