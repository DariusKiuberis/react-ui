import React, {
  FC,
  HTMLAttributes,
  // ReactChild,
  ReactElement,
  ReactSVGElement,
  CSSProperties,
} from 'react'
import { DualRing } from '../Spinners'
import colorHandler from './logic/colorHandler'
import S from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
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
  size?: string | 'small' | 'medium' | 'large' | '100%'
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
 * @param styleContent CSSProperties
 * @param startIcon ReactElement | ReactSVGElement | null
 * @param endIcon ReactElement | ReactSVGElement | null
 * @param label string | number
 * @param labelColor string
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
  styleContent,
  startIcon,
  endIcon,
  label,
  labelColor,
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
  const isChildrenExists = () => {
    if (!React.Children.count(children)) return false
    return true
  }

  const contentHandler = () => {
    const startIconHandler = () => {
      return startIcon
    }

    const labelHandler = () => {
      if (!label) {
        return null
      }
      return label
    }
    const childrenHandler = () => {
      return children
    }

    const endIconHandler = () => {
      return endIcon
    }

    return (
      <>
        <S.StartIconWrap>{startIconHandler()}</S.StartIconWrap>
        <S.LabelWrap labelColor={labelColor}>{labelHandler()}</S.LabelWrap>
        <S.ChildrenWrap isChildrenExists={isChildrenExists()}>
          {childrenHandler()}
        </S.ChildrenWrap>
        <S.EndIconWrap>{endIconHandler()}</S.EndIconWrap>
      </>
    )
  }
  const loadingHandler = () => {
    if (loading) {
      if (loadingIcon) {
        return loadingIcon
      }
      return <DualRing />
    }
    return
  }

  const outlinedHandler = () => {
    if (variant === 'contained' || !outlined) {
      return false
    }
    return true
  }

  return (
    <S.Container
      style={style}
      onClick={onClick}
      outlined={outlinedHandler()}
      disabled={disabled || loading}
      variant={variant}
      color={colorHandler(color)}
      loading={loading}
      ripple={ripple}
      type={type}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
    >
      <S.Content
        style={styleContent}
        isChildrenExists={isChildrenExists()}
        disabled={disabled || loading}
        variant={variant}
        loading={loading}
        size={size}
      >
        {contentHandler()}
      </S.Content>

      <S.Loading>
        <S.LoadingWrap>{loadingHandler()}</S.LoadingWrap>
      </S.Loading>
    </S.Container>
  )
}

Button.defaultProps = {
  label: '',
  labelColor: '',
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

//@todo create toast. when disable, hover and toast says "need to wait"
//@todo make label color changeble
//@todo if icon , label and children exist then no gaps atm, need margins
//@todo loadingIcon not working
//@todo when btn "contained" and disabled, barely visible difference

//@note what is the diff between contained and upload?..
