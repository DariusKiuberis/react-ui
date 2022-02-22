import { ButtonProps } from './button.interfaces'

export interface EXAMPLEContainerProps
  extends Pick<ButtonProps, 'disabled' | 'outlined'> {
  labelSuperDuper: string
}

export interface IChildrenWrap extends Pick<ButtonProps, 'color'> {
  isChildrenExists?: boolean
}
