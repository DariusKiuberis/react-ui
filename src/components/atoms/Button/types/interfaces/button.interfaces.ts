import React, {
  HTMLAttributes,
  ReactElement,
  ReactSVGElement,
  CSSProperties,
} from 'react'

export interface IButton extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties
  styleContent?: CSSProperties
  startIcon?: ReactElement | ReactSVGElement | null
  endIcon?: ReactElement | ReactSVGElement | null
  label?: string | number
  labelColor?: string
  children?:
    | (React.ReactChild &
        (
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
        ))
    | undefined
  onClick?: () => void
  disabled?: boolean
  outlined?: boolean
  variant?: 'text' | 'contained' | 'upload'
  size?: 'small' | 'medium' | 'large'
  color?:
    | string
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  loading?: boolean
  loadingIcon?: ReactElement | ReactSVGElement | null
  ripple?: boolean
  type?: 'button' | 'submit' | 'reset'
  width?: string | number | null
  height?: string | number | null
}
