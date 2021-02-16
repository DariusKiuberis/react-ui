import styled from 'styled-components'

export const ButtonStyled = styled.button.attrs(props => ({
    // we can define static props
    type: "text",

    test: "1.5em",
    // or we can define dynamic ones
    size: props.size || "17em",
}))`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  display: ${props => console.log(2222222, props.test)};
  font-size: ${props => props.test};
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    color: grey;
  }
`;




console.log("file: styles.js -> line 10 -> ButtonStyled", ButtonStyled);