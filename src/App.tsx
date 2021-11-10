import styled, { ThemeProvider } from 'styled-components'
import React from 'react'
import { Provider, useSelector } from 'react-redux'

import store from './store'

import Routes from './Routes'

import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

import darkTheme from 'common/themes/darkTheme'
// import defaultTheme from 'common/themes/defaultTheme'
import goodContrastTheme from 'common/themes/goodContrastTheme'

const RootWrapper = styled.div`
    background: ${properties => properties.theme.colors.background.light};
    color: ${properties => properties.theme.colors.text.light};
`
import './App.scss'

const App: React.FC = () => {
    const { switchTheme } = useSelector((state: RootStateWithReducers) => state.teachers)
    return (
        <Provider store={store}>
            <ThemeProvider theme={switchTheme ? darkTheme : goodContrastTheme}>
                <RootWrapper>
                    <Routes />
                </RootWrapper>
            </ThemeProvider>
        </Provider>
    )
}

export default App
