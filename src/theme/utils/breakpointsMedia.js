import theme from '../index'
import { css } from 'styled-components'

const { breakpoints } = theme //abstraindo objeto "breakpoints" de theme através de desestrutução.

export function breakpointsMedia(cssPorBreakpoints) {
  const breakpointsNames = Object.keys(cssPorBreakpoints) //Obj.keys pega somente as keys de um objeto
  return breakpointsNames.map((breakpointName) => {
    return (
      css`@media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssPorBreakpoints[breakpointName]}
      }`

    )
  })
}