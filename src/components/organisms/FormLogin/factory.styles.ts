import styled from 'styled-components'
import { Form, FormGroup, Label, Button, Row, Col, FormFeedback } from 'reactstrap'

export const FormLoginContainer = styled(Form)`
    padding: 16px 32px 0 32px;
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`

export const FormLoginTitle = styled.h4`
    margin-left: 14px;
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`

export const FormLoginInputContainer = styled.div`
    min-height: 80px;
    max-width: calc(132px + 26vw);
`

export const FormLoginLabel = styled(Label)`
    transform: translate(16px, 30px);
    transition: ease-in-out 0.15s;
    position: relative;
    color: ${properties => properties.theme.colors.grey.main};
    background: ${properties => properties.theme.colors.background};
`

export const FormLoginGroup = styled(FormGroup)`
    .is-valid + ${FormLoginLabel} {
        transform: translate(16px, -14px);
        font-size: 14px;
        background: ${properties => properties.theme.colors.background};
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
    .is-invalid + ${FormLoginLabel} {
        transform: translate(16px, -14px);
        font-size: 14px;
        background: ${properties => properties.theme.colors.background};
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.warning.main};
    }
`

export const FormLoginEmailInput = styled.input`
    z-index: 1;
    border-radius: 100px;
    margin-top: 24px;
    position: absolute;
    color: ${properties => properties.theme.colors.text};
    background: transparent;
    max-width: calc(132px + 26vw);
    &:focus {
        color: #212529;
        border-color: rgb(0 166 156 / 25%);
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &:focus + ${FormLoginLabel} {
        transform: translate(16px, 12px);
        position: absolute;
        z-index: 2;
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
`

export const FormLoginPasswordInput = styled.input`
    position: absolute;
    z-index: 1;
    border-radius: 100px;
    margin-top: 24px;
    color: ${properties => properties.theme.colors.text};
    background: transparent;
    max-width: calc(132px + 26vw);
    &:focus {
        color: #212529;
        background-color: #fff;
        border-color: rgb(0 166 156 / 25%);
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(0 166 156 / 25%);
    }
    &:focus + ${FormLoginLabel} {
        transform: translate(16px, 12px);
        position: absolute;
        z-index: 2;
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
    &:active + ${FormLoginLabel} {
        transform: translate(16px, 12px);
        position: absolute;
        z-index: 2;
        font-size: 14px;
        background: white;
        padding: 0 8px 0 8px;
        color: ${properties => properties.theme.colors.primary.main};
    }
`

export const FormLoginFeedback = styled(FormFeedback)`
    margin-left: 14px;
    color: ${properties => properties.theme.colors.warning.main};
    background: ${properties => properties.theme.colors.background};
`

export const FormLoginBtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    max-width: calc(132px + 26vw);
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`

export const ForgotPasswordLink = styled.a`
    text-decoration: none;
    margin-left: 14px;
    color: ${properties => properties.theme.colors.grey.light};
    background: ${properties => properties.theme.colors.background};
    cursor: pointer;
    &:hover {
        color: ${properties => properties.theme.colors.primary.main};
    }
`

export const FormLoginButton = styled(Button)`
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

export const FormLoginRow = styled(Row)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`

export const FormLoginCol = styled(Col)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`
