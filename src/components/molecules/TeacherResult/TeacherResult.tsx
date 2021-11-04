import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'

import { teacherClearCurrentAnswers, teacherUpdateCompletedLessons } from 'store/actions/teachersActions'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'
import { TeacherResultButton, TeacherResultText, TeacherResultTitle } from './factory.styles'

type TeacherResultProperties = {
    teacherIsAproved: boolean
}

const TeacherResult: React.FC<TeacherResultProperties> = ({ teacherIsAproved }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { path } = useRouteMatch()
    const pathArray = path.split('/')
    const lessonString = pathArray[pathArray.length - __TWO__]
    const lessonPosition = Number.parseInt(lessonString[lessonString.length - 1])

    const { videoQuestions } = useSelector(
        (state: RootStateWithReducers) => state.teachers.teacherLessons[lessonPosition - 1],
    )

    const handleIsAproved = () => {
        if (lessonPosition - 1 === videoQuestions.length) {
            dispatch(teacherClearCurrentAnswers())
            dispatch(teacherUpdateCompletedLessons(lessonString))
            return history.push(`/teacher-app/lessons/result`)
        }
        dispatch(teacherClearCurrentAnswers())
        dispatch(teacherUpdateCompletedLessons(lessonString))
        return history.push(`/teacher-app/lessons/lesson${lessonPosition + 1}`)
    }
    const handleNotAproved = () => {
        dispatch(teacherClearCurrentAnswers())
        history.push(`/teacher-app/lessons/lesson${lessonPosition}`)
    }
    return (
        <>
            {teacherIsAproved ? (
                <>
                    <TeacherResultTitle>Aprovado!</TeacherResultTitle>
                    <TeacherResultText>Você será direcionado para o próximo treinamento.</TeacherResultText>
                    <TeacherResultButton onClick={handleIsAproved}>OK</TeacherResultButton>
                </>
            ) : (
                <>
                    <TeacherResultTitle className="not-aproved">Reprovado.</TeacherResultTitle>
                    <TeacherResultText className="not-aproved">Você terá de repetir treinamento.</TeacherResultText>
                    <TeacherResultButton className="not-aproved" onClick={handleNotAproved}>
                        OK
                    </TeacherResultButton>
                </>
            )}
        </>
    )
}

export default TeacherResult
