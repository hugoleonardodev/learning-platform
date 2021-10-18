/**
 * Counter Action types
 * @INCREMENT increments counter by one
 * @DECREMENT decrements counter by one
 */

export enum CounterActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

/**
 * Counter Data types
 * @counter : state number counter readonly
 */

export interface CounterState {
    counter: number
}
