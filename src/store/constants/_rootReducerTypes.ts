import { ReactPlayerDataState } from 'store/reducers/videoPlayerDataReducer'
import { CounterState } from './counterTypes'
import { Quote } from './quotesDataTypes'
import { TeacherDataState } from './teachersDataTypes'

export interface QuoteData {
    data: Quote[]
}

export interface RootStateWithReducers {
    counter: CounterState
    quotes: QuoteData
    teachers: TeacherDataState
    videoPlayer: ReactPlayerDataState
    router: History
}
