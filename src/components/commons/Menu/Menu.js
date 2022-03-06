import React from 'react'
import { Logo } from '../../theme/Logo'
import { MenuWrapper } from './styles/MenuWrapper'

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
        {links.map((item)=>{
          return(
            <li>
              <a href={item.url}>{item.texto}</a>
            </li>
          )
        })}
      </MenuWrapper.centralSide>
      <MenuWrapper.RightSide>
        <button>
          entrar
        </button>
        <button>
          cadastrar
        </button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}