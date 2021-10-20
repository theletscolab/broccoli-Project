import React from 'react'
import { string } from 'prop-types'
import { StyledButton } from './styled'

const Button = ({title, ...props }) => {
  return <StyledButton {...props}>{title}</StyledButton>
}

Button.propTypes = {
  title: string.isRequired,
  size: string
}
Button.defaultProps = {
  title: 'Request an invite'
}

export default Button
