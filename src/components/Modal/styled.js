import styled from 'styled-components/macro'

const ModalOverlay = styled.div`
  align-items: center;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.black50};
  display: flex;
  justify-content: center;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  height: ${({ modal }) => (modal ? 'auto' : 0)};
  width: ${({ modal }) => (modal ? 'auto' : 0)};
  opacity: ${({ modal }) => (modal ? 1 : 0)};
  transition: all 0.3s;
`

const ModalStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 100;
`

const ModalCloseBtn = styled.button`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors.grey700};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  line-height: 1;
  height: 32px;
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey200};
  }

  &:focus {
    outline: 2px dotted ${({ theme }) => theme.colors.grey700};
    outline-offset: 2px;
  }
`

export { ModalOverlay, ModalStyled, ModalCloseBtn }
