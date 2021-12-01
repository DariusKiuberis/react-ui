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

export const Size2 = (args: any) => (
  <Button {...args} label={'Text'} variant={'text'} />
)
