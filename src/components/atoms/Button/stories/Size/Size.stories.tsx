import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'

import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Size',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const SizeSmall = (args: any) => (
  <Button {...args} label={'Small'} size={'small'} />
)

export const SizeMedium = (args: any) => (
  <Button {...args} label={'Medium'} size={'medium'} />
)

export const SizeLarge = (args: any) => (
  <Button {...args} label={'Large'} size={'large'} />
)

export const Width200pxString = (args: any) => (
  <Button {...args} label={'Width 300px String'} width={'300px'} />
)

export const Height100pxString = (args: any) => (
  <Button {...args} label={'Height 100px String'} height={'100px'} />
)

export const Width200pxNumber = (args: any) => (
  <Button {...args} label={'Width 300px Number'} width={300} />
)

export const Height100pxNumber = (args: any) => (
  <Button {...args} label={'Height 100px Number'} height={100} />
)
