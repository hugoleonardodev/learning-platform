import { SourceProps } from 'react-player/base'

import {
    ReactPlayerActionsTypes,
    ReactPlayerLoopAction,
    ReactPlayerSetUrlAction,
    ReactPlayerStartAction,
    ReactPlayerStopAction,
} from 'store/constants/videoPlayerDataTypes'

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
