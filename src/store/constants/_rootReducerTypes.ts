import { ReactPlayerDataState } from 'store/reducers/videoPlayerDataReducer'
import { TeacherDataState } from 'store/constants/teachersDataTypes'
import { Quote } from './quotesDataTypes'

export interface QuoteData {
    data: Quote[]
}

export interface RootStateWithReducers {
    quotes: QuoteData
    teachers: TeacherDataState
    videoPlayer: ReactPlayerDataState
    router: History
}
