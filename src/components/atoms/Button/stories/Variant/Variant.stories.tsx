import { Meta } from '@storybook/react'
import { Button } from '../../Button'
import { argTypes } from '../argTypes'
import { Text, Contained, Upload } from './variant'

export default {
  title: 'Components/Atoms/Button/Variants',
  component: Button,
  argTypes,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
} as Meta

export { Text, Contained, Upload }
