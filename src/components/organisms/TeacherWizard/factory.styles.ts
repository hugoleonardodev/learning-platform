import styled from 'styled-components'
import { Button } from 'reactstrap'

export const WizardStepForm = styled.form``

export const WizardStepTitle = styled.h2``

export const WizardStepQuestion = styled.h3`
    margin: 32px 0;
`

export const WizarStepAnswersContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const WizardStepAnswerLabel = styled.label`
    margin: 16px 0;
    cursor: pointer;
    &:hover {
        color: ${properties => properties.theme.colors.primary.main};
    }
`

export const WizardStepAnswerInput = styled.input`
    margin-right: 16px;
    cursor: pointer;
    &:checked {
        background-color: ${properties => properties.theme.colors.primary.main};
        border-color: ${properties => properties.theme.colors.primary.main};
    }
`

export const WizardStepFormButton = styled(Button)`
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
