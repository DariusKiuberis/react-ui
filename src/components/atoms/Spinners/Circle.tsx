import React, { FC, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'
import { grey } from '../../../stylesheets/colors'

interface SpinnerProps {
  color?: string
  size?: string | number
  sizeUnit?: string
}

const motion = () => keyframes`
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`

const Wrapper = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`

const SSpinner = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${(p) => `${p.size}${p.sizeUnit}`};
  height: ${(p) => `${p.size}${p.sizeUnit}`};
  margin: 6px;
  border-radius: 50%;
  background: ${(p) => p.color};
  animation: ${() => motion()} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string
  size?: string | number
  sizeUnit?: string
}

const Circle: FC<Props> = ({ color, size, sizeUnit }) => (
  <Wrapper>
    <SSpinner color={color} size={size} sizeUnit={sizeUnit} />
  </Wrapper>
)

Circle.defaultProps = {
  size: 20,
  color: grey,
  sizeUnit: 'px',
}

export default Circle
