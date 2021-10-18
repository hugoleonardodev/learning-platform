import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { history } from './store'

import HomePage from 'pages/HomePage'
import WorksPage from 'pages/WorksPage'

const Routes: React.FC = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" exact={true} component={HomePage} />
            </Switch>
            <Switch>
                <Route path="/works" exact={true} component={WorksPage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Routes
