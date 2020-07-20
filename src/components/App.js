import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/index'
import { theme } from '../styles/theme.js'
import HomeView from './views/HomeView'

const Wrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
`

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <HomeView />
            </Wrapper>
        </ThemeProvider>
    )
}

export default App