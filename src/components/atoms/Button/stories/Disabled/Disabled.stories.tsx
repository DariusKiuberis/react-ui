import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import Settings from '../../../../../mocks/svg/Settings'
import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Disabled',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const Disabled1 = (args: any) => (
  <Button
    {...args}
    disabled
    onClick={() => console.log('Clicked button!')}
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
  />
)
