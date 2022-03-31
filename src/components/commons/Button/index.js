import styled, { css } from "styled-components"
import get from "lodash/get"
import theme from "../../../theme"
import { TextStyleVariantsMap } from "../../foundation/Text"
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia"
import propToStyle from "../../../theme/utils/propToStyle"

const ButtonGhost = css` //a funcao "css" serve apenas para mudar o highlight e o codigo ficar mais facil de ler
  background: transparent;
  color: ${(props)=>{
    return get(props.theme, `colors.${props.variant}.color`)
  }};
`

const ButtonDefault = css` 
  color: ${(props)=>{
    return get(props.theme, `colors.${props.variant}.contrastText`)
  }};
  background-color: ${(props)=>{
    return get(props.theme, `colors.${props.variant}.color`)
  }};
`

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  ${(props)=>{
    if(props.ghost){
      return ButtonGhost
    }
    return ButtonDefault
  }}
  border-radius: ${({theme})=> theme.borderRadius};

  transition: ${({theme})=> theme.transition};
  &:hover,
  &:focus {
      opacity: .5;
  }

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
    
  })}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`

