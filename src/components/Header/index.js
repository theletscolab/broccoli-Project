import React from 'react'
import Logo from '../Logo'
import { HeaderStyled } from './styled'

const Header = ({ ...props }) => (
  <HeaderStyled {...props}>
    <Logo />
  </HeaderStyled>
)

export default Header
