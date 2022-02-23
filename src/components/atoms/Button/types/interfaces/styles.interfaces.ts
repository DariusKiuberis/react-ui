import { IButton } from './button.interfaces'

export interface EXAMPLEContainerProps
  extends Pick<IButton, 'disabled' | 'outlined'> {
  labelSuperDuper: string
}

export interface IChildrenWrap extends Pick<IButton, 'color'> {
  isChildrenExists?: boolean
}
