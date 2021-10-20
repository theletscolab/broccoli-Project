import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Wrapper } from '../../utils/test-wrapper'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Button from './index'

describe('components > Button', () => {
  afterEach(cleanup)
  let component
  describe('Overall', () => {
    beforeAll(() => {
      component = render(<Button />, {
        wrapper: ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })

    it('check Button test', async () => {
      const { getByText } = render(
        <Wrapper>
          <Button title={'Send'}></Button>
        </Wrapper>
      )
      expect(getByText('Send')).toBeInTheDocument()
    })

    it('calls onClick when clicked upon', () => {
      const mockOnClick = jest.fn()
      const { getByText } = render(
        <Wrapper>
          <Button title={'Send'} onClick={mockOnClick}></Button>
        </Wrapper>
      )
      getByText('Send').click()
      expect(mockOnClick.mock.calls.length).toEqual(1)
    })
  })
})
