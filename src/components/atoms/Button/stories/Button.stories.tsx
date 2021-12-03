import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../Button'
import { argTypes } from './argTypes'

export default {
  title: 'Components/Atoms/Button/Default',
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={
          {
            // border: 'solid 1px red',
            // width: '300px',
            // height: 50,
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

//👇 “template” of how args map to rendering
const Template: Story<Props> = (args) => <Button {...args} />

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({})
Default.args = {}
