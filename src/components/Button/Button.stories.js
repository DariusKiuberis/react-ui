import React from 'react'
import {action} from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Darius/ButtonDarius',
  component: Button,
  // argTypes: {
  //   // style: { border: 'solid 20px blue' },
  //   onClick: { action: 'clicked' },
  //   disabled: false,
  //   label: {
  //     name: 'label',
  //     type: { name: 'string', required: false },
  //     defaultValue: 'Hello',
  //     description: 'demo description',
  //     table: {
  //       type: { summary: 'string' },
  //       defaultValue: { summary: 'Hello' },
  //     },
  //     control: {
  //       type: 'text'
  //     }
  //   }
  // },
  args: {
    style: { },
    disabled: false
  },
}

const Template = (args) => <Button onClick={action(console.log("lalala"))} {...args} />

// story basic
export const Default = Template.bind({});

Default.args = {
  label: 'Button lalal',
};
Default.parameters = {
  // backgrounds: {
  //   values: [
  //     { name: 'red', value: '#f00' },
  //     { name: 'green', value: '#0f0' },
  //   ],
  // },

};

// story 1
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',

}

// story 2
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  // backgrounds: {
  //   values: [
  //     { name: 'red', value: '#f00' },
  //     { name: 'green', value: '#0f0' },
  //   ],
  // },
      actions: {
      handles: ['click', 'click .btn'],
    },
};