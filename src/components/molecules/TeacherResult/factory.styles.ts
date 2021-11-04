import { Button } from 'reactstrap'
import styled from 'styled-components'

type TeacherResultProperties = {
    secondary?: boolean
}

export const TeacherResultTitle = styled.h4<TeacherResultProperties>``

export const TeacherResultText = styled.p<TeacherResultProperties>``

export const TeacherResultButton = styled(Button)<TeacherResultProperties>`
    border-radius: 100px;
    min-width: 60px;
    margin: 32px 0;
    text-transform: uppercase;
    box-shadow: 0 1px 2px 0 rgba(0, 47, 38, 0.15), 0 1px 3px 1px rgba(0, 47, 38, 0.15);
    background-color: ${properties => properties.theme.colors.primary.main};
    border-color: ${properties => properties.theme.colors.primary.main};
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.background};
    }
    &:hover {
        background-color: ${properties => properties.theme.colors.primary.dark};
        border-color: ${properties => properties.theme.colors.primary.dark};
    }
    &:focus {
        color: #fff;
        background-color: ${properties => properties.theme.colors.primary.dark};
        border-color: ${properties => properties.theme.colors.primary.dark};
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &:focus:active {
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &.is-active {
        background-color: ${properties => properties.theme.colors.primary.dark};
        border-color: ${properties => properties.theme.colors.primary.dark};
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &.not-aproved {
        background-color: ${properties => properties.theme.colors.secondary.dark};
        border-color: ${properties => properties.theme.colors.secondary.dark};
        box-shadow: 0 0 0 0.25rem rgb(155 055 055 / 25%);
    }
`
