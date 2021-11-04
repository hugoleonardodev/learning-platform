import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap'
import styled from 'styled-components'

export const TeacherFeedbackContainer = styled.div`
    .ProseMirror {
        border: 2px solid ${properties => properties.theme.colors.grey.light};
        border-radius: 4px;
        min-height: 200px;
        padding: 16px;
        &:hover {
            border-color: ${properties => properties.theme.colors.primary.light};
        }
        &:focus {
            border-color: ${properties => properties.theme.colors.primary.dark};
            box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
        }
        &:focus-visible {
            border: 2px solid ${properties => properties.theme.colors.primary.dark};
            outline: none;
        }
    }
`

export const TeacherFeedbackMenuButtonContainer = styled.div``

export const TeacherFeedbackButtonsToolbar = styled(ButtonToolbar)`
    justify-content: center;
`

export const TeacherFeedbackButtonGroup = styled(ButtonGroup)``

type TeacherFeedbackMenuButtonProperties = {
    isclearbutton: boolean
}

export const TeacherFeedbackMenuButton = styled(Button)<TeacherFeedbackMenuButtonProperties>`
    border-radius: 100px;
    min-width: 60px;
    margin: 32px 0;
    text-transform: uppercase;
    box-shadow: 0 1px 2px 0 rgba(0, 47, 38, 0.15), 0 1px 3px 1px rgba(0, 47, 38, 0.15);
    background-color: ${properties =>
        properties.isclearbutton ? properties.theme.colors.secondary.main : properties.theme.colors.primary.main};
    border-color: ${properties =>
        properties.isclearbutton ? properties.theme.colors.secondary.main : properties.theme.colors.primary.main};
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.background};
    }
    &:hover {
        background-color: ${properties =>
            properties.isclearbutton ? properties.theme.colors.secondary.dark : properties.theme.colors.primary.dark};
        border-color: ${properties =>
            properties.isclearbutton ? properties.theme.colors.secondary.dark : properties.theme.colors.primary.dark};
    }
    &:focus {
        color: #fff;
        background-color: ${properties =>
            properties.isclearbutton ? properties.theme.colors.secondary.dark : properties.theme.colors.primary.dark};
        border-color: ${properties =>
            properties.isclearbutton ? properties.theme.colors.secondary.dark : properties.theme.colors.primary.dark};
        box-shadow: ${properties =>
            properties.isclearbutton ? '0 0 0 0.25rem rgb(155 055 055 / 25%)' : '0 0 0 0.25rem rgb(0 166 156 / 25%)'};
    }
    &:focus:active {
        box-shadow: ${properties =>
            properties.isclearbutton ? '0 0 0 0.25rem rgb(155 055 055 / 25%)' : '0 0 0 0.25rem rgb(0 166 156 / 25%)'};
    }
    &.is-active {
        background-color: ${properties =>
            properties.isclearbutton ? properties.theme.colors.secondary.dark : properties.theme.colors.primary.dark};
        border-color: ${properties =>
            properties.isclearbutton ? properties.theme.colors.secondary.dark : properties.theme.colors.primary.dark};
        box-shadow: ${properties =>
            properties.isclearbutton ? '0 0 0 0.25rem rgb(155 055 055 / 25%)' : '0 0 0 0.25rem rgb(0 166 156 / 25%)'};
    }
`

export const TeacherFeedbackSubmitButton = styled(Button)`
    border-radius: 100px;
    min-width: 120px;
    margin: 32px 0;
    text-transform: uppercase;
    box-shadow: 0 1px 2px 0 rgba(0, 47, 38, 0.15), 0 1px 3px 1px rgba(0, 47, 38, 0.15);
    background-color: ${properties => properties.theme.colors.primary.main};
    border-color: ${properties => properties.theme.colors.primary.main};
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
`
