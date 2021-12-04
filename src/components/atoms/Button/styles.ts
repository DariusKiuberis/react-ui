import React from 'react'
import styled from 'styled-components'
import { greyLight, greyDark, white } from '../../../stylesheets/colors'

interface ContainerProps {
  readonly isActive?: boolean
  isChildrenExists?: boolean
  disabled?: boolean
  outlined?: boolean
  variant?: string
  size?: string
  color?: string
  loading?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
}

const Container = styled.button<ContainerProps>`
  border: ${({
    isChildrenExists,
    children,
    disabled,
    outlined,
    variant,
    color,
    loading,
  }) => {
    if (isChildrenExists) {
      return 'none'
    }
    if (outlined) {
      if (disabled || loading) {
        if (variant === 'contained') {
          return 'none'
        }
        return `solid 1px ${greyLight}`
      }
      return `solid 1px ${color}`
    }
    return 'none'
  }};
  border-radius: 3px;
  min-width: ${({ size }) => {
    if (size === 'small') {
      return '50px'
    }
    if (size === 'medium') {
      return '70px'
    }
    if (size === 'large') {
      return '100px'
    }
    if (size === '100%') {
      return '100%'
    }
    return '70px'
  }};
  min-height: ${({ size }) => {
    if (size === 'small') {
      return '15px'
    }
    if (size === 'medium') {
      return '20px'
    }
    if (size === 'large') {
      return '25px'
    }

    if (size === '100%') {
      return '100%'
    }
    return '20px'
  }};
  width: ${(fullWidth) => (fullWidth ? '100%' : null)};
  height: ${(fullHeight) => (fullHeight ? '100%' : null)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${(props) =>
    props.disabled || props.loading ? 'none' : null};
  padding: 5px;
  color: ${({ isChildrenExists, disabled, loading, variant, color }) => {
    if (isChildrenExists) {
      return 'none'
    }
    if (disabled || loading) {
      if (variant === 'text') {
        return greyLight
      }
      return greyDark
    }

    if (variant === 'contained') {
      return white
    }

    return color
  }};
  background-color: ${({
    isChildrenExists,
    disabled,
    outlined,
    variant,
    color,
    loading,
  }) => {
    if (isChildrenExists) {
      return 'transparent'
    }
    if (variant === 'text') {
      return white
    }
    if (disabled || loading) {
      if (outlined) {
        return white
      }
      return greyLight
    }

    return color
  }};

  :hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

const StartIconWrap = styled.div`
  /* border: solid 1px blue; */
  margin: 0 5px 0 0;
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
  margin: 0 0 0 5px;
  display: flex;
`

const LoadingWrap = styled.div`
  /* border: solid 1px red; */
  display: flex;
  white-space: nowrap;
  margin: ${({ loading }) => {
    if (!loading) {
      return '0px'
    }
    return '0 0 0 5px'
  }};
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
