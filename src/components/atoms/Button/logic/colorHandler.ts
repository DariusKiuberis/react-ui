import {
  primary,
  secondary,
  success,
  error,
  info,
  warning,
} from '../../../../stylesheets/colors'

const colorHandler = (color: string | undefined) => {
  if (color === 'primary') {
    return primary
  }
  if (color === 'secondary') {
    return secondary
  }
  if (color === 'success') {
    return success
  }
  if (color === 'error') {
    return error
  }
  if (color === 'info') {
    return info
  }
  if (color === 'warning') {
    return warning
  }
  return color
}

export default colorHandler
