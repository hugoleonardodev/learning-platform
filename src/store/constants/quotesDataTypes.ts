/**
 * Quote with text and author from https://type.fit/api/quotes
 * @text    a quote from an (@author)
 * @author   author of the quote or unknown
 */

export interface Quote {
    text: string
    author: string
}

/**
 * Quotes Data types
 * @data an array of quotes from https://type.fit/api/quotes
 */

export interface QuoteData {
    data: Quote[]
}

/**
 * Quotes Data Action types
 * @UPDATE_ALL apdates all data quotes
 */

export enum QuotesDataActionTypes {
    UPDATE_ALL = 'UPDATE_ALL',
}
