import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../../Button'

import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Type',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={
          {
            // border: 'solid 1px red',
            // margin: '3em',
          }
        }
      >
        <Story />
      </div>
    ),
  ],
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const TypeYes = (args: any) => (
  <Button {...args} label={'Text'} variant={'text'} />
)
