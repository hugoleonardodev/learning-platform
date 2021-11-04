import TeacherResult from 'components/molecules/TeacherResult'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const WizardResult: React.FC = () => {
    const currentAnswers = useSelector((state: RootStateWithReducers) => state.teachers.currentAnswers)
    console.log(currentAnswers)

    const teacherLessons = useSelector((state: RootStateWithReducers) => state.teachers.teacherLessons)
    const { path } = useRouteMatch()

    const pathArray = path.split('/')
    const lessonString = pathArray[pathArray.length - __TWO__]
    const lessonPosition = Number.parseInt(lessonString[lessonString.length - 1])
    const correctAnswers = teacherLessons[lessonPosition - 1].videoQuestions.map(({ correct }) => correct).sort()
    console.log(correctAnswers)

    return (
        <div>
            <h2>Lesson result</h2>
            {currentAnswers.join('') === correctAnswers.join('') ? <div>is aproved</div> : <div>not passed</div>}
            <TeacherResult teacherIsAproved={currentAnswers.sort().join('') === correctAnswers.sort().join('')} />
        </div>
    )
}

export default WizardResult
