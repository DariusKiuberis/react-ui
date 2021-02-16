import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Darius/Button',
  component: Button

  // argTypes: {
  //   style: {
  //     description: 'Styling Button',
  //     table: {
  //       type: { summary: 'object' },
  //       defaultValue: { summary: '{}' }
  //     },
  //     control: {
  //       type: 'object'
  //     }
  //   }
  // }
}

const Template = (args) => (
  <Button onClick={action(console.log('gogogog'))} {...args} />
)

export const Default = Template.bind({})

// story 1
// export const Disabled = Template.bind({})
// Disabled.args = {
//   label: 'Button1'
// }
// Disabled.parameters = {
//   docs: {
//     source: {
//       code: 'Some custom string here'
//     }
//   }
// }
