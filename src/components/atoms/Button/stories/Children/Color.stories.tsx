import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Children',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const Children1 = (args: any) => (
  <Button {...args}>
    {/* <Settings style={{ backgroundColor: 'red' }} fill="green" height={17} /> */}
    <div>CHILDREN DIV</div>
  </Button>
)
