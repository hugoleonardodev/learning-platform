import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import VideoPlayer from 'components/molecules/VideoPlayer'
const VideoPlayer = React.lazy(() => import('components/molecules/VideoPlayer'))
import TeacherHeading from 'components/molecules/TeacherHeading'

import { VideoQuestion } from 'store/constants/teachersDataTypes'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

import WizardStep from './WizardStep'
import WizardResult from './WizardResult'

const fixedPathWithLength = (array: VideoQuestion[], index: number) => {
    return index === array.length - 1 ? 'result' : 'question' + (index + __TWO__)
}

const teacherHomeSectionLinks = [
    { linkTitle: 'App', linkPath: '' },
    { linkTitle: 'Lessons', linkPath: '/lessons' },
    { linkTitle: 'Lesson1', linkPath: '/lesson1' },
]

const TeacherWizard: React.FC = () => {
    const { path } = useRouteMatch()
    const lessonPosition = Number.parseInt(path[path.length - 1])
    const { videoQuestions } = useSelector(
        (state: RootStateWithReducers) => state.teachers.teacherLessons[lessonPosition - 1],
    )

    return (
        <Switch>
            <Route exact path={path}>
                <TeacherHeading sectionTitle={`Lesson${lessonPosition}`} sectionLinks={teacherHomeSectionLinks} />
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <VideoPlayer />
                </React.Suspense>
            </Route>
            {videoQuestions.map((question, index) => (
                <Route path={`${path}/question${index + 1}`} key={question.question}>
                    <TeacherHeading sectionTitle={`Question${index + 1}`} sectionLinks={teacherHomeSectionLinks} />
                    <WizardStep
                        nextStep={
                            index === videoQuestions.length - 1
                                ? `/teacher-app/lessons/lesson${lessonPosition}/result`
                                : `${path}/${fixedPathWithLength(videoQuestions, index)}`
                        }
                        currentQuestion={index}
                    />
                </Route>
            ))}
            <Route path={`/teacher-app/lessons/lesson${lessonPosition}/result`}>
                <TeacherHeading sectionTitle="Result" sectionLinks={teacherHomeSectionLinks} />
                <WizardResult />
            </Route>
        </Switch>
    )
}

export default TeacherWizard
