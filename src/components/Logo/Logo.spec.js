import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Logo from './index'

describe('components > Logo', () => {
  let component
  describe('with defaults', () => {
    beforeAll(() => {
      component = render(<Logo />, {
        wrapper: ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })
})
