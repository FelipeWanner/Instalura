import { breakpointsMedia } from "./breakpointsMedia"
// funcao que converte um "propName" que nós passamos. Ela basicamente ele faz o retorno de um objeto aonde propName é 
// uma propriedade css (textAlign, border, margin, etc), e "props" tem todas as propriedades que passamos quando chamamos a
// funcao "Text" (que chama "textBase", onde "propToStyle" é chamado)
export default function propToStyle(propName) {
  return function(props){
    // console.log("chave propname",[propName])
    // console.log("chave props", props[propName])

    const propValue = props[propName] // pode receber string ou objeto, porém as propriedades css aceitam apenas strings,
                                      // então precisamos tratar isso com um if
    if(typeof propValue === "string"){
      return {
        [propName]: propValue
      }
    }
    if(typeof propValue === "object"){
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs
        },
        sm: {
          [propName]: propValue.sm
        },
        md: {
          [propName]: propValue.md
        },
        lg: {
          [propName]: propValue.lg
        },
        xl: {
          [propName]: propValue.xl
        },
      })
      
    }
  }
}