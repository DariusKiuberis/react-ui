import styled from 'styled-components'
import { black, greyLight, white } from '../../../stylesheets/colors'

interface ContainerProps {
  readonly isActive?: boolean
  disabled?: boolean
  outlined?: boolean
  variant?: string
  size?: string
  color?: string
  loading?: boolean
  ripple?: boolean
  fullWidth?: boolean
  fullHeight?: boolean
}

interface ContentProps {
  isChildrenExists?: boolean
  disabled?: boolean
  variant?: string
  size?: string
  loading?: boolean
}

interface LoadingProps {
  disabled?: boolean
  loading?: boolean
}

interface ChildrenWrapProps {
  color?: string
  isChildrenExists?: boolean
}

const Container = styled.button<ContainerProps>`
  position: relative;
  overflow: hidden;

  // ripple START
  @-webkit-keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 150px;
      height: 150px;
      opacity: 0;
    }
  }
  @keyframes ripple {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 150px;
      height: 150px;
      opacity: 0;
    }
  }

  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: currentColor;
    visibility: hidden;
    z-index: 2;
  }
  :not(:active):before {
    -webkit-animation: ripple 0.4s cubic-bezier(0, 0, 0.2, 1);
    animation: ripple 0.4s cubic-bezier(0, 0, 0.2, 1);
    -webkit-transition: visibility 0.4s step-end;
    transition: visibility 0.4s step-end;
  }
  :active:before {
    visibility: ${({ ripple }) => {
      if (ripple) {
        return ' hiden'
      }
      return 'visible'
    }};
  }
  // ripple END

  border: ${({ disabled, outlined, color, loading }) => {
    if (outlined) {
      if (disabled || loading) {
        return `solid 1px ${greyLight}`
      }
      return `solid 1px ${color}`
    }
    return 'none'
  }};

  border-radius: 3px;
  min-width: ${({ size }) => {
    return size
  }};

  /* width: ${(fullWidth) => (fullWidth ? '100%' : null)}; */
  /* height: ${(fullHeight) => (fullHeight ? '100%' : null)}; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled, loading }) => {
    if (disabled || loading) {
      return 'not-allowed'
    }

    return 'pointer'
  }};
  pointer-events: ${({ disabled, loading }) =>
    disabled || loading ? 'none' : 'auto'};
  padding: 5px;

  background-color: ${({ variant, color }) => {
    if (variant === 'text') {
      return white
    }

    return color
  }};

  :hover {
    box-shadow: ${({ disabled, loading }) => {
      if (disabled || loading) {
        return 'none'
      }
      return '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);'
    }};

    opacity: 0.9; //this is for ripple effect
  }

  :focus {
    opacity: 0.9;
  }
`

const Content = styled.div<ContentProps>`
  /* border: solid 1px red; */
  display: flex;
  justify-content: center;
  align-items: center;
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

    return size
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
  color: ${({ variant }) => {
    if (variant === 'text') {
      return black()
    }

    if (variant === 'contained') {
      return white
    }

    return white
  }};
  opacity: ${({ disabled, loading }) => {
    if (disabled || loading) {
      return 0.2
    }
    return 1
  }};
`

const Loading = styled.div<LoadingProps>`
  /* border: solid 1px green; */
  margin: 0 0 0 3px;
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

const ChildrenWrap = styled.div<ChildrenWrapProps>`
  /* border: solid 1px purple; */
  white-space: nowrap;
  color: ${({ isChildrenExists, color }) => {
    if (isChildrenExists) {
      return null
    }

    return color
  }};
`

const EndIconWrap = styled.div`
  /* border: solid 1px red; */
  margin: 0 0 0 5px;
  display: flex;
`

const LoadingWrap = styled.div`
  /* border: solid 1px red; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const S = {
  Container,
  Content,
  Loading,
  StartIconWrap,
  LabelWrap,
  ChildrenWrap,
  EndIconWrap,
  LoadingWrap,
}

export default S
