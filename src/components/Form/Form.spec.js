import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Form from './index'

describe('components > Form', () => {
  afterEach(cleanup)
  let component

  describe('with defaults', () => {
    const onSucess = jest.fn()
    beforeAll(() => {
      component = render(<Form onSuccess={onSucess} />, {
        wrapper: ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
  })
})
