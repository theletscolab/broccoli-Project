import React from 'react'
import PropTypes from 'prop-types'
import { StyledLogo } from './styled'

const Logo = ({ logoText, logoHref }) => <StyledLogo href={logoHref}>{logoText}</StyledLogo>

Logo.propTypes = {
  logoText: PropTypes.string,
  logoHref: PropTypes.string
}

Logo.defaultProps = {
  logoText: 'Broccoli & Co.',
  logoHref: '/'
}

export default Logo
