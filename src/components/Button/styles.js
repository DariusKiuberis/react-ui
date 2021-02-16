import styled from 'styled-components'
// import {grey} from '../../stylesheets/styles/colors'

export const ButtonStyled = styled.button.attrs(props => ({
    // we can define static props
    type: "text",

    test: "1.5em",
    // or we can define dynamic ones
    size: props.size || "17em",
}))`
  background: ${props => props.primary ? "green" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: ${props => props.test};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    color: grey;
  }
`;
