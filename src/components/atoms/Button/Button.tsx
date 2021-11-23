import React, { FC, HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string
}

/**
 * A Button
 */
export const Button: FC<Props> = ({ label }) => {
  return <div>{label || `button label`}</div>
}
