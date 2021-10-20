import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import theme from '../theme'

const Wrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { Wrapper  }
