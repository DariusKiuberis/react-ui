import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  ReactElement,
  ReactSVGElement,
  CSSProperties,
} from 'react'
import { DualRing } from '../Spinners'
import colorHandler from './logic/colorHandler'
import S from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties
  startIcon?: ReactElement | ReactSVGElement | null
  endIcon?: ReactElement | ReactSVGElement | null
  label?: string | number
  children?: ReactChild
  onClick?: () => void
  disabled?: boolean
  outlined?: boolean
  variant?: 'text' | 'contained' | 'upload'
  size?: 'small' | 'medium' | 'large' | '100%'
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
  fullWidth?: boolean
  fullHeight?: boolean
}

/**
 * A Button. All Params is optional.
 *
 * @param style CSSProperties
 * @param startIcon ReactElement | ReactSVGElement | null
 * @param endIcon ReactElement | ReactSVGElement | null
 * @param label string | number
 * @param children ReactChild
 * @param onClick () => void
 * @param disabled boolean
 * @param outlined boolean
 * @param variant 'text' | 'contained' | 'upload'
 * @param size 'small' | 'medium' | 'large'
 * @param color 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
 * @param loading boolean
 * @param loadingIcon ReactElement | ReactSVGElement | null
 * @param ripple boolean
 * @param type 'button' | 'submit' | 'reset'
 * @param fullWidth boolean
 * @param fullHeight boolean
 *
 * @returns  JSX.Element
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
  fullWidth,
  fullHeight,
}) => {
  //   label = variant === 'text' && !label ? 'Default Label' : label
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
      if (!label) {
        return null
      }
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

  const outlinedHandler = () => {
    if (variant === 'contained') {
      return false
    }
    return true
  }
  return (
    <S.Container
      style={style}
      onClick={onClick}
      disabled={disabled || loading}
      outlined={outlinedHandler()}
      size={size}
      variant={variant}
      color={colorHandler(color)}
      loading={loading}
      type={type}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
    >
      {contentHandler()}
    </S.Container>
  )
}

Button.defaultProps = {
  label: 'OK',
  startIcon: null,
  endIcon: null,
  disabled: false,
  outlined: true,
  variant: 'text',
  size: 'medium',
  color: 'primary',
  loading: false,
  loadingIcon: null,
  ripple: false,
  type: 'button',
  fullWidth: false,
  fullHeight: false,
}
