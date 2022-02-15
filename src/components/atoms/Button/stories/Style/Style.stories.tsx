import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Style',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const StyleWithFlexDirection = (args: any) => (
  <Button
    {...args}
    style={{ display: 'flow', flexDirection: 'column' }}
    // outlined
  >
    <div>CHILDREN ONE</div>
    <div>CHILDREN TWO</div>
    <div>CHILDREN THREE</div>
    <div>CHILDREN FOUR</div>
  </Button>
)
