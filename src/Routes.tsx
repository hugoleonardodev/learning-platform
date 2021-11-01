import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
// import { ConnectedRouter } from 'connected-react-router'

import { history } from './store'

import HomePage from 'pages/HomePage'
import TeacherPage from 'pages/TeacherPage'

const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/teacher-app">
                    <TeacherPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
