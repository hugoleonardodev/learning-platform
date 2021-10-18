import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { Provider, RootStateOrAny } from 'react-redux'
import { createMemoryHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

// import store from 'store/index'
// import { history } from 'store/index'
import rootReducer from 'store/reducers/_rootReducer'
// import { Router } from 'react-router'
import { applyMiddleware, createStore, Reducer, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'

interface CustomRouteConfig {
    path: string
    history: ReturnType<typeof createMemoryHistory>
}

const defaultHistory = createMemoryHistory({ initialEntries: ['/'] })
const defaultRouteConfig = { path: '/', history: defaultHistory }

export const getMockedStore = (
    initialState?: Record<string, unknown>,
    customReducer?: Reducer,
    // customHistory: ReturnType<typeof createMemoryHistory>,
): Store => {
    if (!initialState || !customReducer) {
        return createStore(rootReducer(defaultHistory), applyMiddleware(thunkMiddleware))
    }

    return createStore(customReducer, initialState, applyMiddleware(thunkMiddleware))
}

export const RenderWithRouterAndStore = (
    component: React.ReactElement,
    routeConfigs: CustomRouteConfig = defaultRouteConfig,
    initialState?: RootStateOrAny,
    customReducer?: Reducer,
): Record<string, unknown> => {
    const route = routeConfigs.path || '/'
    const store = getMockedStore(initialState, customReducer)
    const history = routeConfigs.history || createMemoryHistory({ initialEntries: [route] })

    return {
        ...render(
            <Provider store={store}>
                <ConnectedRouter history={history}>{component}</ConnectedRouter>
            </Provider>,
        ),
        store,
        history,
    }
}
