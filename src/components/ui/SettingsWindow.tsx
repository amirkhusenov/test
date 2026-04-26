import type { ReactNode } from 'react'

type SettingsWindowProps = {
  title: string
  actions?: ReactNode
  children: ReactNode
}

export function SettingsWindow({ title, actions, children }: SettingsWindowProps) {
  return (
    <section className="settings-window" aria-labelledby="settings-title">
      <header className="settings-header">
        <h1 id="settings-title">{title}</h1>
        {actions}
      </header>
      {children}
    </section>
  )
}
