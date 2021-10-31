import styled from 'styled-components'
import { Form, FormGroup, Label, Button, Row, Col, FormFeedback } from 'reactstrap'
// import { Link } from 'react-router-dom'

export const FormLoginContainer = styled(Form)`
    padding: 16px 32px 0 32px;
`

export const FormLoginTitle = styled.h4`
    margin-left: 14px;
`
export const FormLoginLabel = styled(Label)`
    transform: translate(16px, -32px);
    color: grey;
    transition: ease-in-out 0.15s;
    position: absolute;
`

export const FormLoginGroup = styled(FormGroup)`
    .is-valid + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
    .is-invalid + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.warning.main};
    }
`

export const FormLoginEmailInput = styled.input`
    border-radius: 100px;
    margin-top: 24px;
    &:focus {
        color: #212529;
        background-color: #fff;
        border-color: rgb(0 166 156 / 25%);
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &:focus + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
    /* &:not([value='']) + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    } */
`

export const FormLoginPasswordInput = styled.input`
    border-radius: 100px;
    margin-top: 24px;
    &:focus {
        color: #212529;
        background-color: #fff;
        border-color: rgb(0 166 156 / 25%);
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &:focus + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
    /* &::after + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    } */
    /* &:not([value='']) + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    } */
    &:active + ${FormLoginLabel} {
        transform: translate(16px, -56px);
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
`

export const FormLoginFeedback = styled(FormFeedback)``

export const FormLoginBtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
`

export const ForgotPasswordLink = styled.a`
    text-decoration: none;
    margin-left: 14px;
    color: #6c757d;
    cursor: pointer;
    &:hover {
        color: #00a88e;
    }
`

export const FormLoginButton = styled(Button)`
    border-radius: 100px;
    min-width: 120px;
    text-transform: uppercase;
    box-shadow: 0 1px 2px 0 rgba(0, 47, 38, 0.15), 0 1px 3px 1px rgba(0, 47, 38, 0.15);
    background-color: #00a88e;
    border-color: #00a88e;
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

export const FormLoginRow = styled(Row)``

export const FormLoginCol = styled(Col)``
