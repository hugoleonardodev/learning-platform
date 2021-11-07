import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'

import TeacherResult from 'components/molecules/TeacherResult'

import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const WizardResult: React.FC = () => {
    const { currentAnswers, teacherLessons } = useSelector((state: RootStateWithReducers) => state.teachers)
    const { path } = useRouteMatch()

    const pathArray = path.split('/')
    const lessonString = pathArray[pathArray.length - __TWO__]
    const lessonPosition = Number.parseInt(lessonString[lessonString.length - 1])
    const correctAnswers = teacherLessons[lessonPosition - 1].videoQuestions.map(({ correct }) => correct).sort()

    return (
        <>
            <h2>{`Lesson${lessonPosition}`} result</h2>
            <TeacherResult teacherIsAproved={currentAnswers.sort().join('') === correctAnswers.sort().join('')} />
        </>
    )
}

export default WizardResult
