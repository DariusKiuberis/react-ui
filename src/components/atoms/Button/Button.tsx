import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  ReactElement,
  ReactSVGElement,
  CSSProperties,
} from 'react'
import { DualRing } from '../Spinners'
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
  loadingIcon?: ReactElement | ReactSVGElement | null
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
  loadingIcon,
  ripple,
  type,
}) => {
  label = variant === 'text' && !label ? 'Default Label' : label
  const contentHandler = () => {
    // if (loading) {
    //   return <DualRing />
    // }
    const loadingHandler = () => {
      if (loading) {
        if (loadingIcon) {
          return loadingIcon
        }
        return <DualRing />
      }
      return
    }

    const startIconHandler = () => {
      if (loading) {
        return null
      }
      return startIcon
    }

    const labelHandler = () => {
      return label
    }
    const childrenHandler = () => {
      if (loading) {
        return null
      }
      return children
    }

    const endIconHandler = () => {
      if (loading) {
        return null
      }
      return endIcon
    }

    return (
      <>
        <S.StartIconWrap>{startIconHandler()}</S.StartIconWrap>
        <S.LabelWrap>{labelHandler()}</S.LabelWrap>
        <S.ChildrenWrap>{childrenHandler()}</S.ChildrenWrap>
        <S.EndIconWrap>{endIconHandler()}</S.EndIconWrap>
        <S.LoadingWrap>{loadingHandler()}</S.LoadingWrap>
      </>
    )
  }

  return (
    <S.Container
      style={style}
      onClick={onClick}
      disabled={disabled || loading}
      outlined={outlined}
      variant={variant}
      color={color}
      loading={loading}
      type={type}
    >
      {contentHandler()}
    </S.Container>
  )
}

Button.defaultProps = {
  startIcon: null,
  endIcon: null,
  disabled: false,
  outlined: false,
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  loading: false,
  loadingIcon: null,
  ripple: false,
  type: 'button',
}
