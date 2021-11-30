import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  ReactElement,
  ReactSVGElement,
  CSSProperties,
} from 'react'
import Spinner from '../Spinner/Spinner'
import S from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties
  startIcon?: ReactElement | ReactSVGElement | null
  endIcon?: ReactElement | ReactSVGElement | null
  label?: string
  children?: ReactChild
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
  ripple?: boolean
  type?: 'button' | 'submit' | 'reset'
}

/**
 * A Button
 */
export const Button: FC<Props> = ({
  style,
  startIcon,
  endIcon,
  label,
  children,
  onClick,
  disabled,
  outlined,
  variant,
  size,
  color,
  loading,
  ripple,
  type,
}) => {
  // temporary
  outlined = false
  variant = 'text'
  size = 'medium'
  loading = false
  ripple = true
  return (
    <S.Container
      style={style}
      onClick={onClick}
      color={color}
      type={type}
      disabled={disabled}
      outlined={outlined}
    >
      {startIcon}
      {label}
      {children || null}
      {endIcon}
      {<Spinner />}
    </S.Container>
  )
}

Button.defaultProps = {
  startIcon: null,
  endIcon: null,
  label: 'Button',
  disabled: false,
  outlined: true,
  variant: 'text',
  size: 'medium',
  color: 'primary',
  loading: false,
  ripple: false,
  type: 'button',
}
