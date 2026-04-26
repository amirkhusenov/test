import type { ImgHTMLAttributes } from 'react'
import arrowDownIcon from '../../assets/icons/arrow-down.svg'
import checkIcon from '../../assets/icons/icon-check.svg'
import closeIcon from '../../assets/icons/close.svg'
import folderIcon from '../../assets/icons/folder.svg'
import infoCircleIcon from '../../assets/icons/info-circle.svg'

type IconProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt' | 'src'>

function Icon({ src, ...props }: IconProps & { src: string }) {
  return <img src={src} alt="" aria-hidden="true" draggable="false" {...props} />
}

export function ChevronDownIcon(props: IconProps) {
  return <Icon src={arrowDownIcon} {...props} />
}

export function CheckIcon(props: IconProps) {
  return <Icon src={checkIcon} {...props} />
}

export function FolderIcon(props: IconProps) {
  return <Icon src={folderIcon} {...props} />
}

export function InfoIcon(props: IconProps) {
  return <Icon src={infoCircleIcon} {...props} />
}

export function XIcon(props: IconProps) {
  return <Icon src={closeIcon} {...props} />
}
