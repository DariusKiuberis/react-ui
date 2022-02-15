import React, { FC, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

interface DualRingSpinnerProps {
  color?: string
  size?: string | number
  sizeUnit?: string
  width?: string | number
  height?: string | number
}

const motion = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const DualRingSpinner = styled.div<DualRingSpinnerProps>`
  /* border: solid 1px red; */
  display: inline-block;
  width: ${(p) => `${p.width}${p.sizeUnit}`};
  height: ${(p) => `${p.height}${p.sizeUnit}`};
  :after {
    content: ' ';
    display: block;
    width: ${(p) => `${p.size}${p.sizeUnit}`};
    height: ${(p) => `${p.size}${p.sizeUnit}`};
    margin: 1px;
    border-radius: 50%;
    border: 2px solid ${(p) => p.color};
    border-color: ${(p) => p.color} transparent ${(p) => p.color} transparent;
    animation: ${() => motion()} 1.2s linear infinite;
  }
`

interface DualRingProps extends HTMLAttributes<HTMLDivElement> {
  color?: string
  size?: string | number
  sizeUnit?: string
  width?: string | number
  height?: string | number
}

const DualRing: FC<DualRingProps> = ({
  color,
  size,
  sizeUnit,
  width,
  height,
}) => (
  <DualRingSpinner
    color={color}
    size={size}
    sizeUnit={sizeUnit}
    width={width}
    height={height}
  />
)

DualRing.defaultProps = {
  width: 16,
  height: 16,
  size: 10,
  color: 'grey',
  sizeUnit: 'px',
}

export default DualRing
