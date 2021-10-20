import React from 'react'
import { ModalContext } from '../../contexts/modalContext'
import { ModalOverlay, ModalStyled, ModalCloseBtn } from './styled'

const Modal = () => {
  let { modalContent, handleModal, modal } = React.useContext(ModalContext)
  return (
    modal && (
      <ModalOverlay modal={modal}>
        <ModalStyled>
          <ModalCloseBtn onClick={() => handleModal()}>x</ModalCloseBtn>
          {modalContent}
        </ModalStyled>
      </ModalOverlay>
    )
  )
}

export default Modal
