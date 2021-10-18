import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import counterReducer from './counterReducer'
import quotesDataReducer from './quotesDataReducer'

const rootReducer = (history: History<unknown>): Reducer =>
    combineReducers({
        counter: counterReducer,
        quotes: quotesDataReducer,
        router: connectRouter(history),
    })

export default rootReducer
