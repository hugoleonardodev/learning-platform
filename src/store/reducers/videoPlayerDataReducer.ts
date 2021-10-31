import { BaseReactPlayerProps, SourceProps } from 'react-player/base'

export type ReactPlayerDataState = BaseReactPlayerProps
// import { Reducer } from 'redux'
const initialState: ReactPlayerDataState = {
    url: 'https://www.youtube.com/watch?v=iDT2128CWoM',
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1,
    loop: false,
}

export enum ReactPlayerActionsTypes {
    REACT_PLAYER_START = 'REACT_PLAYER_START',
    REACT_PLAYER_STOP = 'REACT_PLAYER_STOP',
    REACT_PLAYER_SET_URL = 'REACT_PLAYER_SET_URL',
    REACT_PLAYER_LOOP = 'REACT_PLAYER_LOOP',
}
export interface ReactPlayerStartAction {
    type: ReactPlayerActionsTypes.REACT_PLAYER_START
    payload: boolean
}
export interface ReactPlayerStopAction {
    type: ReactPlayerActionsTypes.REACT_PLAYER_STOP
    payload: boolean
}
export interface ReactPlayerSetUrlAction {
    type: ReactPlayerActionsTypes.REACT_PLAYER_SET_URL
    payload: string | string[] | SourceProps[] | MediaStream | undefined
}

export interface ReactPlayerLoopAction {
    type: ReactPlayerActionsTypes.REACT_PLAYER_LOOP
    payload: boolean
}

type ReactPlayerActionsCreators =
    | ReactPlayerStartAction
    | ReactPlayerStopAction
    | ReactPlayerSetUrlAction
    | ReactPlayerLoopAction

export const dispatchPlayVideo = (): ReactPlayerStartAction => ({
    type: ReactPlayerActionsTypes.REACT_PLAYER_START,
    payload: true,
})

export const dispatchStopVideo = (): ReactPlayerStopAction => ({
    type: ReactPlayerActionsTypes.REACT_PLAYER_STOP,
    payload: false,
})

export const dispatchSetUrlVideo = (
    urlFromQuestion: string | string[] | SourceProps[] | MediaStream | undefined,
): ReactPlayerSetUrlAction => ({
    type: ReactPlayerActionsTypes.REACT_PLAYER_SET_URL,
    payload: urlFromQuestion,
})

export const dispatchLoopVideo = (): ReactPlayerLoopAction => ({
    type: ReactPlayerActionsTypes.REACT_PLAYER_LOOP,
    payload: true,
})

const videoPlayerDataReducer = (
    state: ReactPlayerDataState = initialState,
    action: ReactPlayerActionsCreators,
): ReactPlayerDataState => {
    switch (action.type) {
        case ReactPlayerActionsTypes.REACT_PLAYER_START:
            return {
                ...state,
                playing: action.payload,
            }
        case ReactPlayerActionsTypes.REACT_PLAYER_STOP:
            return {
                ...state,
                playing: action.payload,
            }
        case ReactPlayerActionsTypes.REACT_PLAYER_SET_URL:
            return {
                ...state,
                url: action.payload,
            }
        case ReactPlayerActionsTypes.REACT_PLAYER_LOOP:
            return {
                ...state,
                loop: action.payload,
            }
        default:
            return state
    }
}

export default videoPlayerDataReducer
