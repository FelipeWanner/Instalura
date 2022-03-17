import react from "react";
import styled, {css} from "styled-components";

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size:   ${({theme}) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({theme}) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({theme}) => theme.typographyVariants.paragraph1.lineHeight};
  `,

  smallestException: css`
    font-size:   ${({theme}) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({theme}) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({theme}) => theme.typographyVariants.smallestException.lineHeight};
  `,
}

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
`

export default function Text({tag, variant, children}){
  return(
    <TextBase
      variant={variant}
      as={tag}  //as dentro de um componente styled, muda a tag pré definida (que nesse caso é o span da linha 4)
    >
      {children}
    </TextBase>
  )
}

Text.defaultProps = { //serve para dar props default para a função, caso de ela não receber esses props quando for chamada
  tag: 'span',
  variant: 'paragraph1'
}