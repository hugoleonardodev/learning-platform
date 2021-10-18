// import { Reducer } from 'redux'
import { Quote, QuotesDataActionTypes } from '../constants/quotesDataTypes'

export interface QuotesDataState {
    data: Quote[]
}

export interface QuotesDataAction {
    type: string
    payload: Quote[]
}

const initialState = { data: [{ text: 'a', author: 'b' }] }

const quotesDataReducer = (state: QuotesDataState = initialState, action: QuotesDataAction): QuotesDataState => {
    switch (action.type) {
        case QuotesDataActionTypes.UPDATE_ALL:
            return { data: [...state.data, ...action.payload] }
        default:
            return state
    }
}

export default quotesDataReducer
