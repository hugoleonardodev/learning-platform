import { CounterState } from './counterTypes'
import { Quote } from './quotesDataTypes'

export interface QuoteData {
    data: Quote[]
}

export interface RootStateWithReducers {
    quotes: QuoteData
    counter: CounterState
    router: History
}
