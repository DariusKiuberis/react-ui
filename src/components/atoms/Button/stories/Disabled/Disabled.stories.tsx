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

export const DisabledWithVariantText = (args: any) => (
  <Button
    {...args}
    disabled
    onClick={() => console.log('Clicked button!')}
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
  />
)

export const DisabledWithVariantContained = (args: any) => (
  <Button
    {...args}
    disabled
    onClick={() => console.log('Clicked button!')}
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
    variant={'contained'}
  />
)

export const DisabledWithVariantUpload = (args: any) => (
  <Button
    {...args}
    disabled
    onClick={() => console.log('Clicked button!')}
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
    variant={'upload'}
  />
)

export const DisabledWithAll = (args: any) => (
  <Button
    {...args}
    disabled
    onClick={() => console.log('Clicked button!')}
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
  >
    <div>Children One</div>
    <div>Children Two</div>
  </Button>
)
