import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Copyright from './index'
import { useDate } from '../../utils/dates'
import { Wrapper } from '../../utils/test-wrapper'

describe('components > Copyright', () => {
  afterEach(cleanup)
  let component
  describe('with defaults', () => {
    const today = '2021-10-20T22:12:18.217Z'
    const year = useDate(today).getFullYear().toString()

    beforeAll(() => {
      component = render(<Copyright today={today} />, {
        wrapper: ({ children }) => <ThemeProvider theme={theme}> {children}</ThemeProvider>
      })
    })

    it('rendered without crashing', () => {
      expect(component.asFragment()).toMatchSnapshot()
    })
 
    it('check correct year', () => {
      const { container } = render(
        <Wrapper>
          <Copyright today={today} />
        </Wrapper>
      )
      expect(container.textContent).toMatch(year)
    })
  })
})
