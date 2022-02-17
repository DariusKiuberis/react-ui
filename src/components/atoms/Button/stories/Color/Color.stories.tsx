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

export const ColorWithVariantText = (args: any) => (
  <Button {...args} color={'tomato'} />
)

export const ColorWithVariantContained = (args: any) => (
  <Button {...args} variant={'contained'} color={'tomato'} />
)

export const ColorWithVariantUpload = (args: any) => (
  <Button {...args} variant={'upload'} color={'tomato'} />
)
