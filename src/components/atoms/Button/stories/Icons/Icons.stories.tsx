import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import { argTypes } from '../argTypes'
import Settings from '../../../../../mocks/svg/Settings'

export default {
  title: 'Components/Atoms/Button/Icons',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

// export { Contained, Text }

export const All = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    label="Click Me!"
    endIcon={<Settings fill={'tomato'} />}
  >
    <div>CHILDREN ALL</div>
  </Button>
)

export const Icons = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    endIcon={<Settings fill={'tomato'} />}
  />
)

export const IconsAndChildren = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    endIcon={<Settings fill={'tomato'} />}
  >
    <div>CHILDREN</div>
  </Button>
)
