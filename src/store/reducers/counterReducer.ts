// import { Reducer } from 'redux'
import { Reducer } from 'redux'
import { CounterActionTypes } from '../constants/counterTypes'

type CounterState = { counter: number }

type CounterAction = {
    type: string
    payload: number
}

const initialState = { counter: 0 }

const counterReducer: Reducer<CounterState, CounterAction> = (state = initialState, action): CounterState => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return { counter: state.counter + 1 }
        case CounterActionTypes.DECREMENT:
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

export default counterReducer
