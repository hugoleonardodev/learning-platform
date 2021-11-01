import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'

import {
    ForgotPasswordLink,
    FormLoginBtnsContainer,
    FormLoginButton,
    FormLoginContainer,
    FormLoginEmailInput,
    FormLoginFeedback,
    FormLoginGroup,
    FormLoginLabel,
    FormLoginTitle,
} from './factory.styles'

import loginSchema from 'common/validators/loginSchema'

import { teacherLogin } from 'store/actions/teachersActions'

import { FormLoginProperties, TFormData } from './FormLogin'

const ForgotPassword: React.FC<FormLoginProperties> = ({ setForgotPassword }) => {
    const { register, formState, handleSubmit } = useForm<TFormData>({
        mode: 'all',
        resolver: yupResolver(loginSchema),
    })

    const { errors, dirtyFields } = formState

    const emailFieldHasError = !!errors.email
    const emailFieldIsDirty = dirtyFields.email

    const submitButtonIsDisabled = emailFieldHasError

    const dispatch = useDispatch()

    const onSubmit = (data: TFormData) => {
        dispatch(teacherLogin(data.email))
    }

    const emailClasses = clsx(
        'form-control',
        { 'is-valid': emailFieldIsDirty && !emailFieldHasError },
        { 'is-invalid': emailFieldIsDirty && emailFieldHasError },
    )

    return (
        <FormLoginContainer onSubmit={handleSubmit(onSubmit)}>
            <FormLoginGroup>
                <FormLoginTitle>Esqueceu a senha</FormLoginTitle>
                <FormLoginEmailInput type="email" className={emailClasses} tabIndex={0} {...register('email')} />
                <FormLoginLabel htmlFor="email">E-mail</FormLoginLabel>
                {emailFieldHasError ? <FormLoginFeedback>E-mail inválido</FormLoginFeedback> : <div />}
            </FormLoginGroup>
            <FormLoginBtnsContainer>
                <ForgotPasswordLink onClick={() => setForgotPassword(false)}>
                    Voltar para tela de login
                </ForgotPasswordLink>
                <FormLoginButton type="submit" disabled={submitButtonIsDisabled}>
                    Resetar
                </FormLoginButton>
            </FormLoginBtnsContainer>
        </FormLoginContainer>
    )
}

export default ForgotPassword
