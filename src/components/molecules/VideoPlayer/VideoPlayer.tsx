import ReactPlayer from 'react-player'
import React from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import {
    VideoPlayerBackdrop,
    VideoPlayerButton,
    VideoPlayerButtonsContainer,
    VideoPlayerContainer,
    VideoPlayerFinishedButtonsContainer,
    VideoPlayerFinishedLessonContainer,
} from './factory.styles'

import { ReactComponent as PlayIcon } from 'common/assets/play.svg'
import { ReactComponent as PauseIcon } from 'common/assets/pause.svg'

import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'
import { dispatchPlayVideo, dispatchStopVideo } from 'store/actions/videoPayerActions'
// import { teacherStartQuiz } from 'store/actions/teachersActions'

interface VideoProgressState {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
}

const VideoPlayer: React.FC = () => {
    const videoPlayerState = useSelector((state: RootStateWithReducers) => state.videoPlayer)
    const teacherState = useSelector((state: RootStateWithReducers) => state.teachers)
    const { path } = useRouteMatch()
    const history = useHistory()
    const dispatch = useDispatch()
    const playerReference = React.useRef<ReactPlayer | null>(null)
    const [isLessonFinished, setIsLessonFinished] = React.useState(false)

    const { url, pip, playing, controls, light, loop, playbackRate, volume } = videoPlayerState

    const handleStartToPLayVideo = () => {
        return dispatch(dispatchPlayVideo())
    }

    const handleStopToPLayVideo = () => {
        return dispatch(dispatchStopVideo())
    }

    const handleStartQuiz = () => {
        return history.push(`${path}/question1`)
    }

    const handleRestartLesson = () => {
        dispatch(dispatchStopVideo())
        setTimeout(() => {
            setIsLessonFinished(false)
            return dispatch(dispatchPlayVideo())
        }, __ONE_SECOND__)
    }

    const handleVideoProgress = (state: VideoProgressState) => {
        const FULL_VIDEO_LENGTH = 0.95
        if (state.played >= FULL_VIDEO_LENGTH) {
            return setIsLessonFinished(true)
        }
    }

    const loacationPath = window.location.pathname
    const positionNumber = Number.parseInt(loacationPath[loacationPath.length - 1])
    const currentQuestion = teacherState.teacherLessons[positionNumber - 1]

    return (
        <VideoPlayerContainer>
            <VideoPlayerBackdrop />
            <ReactPlayer
                ref={playerReference}
                className="react-player"
                width="100%"
                height="100%"
                url={currentQuestion.videoPath || url}
                pip={pip}
                playing={playing}
                controls={controls}
                light={light}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={true}
                //   onReady={() => console.log('onReady')}
                //   onStart={() => console.log('onStart')}
                //   onPlay={this.handlePlay}
                //   onEnablePIP={this.handleEnablePIP}
                //   onDisablePIP={this.handleDisablePIP}
                //   onPause={this.handlePause}
                //   onBuffer={() => console.log('onBuffer')}
                //   onSeek={e => console.log('onSeek', e)}
                //   onEnded={this.handleEnded}
                //   onError={e => console.log('onError', e)}
                onProgress={handleVideoProgress}
                //   onDuration={this.handleDuration}
            />
            <VideoPlayerButtonsContainer>
                <VideoPlayerButton onClick={handleStartToPLayVideo}>
                    <PlayIcon />
                </VideoPlayerButton>
                <VideoPlayerButton onClick={handleStopToPLayVideo}>
                    <PauseIcon />
                </VideoPlayerButton>
            </VideoPlayerButtonsContainer>
            {isLessonFinished && (
                <VideoPlayerFinishedLessonContainer>
                    <h2>Parabéns, você concluiu o treinamento 01.</h2>
                    <h2>Você deseja:</h2>
                    <VideoPlayerFinishedButtonsContainer>
                        <VideoPlayerButton onClick={handleRestartLesson}>Rever a lição</VideoPlayerButton>
                        <VideoPlayerButton onClick={handleStartQuiz}>Iniciar Questionário</VideoPlayerButton>
                    </VideoPlayerFinishedButtonsContainer>
                </VideoPlayerFinishedLessonContainer>
            )}
        </VideoPlayerContainer>
    )
}

export default VideoPlayer
