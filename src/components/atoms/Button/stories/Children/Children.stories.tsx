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

export const ChildrenWithOneElement = (args: any) => (
  <Button {...args}>
    {/* <Settings style={{ backgroundColor: 'red' }} fill="green" height={17} /> */}
    <div
      style={{
        border: 'solid red 1px',
      }}
    >
      CHILDREN DIV
    </div>
  </Button>
)

export const ChildrenWithTwoElements = (args: any) => (
  <Button {...args}>
    <div
      style={{
        border: 'solid red 1px',
      }}
    >
      CHILDREN ONE
    </div>
    <div
      style={{
        border: 'solid red 1px',
      }}
    >
      CHILDREN TWO
    </div>
  </Button>
)
