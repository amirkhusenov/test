type SliderProps = {
  value: number
  min: number
  max: number
  step?: number
  disabled?: boolean
  valueLabel: string
  onChange: (value: number) => void
}

export function Slider({
  value,
  min,
  max,
  step = 1,
  disabled = false,
  valueLabel,
  onChange,
}: SliderProps) {
  const progress = ((value - min) / (max - min)) * 100

  return (
    <label className="ui-slider">
      <span>{valueLabel}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        aria-label="Масштаб приложения"
        style={{ '--slider-progress': `${progress}%` } as React.CSSProperties}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
      />
    </label>
  )
}
