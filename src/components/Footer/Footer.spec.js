import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Footer from './index'

describe('components > Footer', () => {
  let component
  describe('with defaults', () => {
    beforeAll(() => {
      component = render(<Footer />, {
        wrapper: ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })
})
