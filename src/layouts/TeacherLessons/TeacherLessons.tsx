import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

// import TeacherWizard from 'components/organisms/TeacherWizard'
const TeacherWizard = React.lazy(() => import('components/organisms/TeacherWizard'))
// import TeacherInstructions from 'components/organisms/TeacherInstructions'
const TeacherInstructions = React.lazy(() => import('components/organisms/TeacherInstructions'))
// import TeacherFeedback from 'components/organisms/TeacherFeedback'
const TeacherFeedback = React.lazy(() => import('components/organisms/TeacherFeedback'))
import TeacherHeading from 'components/molecules/TeacherHeading'

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
                <TeacherHeading sectionTitle="Training Result" sectionLinks={teacherHomeSectionLinks} />
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherFeedback />
                </React.Suspense>
            </Route>
        </Switch>
    )
}

export default TeacherLessons
