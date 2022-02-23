import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Label',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const LabelWithStyleContent = (args: any) => (
  <Button
    {...args}
    styleContent={{ color: 'aqua' }}
    label={'Text'}
    variant={'text'}
  />
)

export const LabelWithLabelColor = (args: any) => (
  <Button {...args} label={'Text'} labelColor={'orange'} variant={'text'} />
)

export const LongText = (args: any) => (
  <Button
    {...args}
    label={
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  />
)
