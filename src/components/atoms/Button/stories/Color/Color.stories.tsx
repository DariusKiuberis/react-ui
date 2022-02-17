import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'

import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Color',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const ColorPrimary = (args: any) => (
  <Button {...args} label={'Primary'} variant={'contained'} color={'primary'} />
)

export const ColorSecondary = (args: any) => (
  <Button
    {...args}
    label={'Secondary'}
    variant={'contained'}
    color={'secondary'}
  />
)

export const ColorSuccess = (args: any) => (
  <Button {...args} label={'Success'} variant={'contained'} color={'success'} />
)

export const ColorError = (args: any) => (
  <Button {...args} label={'Error'} variant={'contained'} color={'error'} />
)

export const ColorInfo = (args: any) => (
  <Button {...args} label={'Info'} variant={'contained'} color={'info'} />
)

export const ColorWarning = (args: any) => (
  <Button {...args} label={'Warning'} variant={'contained'} color={'warning'} />
)
