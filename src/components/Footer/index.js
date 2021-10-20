import React from 'react'
import { StyledFooter } from './styled'
import Copyright from '../Copyright'

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright />
    </StyledFooter>
  )
}

Footer.displayName = 'Footer'

export default Footer
