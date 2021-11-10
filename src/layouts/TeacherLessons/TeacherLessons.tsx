import { Switch, Route, useRouteMatch } from 'react-router-dom'
import React from 'react'

const TeacherWizard = React.lazy(() => import('components/organisms/TeacherWizard'))
const TeacherInstructions = React.lazy(() => import('components/organisms/TeacherInstructions'))
const TeacherFeedback = React.lazy(() => import('components/organisms/TeacherFeedback'))
const TeacherHeading = React.lazy(() => import('components/molecules/TeacherHeading'))

const teacherHomeSectionLinks = [
    { linkTitle: 'App', linkPath: '' },
    { linkTitle: 'Lessons', linkPath: '/lessons' },
    { linkTitle: 'Training Result', linkPath: '' },
    { linkTitle: 'Lesson1', linkPath: '/lesson1' },
]

const TeacherLessons: React.FC = () => {
    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherInstructions />
                </React.Suspense>
            </Route>
            <Route path={`${path}/lesson1`}>
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherWizard />
                </React.Suspense>
            </Route>
            <Route path={`${path}/lesson2`}>
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherWizard />
                </React.Suspense>
            </Route>
            <Route path={`${path}/lesson3`}>
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherWizard />
                </React.Suspense>
            </Route>
            <Route path={`${path}/result`}>
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherHeading sectionTitle="Training Result" sectionLinks={teacherHomeSectionLinks} />
                    <TeacherFeedback />
                </React.Suspense>
            </Route>
        </Switch>
    )
}

export default TeacherLessons
