import styled, { css } from "styled-components"

const ButtonGhost = css` //a funcao "css" serve apenas para mudar o highlight e o codigo ficar mais facil
  background: transparent;
  color: ${(props)=>{
    return props.theme.colors.secondary
  }};
`

const ButtonDefault = css` 
  color: white;
  background-color: ${(props)=>{
    return props.theme.colors.primary
  }};
`

export const Button = styled.button `
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${(props)=>{
    if(props.ghost){
      return ButtonGhost
    }
    return ButtonDefault
  }}
  &:hover,
  &:focus {
      opacity: .5;
  }
`