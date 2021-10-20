import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import { ModalProvider } from './contexts/modalContext'
import Main from './page/MainPage'
import theme from './theme'
import MainNav from './components/Header'
import Footer from './components/Footer'
import { GlobalStyles } from './theme/global'

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <MainNav />
        <ModalProvider>
          <Main />
        </ModalProvider>
        <Footer />
        <GlobalStyles />
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
