import React from 'react'
import { Button } from '../Button'
import Settings from '../../../../mocks/svg/Settings'

export const Icons = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    endIcon={<Settings fill={'tomato'} />}
  />
)

export const IconsChildren = (args: any) => (
  <Button
    {...args}
    startIcon={<Settings fill={'tomato'} />}
    endIcon={<Settings fill={'tomato'} />}
  >
    <div>CHILDREN</div>
  </Button>
)

export const Disabled = (args: any) => (
  <Button
    {...args}
    disabled
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
  />
)
export const Button2 = (args: any) => (
  <Button style={{ backgroundColor: 'red' }} label={'darius'} {...args} />
)
export const Children = (args: any) => (
  <Button {...args} color={'blue'}>
    {/* <Settings style={{ backgroundColor: 'red' }} fill="green" height={17} /> */}
    {/* lalalala */}
  </Button>
)

export const Loading = (args: any) => (
  <Button {...args} disabled label={'LABEL'} loading />
)
