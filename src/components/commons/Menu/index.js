import { Logo } from '../../../theme/Logo'
import { Button } from '../Button'
import { MenuWrapper } from './styles/MenuWrapper'
import {LogoThemeLight} from '../../../theme/LogoThemeLight'
import {LogoThemeDark} from '../../../theme/LogoThemeDark'
import { useState } from 'react'
import Text from '../../foundation/Text'

export default function Menu(){
  const [icone, ToggleIcone] = useState(false)

  const links = [
    {
      texto: 'Home',
      url: '/'
    },
    {
      texto: 'Perguntas Frequentes',
      url: '/faq'
    },
    {
      texto: 'Sobre',
      url: '/sobre'
    }
  ]

  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.centralSide>    
        {links.map((link)=>{
          return(
            <li key={link.texto}>
              <Text tag="a" variant="smallestException" href={link.url}>{link.texto}</Text>
            </li>
          )
        })}     
      </MenuWrapper.centralSide>
      <MenuWrapper.RightSide>
        
        {/* BOTAO PARA TROCA DE TEMA, AINDA SEM A FUNCIONALIDADE */}

        {/* <Button ghost onClick={() => ToggleIcone(!icone)}>
          {icone ? <LogoThemeLight /> : <LogoThemeDark />}  
        </Button> */}

        <Button ghost variant="secondary.main">
          entrar
        </Button>
        <Button variant="primary.main">
          cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}