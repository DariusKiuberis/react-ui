import React from 'react'
import { Button } from '../Button'
import Settings from '../../../../mocks/svg/Settings'

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

export const Disabled = (args: any) => (
  <Button
    {...args}
    disabled
    onClick={() => console.log('Clicked button!')}
    startIcon={<Settings fill={'tomato'} />}
    label={'LABEL'}
    endIcon={<Settings fill={'tomato'} />}
  />
)

export const Loading = (args: any) => (
  <Button
    {...args}
    loading
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

export const Contained = (args: any) => (
  <Button {...args} label={'Contained'} variant={'contained'} />
)

export const Text = (args: any) => (
  <Button {...args} label={'Text'} variant={'text'} />
)

export const TextNoLabel = (args: any) => <Button {...args} variant={'text'} />

export const Children = (args: any) => (
  <Button {...args}>
    {/* <Settings style={{ backgroundColor: 'red' }} fill="green" height={17} /> */}
    <div>CHILDREN DIV</div>
  </Button>
)

export const CustomColor = (args: any) => <Button {...args} color={'tomato'} />

export const Outlined = (args: any) => <Button {...args} label={'Outlined'} />
