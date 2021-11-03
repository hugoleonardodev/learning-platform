import { ReactPlayerDataState } from 'store/reducers/videoPlayerDataReducer'
import { Quote } from './quotesDataTypes'
import { TeacherDataState } from './teachersDataTypes'

export interface QuoteData {
    data: Quote[]
}

export interface RootStateWithReducers {
    quotes: QuoteData
    teachers: TeacherDataState
    videoPlayer: ReactPlayerDataState
    router: History
}
