import React from 'react'
import { useSelector } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'

import darkTheme from 'common/themes/darkTheme'
import defaultTheme from 'common/themes/defaultTheme'

import HomePage from 'pages/HomePage'
import TeacherPage from 'pages/TeacherPage'

import { history } from './store'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const RootWrapper = styled.div`
    height: 100%;
    background: ${properties => properties.theme.colors.background};
`

const Routes: React.FC = () => {
    const switchTheme = useSelector((state: RootStateWithReducers) => state.teachers.switchTheme)
    return (
        <ThemeProvider theme={switchTheme ? darkTheme : defaultTheme}>
            <RootWrapper>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/teacher-app">
                            <TeacherPage />
                        </Route>
                    </Switch>
                </ConnectedRouter>
            </RootWrapper>
        </ThemeProvider>
    )
}

export default Routes
