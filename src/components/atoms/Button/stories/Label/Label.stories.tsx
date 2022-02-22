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

export const TextWithStyleContent = (args: any) => (
  <Button
    {...args}
    styleContent={{ color: 'aqua' }}
    label={'Text'}
    variant={'text'}
  />
)

export const TextWithLabelColor = (args: any) => (
  <Button {...args} label={'Text'} labelColor={'orange'} variant={'text'} />
)
