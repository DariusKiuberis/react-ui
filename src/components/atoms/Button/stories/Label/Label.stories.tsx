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

export const TextNoLabel = (args: any) => <Button {...args} variant={'text'} />
