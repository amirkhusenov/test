import { useEffect, useId, useRef, useState } from 'react'
import { CheckIcon, ChevronDownIcon } from './Icons'

export type SelectOption = {
  label: string
  value: string
}

type SelectProps = {
  options: SelectOption[]
  value: string
  ariaLabel: string
  width?: 'default' | 'narrow' | 'wide'
  onChange: (value: string) => void
}

export function Select({ options, value, ariaLabel, width = 'default', onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()
  const selectedOption = options.find((option) => option.value === value) ?? options[0]

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('pointerdown', closeOnOutsideClick)
    return () => window.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [isOpen])

  return (
    <div className={`ui-select ui-select--${width}`} ref={rootRef}>
      <button
        className="ui-select__trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{selectedOption.label}</span>
        <ChevronDownIcon />
      </button>
      {isOpen ? (
        <div className="ui-select__menu" id={listboxId} role="listbox">
          {options.map((option) => (
            <button
              className="ui-select__option"
              type="button"
              role="option"
              aria-selected={option.value === value}
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
            >
              {option.value === value ? (
                <span className="ui-select__check">
                  <CheckIcon />
                </span>
              ) : null}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
