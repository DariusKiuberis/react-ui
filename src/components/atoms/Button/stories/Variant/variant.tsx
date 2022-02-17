import React from 'react'
import { Button } from '../../Button'

export const Text = (args: any) => (
  <Button {...args} label={'Text'} variant={'text'} />
)

export const Contained = (args: any) => (
  <Button {...args} label={'Contained'} variant={'contained'} />
)

export const Upload = (args: any) => (
  <Button {...args} label={'Upload'} variant={'upload'} />
)
