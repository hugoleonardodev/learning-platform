import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Asserts } from 'yup'

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

    const { videoQuestions } = teacherLessons[currentQuestion]

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>
                {`Questão ${currentQuestion + 1}`}
                {videoQuestions[lessonPosition - 1].question}
            </h2>
            <div key={videoQuestions[lessonPosition - 1].question} className="form-questions-section">
                {videoQuestions[lessonPosition - 1].answers.map((answer, index) => (
                    <label key={answer} htmlFor={answer}>
                        <input
                            type="radio"
                            id={answer}
                            value={index.toString()}
                            className="form-check-input"
                            {...register('question')}
                        />
                        {answer}
                    </label>
                ))}
            </div>
            <button type="submit" disabled={!submitButtonIsDisabled}>
                Responder questão
            </button>
        </form>
    )
}

export default WizardStep
