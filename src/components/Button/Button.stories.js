import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Darius/Button',
  component: Button,

  argTypes: {
    label: {
      type: { required: false },
      defaultValue: 'Add name here ..',
      description: 'Button label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' }
      },
      control: {
        type: 'text'
      }
    },

    backgroundColor: {
      name: 'backgroundColor',
      type: { required: false },
      description: 'Button Background Color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' }
      },
      control: 'color'
    },

    disabled: {
      // type: { name: 'boolean', required: false },
      description: 'Disable Button',
      table: {
        type: { summary: 'boolean' }
        // defaultValue: { summary: 'false' },
      },
      control: 'boolean'
    },

    style: {
      description: 'Styling Button',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' }
      },
      control: {
        type: 'object'
      }
    },

    size: {
      description: 'Button size',
      table: {
        category: 'Sizes',
        type: { summary: 'string' }
      },
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    }

    // onClick: { action: 'clicked' },
  }

  // args: {
  //   // style: { },
  //   disabled: false
  // },
}

const Template = (args) => (
  <Button onClick={action(console.log('gogogog'))} {...args} />
)

// story basic
export const Default = Template.bind({})

Default.args = {
  // label: 'Button lalal',
}

// story 1
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button1'
}
Disabled.parameters = {
  docs: {
    source: {
      code: 'Some custom string here'
    }
  }
}

// // story 2
// export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button2',
// };
// Primary.parameters = {
//   // backgrounds: {
//   //   values: [
//   //     { name: 'red', value: '#f00' },
//   //     { name: 'green', value: '#0f0' },
//   //   ],
//   // },
//   actions: {
//     handles: ['click', 'click .btn'],
//   },
// };
