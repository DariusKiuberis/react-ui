import styled from 'styled-components'

interface ContainerProps {
  readonly isActive?: boolean
  disabled?: boolean
  outlined?: boolean
  color?: string
}

const Container = styled.button<ContainerProps>`
  border: ${(props) => {
    const { outlined } = props
    if (outlined) {
      return `solid 1px red`
    }
    return `solid 1px green`
  }};
  border-radius: 3px;
  min-height: 20px;
  min-width: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  background-color: ${(props) => {
    console.log('---> props', props)
    const { disabled, color } = props

    if (disabled) {
      return 'lightgrey'
    }
    if (color === 'primary') {
      return 'white'
    }
    if (color === 'success') {
      return 'rgb(46, 125, 50)'
    }
    if (color === 'error') {
      return 'rgba(211, 47, 47, 0.5)'
    }

    return 'white'
  }};

  :hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  }
`

const S = {
  Container,
}

export default S
