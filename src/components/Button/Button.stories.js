import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Darius/Button',
  component: Button,

  parameters: {
    docs: {
      description: {
        component: '<b>Reusable Button component</b> <br/>'
      }
    }
  },

  argTypes: {
    backgroundColor: {
      control: {
        type: 'color'
      }
    },
    color: {
      control: {
        type: 'color'
      }
    },
    disabledBackground: {
      control: {
        type: 'color'
      }
    },
    disabledColor: {
      control: {
        type: 'color'
      }
    }
  }
}

const Template = (args) => (
  <Button onClick={action(console.log('gogogog'))} {...args} />
)

export const Default = Template.bind({})
