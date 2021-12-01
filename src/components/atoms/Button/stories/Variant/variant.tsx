import React from 'react'
import { Button } from '../../Button'

export const Contained = (args: any) => (
  <Button {...args} label={'Contained'} variant={'contained'} />
)

export const Text = (args: any) => (
  <Button {...args} label={'Text'} variant={'text'} />
)
