import { Button } from 'reactstrap'
import styled from 'styled-components'

export const LessonsInstructionsSection = styled.section``

export const LessonsInstructionsWelcome = styled.div``

export const LessonsInstructionsWelcomeText = styled.span``

export const LessonsInstructionsHeading = styled.h2`
    margin: 24px 0;
`

export const LessonsInstructionsList = styled.ul``

export const LessonsInstructionsItem = styled.li``

export const LessonsInstructionsParagraph = styled.p``

export const LessonsInstructionsButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 32px 0;
    @media only screen and (max-width: 769px) {
        justify-content: center;
    }
`

export const LessonsInstructionsButton = styled(Button)`
    border-radius: 100px;
    min-width: 120px;
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
