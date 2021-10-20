import React from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from '../../../contexts/modalContext'
import Button from '../../Button'
import { StyledSuccessMessage, MessageTitle, Message } from './styled'

const SuccessMessage = ({ formTitle, formMessage, formBtnTxt }) => {
  let { handleModal } = React.useContext(ModalContext)
  return (
    <StyledSuccessMessage>
      <MessageTitle>{formTitle}</MessageTitle>
      <Message>{formMessage}</Message>
      <Button title={formBtnTxt} onClick={() => handleModal()} />
    </StyledSuccessMessage>
  )
}

SuccessMessage.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formMessage: PropTypes.string.isRequired,
  formBtnTxt: PropTypes.string.isRequired
}

SuccessMessage.defaultProps = {
  formTitle: 'All done!',
  formMessage: 'You will be one of the first to experience Broccoli & Co. when we launch.',
  formBtnTxt: 'OK'
}

export default SuccessMessage
