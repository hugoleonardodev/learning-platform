import { Asserts } from 'yup'
import { useForm } from 'react-hook-form'
import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'

import {
    WizardStepAnswerInput,
    WizardStepAnswerLabel,
    WizardStepForm,
    WizardStepFormButton,
    WizardStepQuestion,
    WizardStepTitle,
    WizarStepAnswersContainer,
} from './factory.styles'

import questionsSchema from 'common/validators/questionsSchema'

import { teacherAnsweringQuestion } from 'store/actions/teachersActions'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

type TFormData = Asserts<typeof questionsSchema>

type WizardStepProperties = {
    nextStep: string
    currentQuestion: number
}

const WizardStep: React.FC<WizardStepProperties> = ({ nextStep, currentQuestion }) => {
    const { register, formState, handleSubmit } = useForm<TFormData>({
        mode: 'all',
        resolver: yupResolver(questionsSchema),
    })

    const { errors, dirtyFields } = formState

    const questionOneFieldHasError = !!errors.question
    const questionOneFieldIsDirty = dirtyFields.question

    const submitButtonIsDisabled = !questionOneFieldHasError && questionOneFieldIsDirty

    const dispatch = useDispatch()

    const history = useHistory()

    const teacherLessons = useSelector((state: RootStateWithReducers) => state.teachers.teacherLessons)

    const onSubmit = (data: TFormData) => {
        dispatch(teacherAnsweringQuestion(data.question))
        history.push(nextStep)
    }

    const loacationPath = window.location.pathname
    const splitedLocationPath = loacationPath.split('/')
    const lessonPathString = splitedLocationPath[splitedLocationPath.length - __TWO__]

    const lessonPosition = Number.parseInt(lessonPathString[lessonPathString.length - 1])

    const { videoQuestions } = teacherLessons[lessonPosition - 1]

    return (
        <WizardStepForm onSubmit={handleSubmit(onSubmit)}>
            <WizardStepTitle>{`Questão ${currentQuestion + 1}`}</WizardStepTitle>
            <WizardStepQuestion>{videoQuestions[currentQuestion].question}</WizardStepQuestion>
            <WizarStepAnswersContainer
                key={videoQuestions[currentQuestion].question}
                className="form-questions-section"
            >
                {videoQuestions[currentQuestion].answers.map((answer, index) => (
                    <WizardStepAnswerLabel key={answer} htmlFor={answer}>
                        <WizardStepAnswerInput
                            type="radio"
                            id={answer}
                            value={index.toString()}
                            className="form-check-input"
                            {...register('question')}
                        />
                        {answer}
                    </WizardStepAnswerLabel>
                ))}
            </WizarStepAnswersContainer>
            <WizardStepFormButton type="submit" disabled={!submitButtonIsDisabled}>
                Responder questão
            </WizardStepFormButton>
        </WizardStepForm>
    )
}

export default WizardStep
