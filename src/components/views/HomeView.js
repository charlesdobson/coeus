import React from 'react'
import styled, { withTheme } from 'styled-components'

const HomeViewWrapper = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.blue6};
`

const HomeView = ({ theme }) => {
    return (
        <HomeViewWrapper>
            HomeView
        </HomeViewWrapper>
    )
}

export default withTheme(HomeView)