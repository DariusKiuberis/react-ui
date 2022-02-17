import React from 'react'
import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import Settings from '../../../../../mocks/svg/Settings'

import { argTypes } from '../argTypes'

export default {
  title: 'Components/Atoms/Button/Loading',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export const LoadingAll = (args: any) => (
  <Button
    {...args}
    loading={true}
    // loadingIcon={<div>custom loading icon</div>}
    startIcon={<Settings fill={'tomato'} />}
    label="Click Me!"
    endIcon={<Settings fill={'tomato'} />}
    // loadingIcon={
    //   <Settings
    //     fill={'green'}
    //     //  height={50}
    //     //   width={50}
    //   />
    // }
  />
)
