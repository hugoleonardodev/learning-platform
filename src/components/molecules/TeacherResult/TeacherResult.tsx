import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'

import { teacherClearCurrentAnswers, teacherUpdateCompletedLessons } from 'store/actions/teachersActions'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

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
    console.log(lessonPosition)

    const { videoQuestions } = useSelector(
        (state: RootStateWithReducers) => state.teachers.teacherLessons[lessonPosition - 1],
    )

    const handleIsAproved = () => {
        console.log(lessonPosition - 1 === videoQuestions.length)
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
        <section>
            {teacherIsAproved ? (
                <div>
                    <h4>Aprovado!</h4>
                    <p>Você será direcionado para o próximo treinamento.</p>
                    <button onClick={handleIsAproved}>OK</button>
                </div>
            ) : (
                <div>
                    <h4>Reprovado.</h4>
                    <p>Você terá de repetir treinamento.</p>
                    <button onClick={handleNotAproved}>OK</button>
                </div>
            )}
        </section>
    )
}

export default TeacherResult
