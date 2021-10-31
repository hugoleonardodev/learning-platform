import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { Asserts } from 'yup'
import clsx from 'clsx'

import {
    ForgotPasswordLink,
    FormLoginBtnsContainer,
    FormLoginButton,
    FormLoginContainer,
    FormLoginEmailInput,
    FormLoginFeedback,
    FormLoginGroup,
    FormLoginLabel,
    FormLoginPasswordInput,
    FormLoginTitle,
} from './styles'

import loginSchema from 'common/validators/loginSchema'

import { teacherLogin } from 'store/actions/teachersActions'

export type TFormData = Asserts<typeof loginSchema>

export type FormLoginProperties = {
    setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>
}

const FormLogin: React.FC<FormLoginProperties> = ({ setForgotPassword }) => {
    const { register, formState, handleSubmit } = useForm<TFormData>({
        mode: 'all',
        resolver: yupResolver(loginSchema),
    })

    const { errors, dirtyFields } = formState

    const emailFieldHasError = !!errors.email
    const emailFieldIsDirty = dirtyFields.email

    const passwordFieldHasError = !!errors.password
    const passwordFieldIsDirty = dirtyFields.password

    const submitButtonIsDisabled = !emailFieldHasError && !passwordFieldHasError

    const dispatch = useDispatch()

    const [redirectToWelcomePage, setRedirectToWelcomePage] = React.useState(false)

    const onSubmit = (data: TFormData) => {
        dispatch(teacherLogin(data.email))
        return setRedirectToWelcomePage(true)
    }

    if (redirectToWelcomePage) {
        return <Redirect to="/teacher-welcome" />
    }

    const emailClasses = clsx(
        'form-control',
        { 'is-valid': emailFieldIsDirty && !emailFieldHasError },
        { 'is-invalid': emailFieldIsDirty && emailFieldHasError },
    )

    const passwordClasses = clsx(
        'form-control',
        { 'is-valid': passwordFieldIsDirty && !passwordFieldHasError },
        { 'is-invalid': passwordFieldIsDirty && passwordFieldHasError },
    )

    return (
        <FormLoginContainer onSubmit={handleSubmit(onSubmit)}>
            <FormLoginGroup>
                <FormLoginTitle>Login</FormLoginTitle>
                <FormLoginEmailInput type="email" className={emailClasses} {...register('email')} />
                <FormLoginLabel htmlFor="email">E-mail</FormLoginLabel>
                <FormLoginPasswordInput type="password" className={passwordClasses} {...register('password')} />
                <FormLoginLabel htmlFor="password">Senha</FormLoginLabel>
                {emailFieldHasError || passwordFieldHasError ? (
                    <FormLoginFeedback>E-mail e/ou Senha inválido(s)</FormLoginFeedback>
                ) : (
                    <div />
                )}
            </FormLoginGroup>
            <FormLoginBtnsContainer>
                <ForgotPasswordLink onClick={() => setForgotPassword(true)}>Esqueceu a senha?</ForgotPasswordLink>
                <FormLoginButton type="submit" disabled={!submitButtonIsDisabled}>
                    Login
                </FormLoginButton>
            </FormLoginBtnsContainer>
        </FormLoginContainer>
    )
}

export default FormLogin
