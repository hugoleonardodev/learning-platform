import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import counterReducer from './counterReducer'
import quotesDataReducer from './quotesDataReducer'
import teachersDataReducer from './teachersDataReducer'
import videoPlayerDataReducer from './videoPlayerDataReducer'

const rootReducer = (history: History<unknown>): Reducer =>
    combineReducers({
        counter: counterReducer,
        quotes: quotesDataReducer,
        teachers: teachersDataReducer,
        videoPlayer: videoPlayerDataReducer,
        router: connectRouter(history),
    })

export default rootReducer
