import styled from 'styled-components'
import { Row, Col, Button, Container, CardGroup, Card } from 'reactstrap'

export const TeacherStatusContainer = styled(Container)`
    margin-top: 24px;
`

export const TeacherStatusCardGroup = styled(CardGroup)``

export const TeacherStatusCard = styled(Card)``

export const TeacherStatusTitle = styled.h2`
    color: ${properties =>
        properties.theme.isDark ? properties.theme.colors.text.main : properties.theme.colors.grey.main};
`

export const TeacherStatusRow = styled(Row)``

export const TeacherStatusCol = styled(Col)`
    display: flex;
    justify-content: center;
`

export const ContinueTrainingButton = styled(Button)`
    min-width: 264px;
    border-radius: 100px;
    text-transform: uppercase;
    box-shadow: 0 1px 2px 0 rgba(0, 47, 38, 0.15), 0 1px 3px 1px rgba(0, 47, 38, 0.15);
    background-color: ${properties => properties.theme.colors.primary.main};
    border-color: ${properties => properties.theme.colors.primary.main};
    color: ${properties =>
        properties.theme.isDark ? properties.theme.colors.grey.main : properties.theme.colors.primary.text};
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
    @media only screen and (max-width: 769px) {
        margin: 32px 0;
    }
`
