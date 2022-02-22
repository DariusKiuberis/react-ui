import { IButton } from './interfaces/button.interfaces'
import { IChildrenWrap } from './interfaces/styles.interfaces'

export type ContainerProps = Pick<
  IButton,
  | 'disabled'
  | 'outlined'
  | 'variant'
  | 'size'
  | 'loading'
  | 'ripple'
  | 'fullWidth'
  | 'fullHeight'
>

export type ContentProps = Pick<
  IButton,
  'disabled' | 'variant' | 'size' | 'loading'
>

export type LoadingProps = Pick<IButton, 'disabled' | 'loading'>

export type LabelWrapProps = Pick<IButton, 'labelColor'>

export type ChildrenWrapProps = Pick<
  IChildrenWrap,
  'isChildrenExists' | 'color'
>
