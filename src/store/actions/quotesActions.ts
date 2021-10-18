import { Dispatch } from 'redux'
import { Quote, QuotesDataActionTypes } from '../constants/quotesDataTypes'
import getQuote from 'services/api/getQuote'
import { QuotesDataAction } from '../reducers/quotesDataReducer'

export const updateAllQuotes = (quotes: Quote[]): QuotesDataAction => ({
    type: QuotesDataActionTypes.UPDATE_ALL,
    payload: quotes,
})

export const promiseThunkAction =
    () =>
    async (dispatch: Dispatch<QuotesDataAction>): Promise<void> => {
        const quotes = await getQuote()

        const STATUS_OK = 200

        if (quotes.status === STATUS_OK) {
            dispatch(updateAllQuotes(quotes.data))
        }
    }
