import styled, { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Provider as ReduxStoreProvider, useSelector } from 'react-redux'

import darkTheme from 'common/themes/darkTheme'
import goodContrastTheme from 'common/themes/goodContrastTheme'

import store, { history } from './store'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

import Routes from './Routes'

import './App.scss'

const App: React.FC = () => {
    return (
        <ReduxStoreProvider store={store}>
            <AppProviders>
                <Routes />
            </AppProviders>
        </ReduxStoreProvider>
    )
}

export default App

export const RootThemeWrapper = styled.div`
    background: ${({ theme }) => theme.colors.background.light};
    color: ${({ theme }) => theme.colors.text.light};
`

export const AppProviders: React.FC = ({ children }) => {
    const { switchTheme } = useSelector((state: RootStateWithReducers) => state.teachers)
    return (
        <ThemeProvider theme={switchTheme ? darkTheme : goodContrastTheme}>
            <ConnectedRouter history={history}>
                <RootThemeWrapper>{children}</RootThemeWrapper>
            </ConnectedRouter>
        </ThemeProvider>
    )
}
