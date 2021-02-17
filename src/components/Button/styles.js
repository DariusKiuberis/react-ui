import styled from 'styled-components'
import { colors } from '../../stylesheets/styles/colors'

const { blue } = colors

const handleWidth = (props) => {
  return props.fullWidth ? '100%' : 'auto'
}

//@todo hover and active colors make changeble
export const ButtonStyled = styled.button.attrs((props) => ({
  activeBgColor: props.disabled === true || props.active === false ? "" : blue[9],
  disabledBackground: props.disabledBackground,
  disabledColor: props.disabledColor,
  color: props.color,
  hoverBgColor: props.hover === true ? blue[7] : props.backgroundColor,
  size: props.size
}))`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => handleWidth(props)};
  font-size: ${(props) => props.size};
  padding: 0.25em 1em;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color:  ${(props) => props.hoverBgColor};
  }

  &:disabled{
   background-color: ${(props) => props.disabledBackground};
   color: ${(props) => props.disabledColor};
   cursor: not-allowed;
 }

  &:active {
  background-color: ${(props) => props.activeBgColor};
 }
`
// transition : ${(props) => console.log(111111, props)};
