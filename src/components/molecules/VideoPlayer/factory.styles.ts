import { Button } from 'reactstrap'
import styled from 'styled-components'

export const VideoPlayerContainer = styled.section`
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    position: relative;
    .react-player {
        left: 0;
        position: absolute;
        top: 0;
    }
`

export const VideoPlayerBackdrop = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1000;
`

export const VideoPlayerButtonsContainer = styled.div`
    position: absolute;
    margin-top: 32px;
    padding-bottom: 32px;
    & :nth-child(2) {
        margin-left: 20px;
    }
`

type VideoPlayerButtonProperties = {
    playagain: boolean | string
}

export const VideoPlayerButton = styled(Button)<VideoPlayerButtonProperties>`
    border-radius: 100px;
    min-width: 80px;
    text-transform: uppercase;
    box-shadow: 0 1px 2px 0 rgba(0, 47, 38, 0.15), 0 1px 3px 1px rgba(0, 47, 38, 0.15);
    background-color: ${properties =>
        properties.playagain === 'true'
            ? properties.theme.colors.secondary.main
            : properties.theme.colors.primary.main};
    border-color: ${properties =>
        properties.playagain === 'true'
            ? properties.theme.colors.secondary.main
            : properties.theme.colors.primary.main};
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.background};
    }
    &:hover {
        background-color: ${properties =>
            properties.playagain === 'true'
                ? properties.theme.colors.secondary.dark
                : properties.theme.colors.primary.dark};
        border-color: ${properties =>
            properties.playagain === 'true'
                ? properties.theme.colors.secondary.dark
                : properties.theme.colors.primary.dark};
    }
    &:focus {
        color: #fff;
        background-color: ${properties =>
            properties.playagain === 'true'
                ? properties.theme.colors.secondary.dark
                : properties.theme.colors.primary.dark};
        border-color: ${properties =>
            properties.playagain === 'true'
                ? properties.theme.colors.secondary.dark
                : properties.theme.colors.primary.dark};
        box-shadow: ${properties =>
            properties.playagain === 'true'
                ? '0 0 0 0.25rem rgb(155 055 055 / 25%)'
                : '0 0 0 0.25rem rgb(0 166 156 / 25%)'};
    }
    &:focus:active {
        box-shadow: ${properties =>
            properties.playagain === 'true'
                ? '0 0 0 0.25rem rgb(155 055 055 / 25%)'
                : '0 0 0 0.25rem rgb(0 166 156 / 25%)'};
    }
    &.is-active {
        background-color: ${properties => properties.theme.colors.secondary.dark};
        border-color: ${properties => properties.theme.colors.secondary.dark};
        box-shadow: ${properties =>
            properties.playagain === 'true'
                ? '0 0 0 0.25rem rgb(155 055 055 / 25%)'
                : '0 0 0 0.25rem rgb(0 166 156 / 25%)'};
    }
`

export const VideoPlayerFinishedLessonContainer = styled.div`
    position: absolute;
    transform: translateY(100px);
`

export const VideoPlayerFinishedButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;
    padding-top: 20px;
`
