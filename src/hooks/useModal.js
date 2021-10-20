import { useState } from 'react'

export const useModal = () => {
  let [modal, setModal] = useState(false)
  let [modalContent, setModalContent] = useState('')

  let handleModal = (content = false) => {
    setModal(!modal)
    if (content) {
      setModalContent(content)
    }
  }

  let closeModal = (content = false) => {
    setModal(false)
    setModalContent(content)
  }

  let openModal = (content = false) => {
    setModal(true)
    if (content) {
      setModalContent(content)
    }
  }

  return { modal, handleModal, openModal, closeModal, modalContent }
}
