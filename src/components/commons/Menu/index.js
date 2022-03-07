import React from 'react'
import { Logo } from '../../../theme/Logo'
import { Button } from '../Button'
import { MenuLI, MenuUL, MenuWrapper } from './styles/MenuWrapper'

export default function Menu(){
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
        <MenuUL>
          {links.map((link)=>{
            return(
              <MenuLI key={link.texto}>
                <a href={link.url}>{link.texto}</a>
              </MenuLI>
            )
          })}
        </MenuUL>
      </MenuWrapper.centralSide>
      <MenuWrapper.RightSide>
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