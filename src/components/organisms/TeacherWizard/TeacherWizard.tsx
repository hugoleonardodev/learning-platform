import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { VideoQuestion } from 'store/constants/teachersDataTypes'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

import WizardInstructions from './WizardInstructions'
import WizardStep from './WizardStep'
import WizardResult from './WizardResult'

const fixedPathWithLength = (array: VideoQuestion[], index: number) => {
    return index === array.length - 1 ? 'result' : 'question' + (index + __TWO__)
}

const TeacherWizard: React.FC = () => {
    const { path } = useRouteMatch()
    const lessonPosition = Number.parseInt(path[path.length - 1])
    const { videoQuestions } = useSelector(
        (state: RootStateWithReducers) => state.teachers.teacherLessons[lessonPosition - 1],
    )
    return (
        <Switch>
            <Route exact path={path}>
                <WizardInstructions />
            </Route>
            {videoQuestions.map((question, index) => (
                <Route path={`${path}/question${index + 1}`} key={question.question}>
                    <WizardStep
                        nextStep={`${path}/${fixedPathWithLength(videoQuestions, index)}`}
                        currentQuestion={index}
                    />
                </Route>
            ))}
            <Route path={`${path}/result`}>
                <WizardResult />
            </Route>
        </Switch>
    )
}

export default TeacherWizard
