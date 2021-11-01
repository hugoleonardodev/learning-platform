import { SourceProps } from 'react-player/base'

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

export type ReactPlayerActionsCreators =
    | ReactPlayerStartAction
    | ReactPlayerStopAction
    | ReactPlayerSetUrlAction
    | ReactPlayerLoopAction
