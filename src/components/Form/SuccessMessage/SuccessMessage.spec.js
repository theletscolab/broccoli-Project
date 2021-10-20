import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'
import SuccessMessage from './index'
import { ModalProvider } from '../../../contexts/modalContext'
import Modal from '../../../components/Modal'

describe('components > Form > SuccessMessage', () => {
  let component

  describe('with defaults', () => {
    beforeAll(() => {
      component = render(<SuccessMessage />, {
        wrapper: ({ children }) => {
          return (
            <ThemeProvider theme={theme}>
              <ModalProvider>
                <Modal />
                {children}{' '}
              </ModalProvider>
            </ThemeProvider>
          )
        }
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })
})
