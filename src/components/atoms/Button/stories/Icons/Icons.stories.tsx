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
    label="Label"
    endIcon={<Settings fill={'tomato'} />}
  >
    <div>CHILDREN</div>
  </Button>
)

export const StartIcon = (args: any) => (
  <Button {...args} startIcon={<Settings fill={'tomato'} />} />
)

export const EndIcon = (args: any) => (
  <Button {...args} endIcon={<Settings fill={'tomato'} />} />
)

export const TwoIcons = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    endIcon={<Settings fill={'tomato'} />}
  />
)

export const IconsWithLabel = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    label="Click Me!"
    endIcon={<Settings fill={'tomato'} />}
  ></Button>
)

export const IconsWithChildren = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    endIcon={<Settings fill={'tomato'} />}
  >
    <div>CHILDREN</div>
  </Button>
)

export const StartIconWithLabel = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    label="Click Me!"
  ></Button>
)

export const EndIconWithLabel = (args: any) => (
  <Button
    {...args}
    label="Click Me!"
    endIcon={<Settings fill={'tomato'} />}
  ></Button>
)

export const StartIconWithChildren = (args: any) => (
  <Button {...args} startIcon={<Settings fill={'tomato'} />}>
    <div>CHILDREN</div>
  </Button>
)

export const EndIconWithChildren = (args: any) => (
  <Button {...args} endIcon={<Settings fill={'tomato'} />}>
    <div>CHILDREN</div>
  </Button>
)
