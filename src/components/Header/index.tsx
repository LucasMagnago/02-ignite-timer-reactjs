import { HeaderContainer } from './styles.ts'
import { Timer, Scroll } from 'phosphor-react'

import logoIgnite from '../../assets/ignite-timer-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
