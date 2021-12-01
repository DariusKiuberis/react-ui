import styled from 'styled-components'
import {
  primary,
  secondary,
  success,
  error,
  info,
  warning,
  grey,
  greyLight,
  greyDark,
  white,
} from '../../../stylesheets/colors'

interface ContainerProps {
  readonly isActive?: boolean
  disabled?: boolean
  outlined?: boolean
  variant?: string
  color?: string
  loading?: boolean
}

const Container = styled.button<ContainerProps>`
  border: ${(props) => {
    const { disabled, outlined, color, loading } = props

    if (color) {
      return 'none'
    }
    if (outlined) {
      if (disabled || loading) {
        return `solid 1px rgba(0, 0, 0, 0.12)`
      }
      return `solid 1px rgb(25, 118, 210)`
    }
    return 'none'
  }};
  border-radius: 3px;
  min-height: 20px;
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${(props) =>
    props.disabled || props.loading ? 'none' : null};
  padding: 5px;
  background-color: ${(props) => {
    const { disabled, outlined, variant, color, loading } = props
    if (variant === 'text') {
      return white
    }
    if (disabled || loading) {
      if (outlined) {
        return 'white'
      }
      return greyLight
    }
    if (color === 'primary') {
      return primary
    }
    if (color === 'secondary') {
      return secondary
    }
    if (color === 'success') {
      return success
    }
    if (color === 'error') {
      return error
    }
    if (color === 'info') {
      return info
    }
    if (color === 'warning') {
      return warning
    }

    return color
  }};

  :hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

const StartIconWrap = styled.div`
  /* border: solid 1px blue; */
  display: flex;
`

const LabelWrap = styled.div`
  /* border: solid 1px green; */
  white-space: nowrap;
`

const ChildrenWrap = styled.div`
  /* border: solid 1px purple; */
  white-space: nowrap;
`

const EndIconWrap = styled.div`
  /* border: solid 1px red; */
  display: flex;
`

const LoadingWrap = styled.div`
  /* border: solid 1px aqua; */
  /* width: 20px; */
  /* height: 20px;  */
  display: flex;
  white-space: nowrap;
`

const S = {
  Container,
  StartIconWrap,
  LabelWrap,
  ChildrenWrap,
  EndIconWrap,
  LoadingWrap,
}

export default S
