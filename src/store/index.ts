import { createStore, applyMiddleware, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './reducers/_rootReducer'

export const history = createBrowserHistory()

function configureStore(): Store {
    const middlewares = [thunkMiddleware, routerMiddleware(history)]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer(history), composedEnhancers)

    return store
}

const store = configureStore()

// export type RootStore = ReturnType<typeof rootReducer>

export default store
