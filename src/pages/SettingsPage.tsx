import { Button } from '../components/ui/Button'
import { FolderIcon, InfoIcon, XIcon } from '../components/ui/Icons'
import { Select, type SelectOption } from '../components/ui/Select'
import { SettingsWindow } from '../components/ui/SettingsWindow'
import { Slider } from '../components/ui/Slider'
import { Switch } from '../components/ui/Switch'
import { TextField } from '../components/ui/TextField'
import './SettingsPage.css'

type SettingsPageProps = {
  title: string
  isScaleEnabled: boolean
  scale: number
  theme: string
  language: string
  blockBadProxy: boolean
  dataPath: string
  optimization: string
  apiPort: string
  themeOptions: SelectOption[]
  languageOptions: SelectOption[]
  optimizationOptions: SelectOption[]
  onClose: () => void
  onScaleEnabledChange: (value: boolean) => void
  onScaleChange: (value: number) => void
  onThemeChange: (value: string) => void
  onLanguageChange: (value: string) => void
  onBlockBadProxyChange: (value: boolean) => void
  onChooseFolder: () => void
  onOptimize: () => void
  onClear: () => void
  onOptimizationChange: (value: string) => void
  onApiPortChange: (value: string) => void
  onReset: () => void
  onCancel: () => void
  onSave: () => void
}

export function SettingsPage({
  title,
  isScaleEnabled,
  scale,
  theme,
  language,
  blockBadProxy,
  dataPath,
  optimization,
  apiPort,
  themeOptions,
  languageOptions,
  optimizationOptions,
  onClose,
  onScaleEnabledChange,
  onScaleChange,
  onThemeChange,
  onLanguageChange,
  onBlockBadProxyChange,
  onChooseFolder,
  onOptimize,
  onClear,
  onOptimizationChange,
  onApiPortChange,
  onReset,
  onCancel,
  onSave,
}: SettingsPageProps) {
  return (
    <SettingsWindow
      title={title}
      actions={
        <button className="icon-button" type="button" aria-label="Закрыть" onClick={onClose}>
          <XIcon />
        </button>
      }
    >
      <section className="settings-section">
        <div className="settings-row">
          <span className="settings-label">Масштаб приложения</span>
          <Switch checked={isScaleEnabled} onCheckedChange={onScaleEnabledChange} />
        </div>
        <Slider
          value={scale}
          min={75}
          max={125}
          step={1}
          disabled={!isScaleEnabled}
          onChange={onScaleChange}
          valueLabel={`${scale}%`}
        />
        <div className="settings-row">
          <span className="settings-label">Тема</span>
          <Select
            ariaLabel="Тема"
            options={themeOptions}
            value={theme}
            onChange={onThemeChange}
            width="wide"
          />
        </div>
        <div className="settings-row">
          <span className="settings-label">Язык приложения</span>
          <Select
            ariaLabel="Язык приложения"
            options={languageOptions}
            value={language}
            onChange={onLanguageChange}
            width="narrow"
          />
        </div>
      </section>

      <section className="settings-section">
        <h2 className="section-title">Поведение профилей</h2>
        <div className="settings-row settings-row--wide">
          <span className="settings-description">
            Не запускать профиль, если нерабочий прокси
          </span>
          <Switch checked={blockBadProxy} onCheckedChange={onBlockBadProxyChange} />
        </div>
      </section>

      <section className="settings-section">
        <h2 className="section-title">Папка с данными приложения</h2>
        <TextField
          readOnly
          value={dataPath}
          ariaLabel="Папка с данными приложения"
          rightSlot={
            <button className="field-icon-button" type="button" aria-label="Выбрать папку" onClick={onChooseFolder}>
              <FolderIcon />
            </button>
          }
        />
        <div className="button-grid">
          <Button variant="secondary" onClick={onOptimize}>
            Оптимизировать
          </Button>
          <Button onClick={onClear}>Очистить</Button>
        </div>
        <div className="settings-row settings-row--compact">
          <span className="label-with-icon">
            Автоматическая оптимизация
            <InfoIcon />
          </span>
          <Select
            ariaLabel="Автоматическая оптимизация"
            options={optimizationOptions}
            value={optimization}
            onChange={onOptimizationChange}
            width="wide"
          />
        </div>
      </section>

      <section className="settings-section">
        <h2 className="section-title section-title--with-icon">
          API - порт
          <InfoIcon />
        </h2>
        <TextField
          value={apiPort}
          inputMode="numeric"
          placeholder="1024–65535"
          ariaLabel="API - порт"
          onChange={onApiPortChange}
        />
      </section>

      <section className="settings-section">
        <h2 className="section-title">Сброс настроек</h2>
        <div className="settings-row settings-row--wide">
          <span className="settings-description">Восстановить настройки по умолчанию</span>
          <Button variant="secondary" size="small" onClick={onReset}>
            Сбросить
          </Button>
        </div>
      </section>

      <footer className="settings-footer">
        <span className="settings-label">Сохранение настроек</span>
        <div className="footer-actions">
          <Button variant="secondary" size="small" onClick={onCancel}>
            Отмена
          </Button>
          <Button size="small" onClick={onSave}>
            Сохранить
          </Button>
        </div>
      </footer>
    </SettingsWindow>
  )
}
