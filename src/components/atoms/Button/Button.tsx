import React, { FC } from 'react'
import { Circle } from '../Spinners'
import colorHandler from './logic/colorHandler'
import S from './styles'
import { IButton } from './types/interfaces/button.interfaces'

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
 * @param onClick () => any
 * @param disabled boolean
 * @param outlined boolean
 * @param variant 'text' | 'contained' | 'upload'
 * @param size 'small' | 'medium' | 'large'
 * @param color 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
 * @param loading boolean
 * @param loadingIcon ReactElement | ReactSVGElement | null
 * @param ripple boolean
 * @param type 'button' | 'submit' | 'reset'
 * @param width boolean
 * @param height boolean
 * @param handleFile any
 *
 * @returns  JSX.Element
 */
export const Button: FC<IButton> = ({
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
  width,
  height,
  handleFile,
}) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null)

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
      return <Circle />
    }
    return
  }

  const outlinedHandler = () => {
    if (variant === 'contained' || !outlined) {
      return false
    }
    return true
  }

  const handleUpload = () => {
    if (variant === 'upload') {
      if (hiddenFileInput && hiddenFileInput.current) {
        return hiddenFileInput.current.click()
      }
    }
  }

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0]
    if (handleFile) handleFile(fileUploaded)
  }

  return (
    <>
      <S.Container
        style={style}
        onClick={onClick ? onClick : handleUpload}
        outlined={outlinedHandler()}
        disabled={disabled || loading}
        variant={variant}
        size={size}
        color={colorHandler(color)}
        loading={loading}
        ripple={ripple}
        type={type}
        width={width}
        height={height}
      >
        <S.Content
          style={styleContent}
          disabled={disabled || loading}
          variant={variant}
          loading={loading}
        >
          {contentHandler()}
        </S.Content>

        <S.Loading>
          <S.LoadingWrap>{loadingHandler()}</S.LoadingWrap>
        </S.Loading>
      </S.Container>
      {/* <button onClick={handleClick}>lalala</button> */}
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ border: 'solid blue', display: 'none' }}
        // hidden
      />
    </>
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
  width: null,
  height: null,
}

//@todo if icon , label and children exist then no gaps atm, need margins
//@todo when btn "contained" and disabled, barely visible difference
