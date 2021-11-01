import { BaseReactPlayerProps } from 'react-player/base'

import { ReactPlayerActionsCreators, ReactPlayerActionsTypes } from 'store/constants/videoPlayerDataTypes'

export type ReactPlayerDataState = BaseReactPlayerProps

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
