import { useState } from 'react'
import './App.css'
import { SettingsPage } from './pages/SettingsPage'
import type { SelectOption } from './components/ui/Select'

const themeOptions: SelectOption[] = [
  { label: 'Светлая', value: 'light' },
  { label: 'Тёмная', value: 'dark' },
  { label: 'Как у системы', value: 'system' },
]

const languageOptions: SelectOption[] = [
  { label: 'Русский', value: 'ru' },
  { label: 'Українська', value: 'uk' },
  { label: 'English', value: 'en' },
]

const optimizationOptions: SelectOption[] = [
  { label: 'Никогда', value: 'never' },
  { label: '1 неделя', value: 'week' },
  { label: '1 месяц', value: 'month' },
]

function App() {
  const [isScaleEnabled, setIsScaleEnabled] = useState(true)
  const [scale, setScale] = useState(100)
  const [theme, setTheme] = useState('system')
  const [language, setLanguage] = useState('ru')
  const [blockBadProxy, setBlockBadProxy] = useState(true)
  const [optimization, setOptimization] = useState('never')
  const [apiPort, setApiPort] = useState('')

  return (
    <main className="app-shell">
      <SettingsPage
        title="Настройки"
        isScaleEnabled={isScaleEnabled}
        scale={scale}
        theme={theme}
        language={language}
        blockBadProxy={blockBadProxy}
        dataPath="C:\\Users\\Username\\AppData\\Local\\Anonym"
        optimization={optimization}
        apiPort={apiPort}
        themeOptions={themeOptions}
        languageOptions={languageOptions}
        optimizationOptions={optimizationOptions}
        onClose={() => undefined}
        onScaleEnabledChange={setIsScaleEnabled}
        onScaleChange={setScale}
        onThemeChange={setTheme}
        onLanguageChange={setLanguage}
        onBlockBadProxyChange={setBlockBadProxy}
        onChooseFolder={() => undefined}
        onOptimize={() => undefined}
        onClear={() => undefined}
        onOptimizationChange={setOptimization}
        onApiPortChange={setApiPort}
        onReset={() => undefined}
        onCancel={() => undefined}
        onSave={() => undefined}
      />
    </main>
  )
}

export default App
