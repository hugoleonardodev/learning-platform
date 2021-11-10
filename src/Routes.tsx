import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import React from 'react'

const HomePage = React.lazy(() => import('pages/HomePage'))
const TeacherPage = React.lazy(() => import('pages/TeacherPage'))

import { history } from './store'

const Routes: React.FC = () => {
    return (
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
    )
}

export default Routes
