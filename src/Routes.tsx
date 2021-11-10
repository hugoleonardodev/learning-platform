import styled, { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'

import darkTheme from 'common/themes/darkTheme'
// import defaultTheme from 'common/themes/defaultTheme'
import goodContrastTheme from 'common/themes/goodContrastTheme'

// import HomePage from 'pages/HomePage'
// import TeacherPage from 'pages/TeacherPage'
const HomePage = React.lazy(() => import('pages/HomePage'))
const TeacherPage = React.lazy(() => import('pages/TeacherPage'))

import { history } from './store'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const RootWrapper = styled.div`
    background: ${properties => properties.theme.colors.background.light};
    color: ${properties => properties.theme.colors.text.light};
`

const Routes: React.FC = () => {
    const switchTheme = useSelector((state: RootStateWithReducers) => state.teachers.switchTheme)
    return (
        <ThemeProvider theme={switchTheme ? darkTheme : goodContrastTheme}>
            <RootWrapper>
                <React.Suspense fallback={<div>Carregando...</div>}>
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
                </React.Suspense>
            </RootWrapper>
        </ThemeProvider>
    )
}

export default Routes
