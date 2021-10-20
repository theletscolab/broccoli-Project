import React from 'react'
import { useModal } from '../hooks/useModal'
import Modal from '../components/Modal'
import { ModalContextStyled } from './styled'

let ModalContext
let { Provider } = (ModalContext = React.createContext())

let ModalProvider = ({ children }) => {
  let { modal, handleModal, openModal, closeModal, modalContent } = useModal()
  return (
    <ModalContextStyled>
      <Provider value={{ modal, handleModal, openModal, closeModal, modalContent }}>
        <Modal />
        {children}
      </Provider>
    </ModalContextStyled>
  )
}

export { ModalContext, ModalProvider }
