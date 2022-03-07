import React from 'react'
import { Logo } from '../../theme/Logo'
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
                <a href={link.url}>{item.texto}</a>
              </MenuLI>
            )
          })}
        </MenuUL>
      </MenuWrapper.centralSide>
      <MenuWrapper.RightSide>
        <Button ghost>
          entrar
        </Button>
        <Button>
          cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}