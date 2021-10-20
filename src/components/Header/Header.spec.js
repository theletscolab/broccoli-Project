import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Header from './index'

describe('components > Header', () => {
  let component
  describe('with defaults', () => {
    beforeAll(() => {
      component = render(<Header />, {
        wrapper: ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })
})
