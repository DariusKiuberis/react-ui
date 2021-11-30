import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../Button'
import {
  Icons,
  IconsChildren,
  Disabled,
  Button2,
  Children,
  Loading,
} from './buttons'
import { argTypes } from './argTypes'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{
          // border: 'solid 1px red',
          margin: '3em',
          width: 100,
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes,
  parameters: {
    controls: { expanded: true },
  },
} as Meta

//👇 “template” of how args map to rendering
const Template: Story<Props> = (args) => <Button {...args} />

export { Icons, IconsChildren, Disabled, Button2, Children, Loading }

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})
Default.args = {}
