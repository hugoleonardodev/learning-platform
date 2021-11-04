import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import TeacherWizard from 'components/organisms/TeacherWizard'
import TeacherInstructions from 'components/organisms/TeacherInstructions'
import TeacherFeedback from 'components/organisms/TeacherFeedback'
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
                <TeacherInstructions />
            </Route>
            <Route path={`${path}/lesson1`}>
                <TeacherWizard />
            </Route>
            <Route path={`${path}/lesson2`}>
                <TeacherWizard />
            </Route>
            <Route path={`${path}/lesson3`}>
                <TeacherWizard />
            </Route>
            <Route path={`${path}/result`}>
                <TeacherHeading sectionTitle="Training Result" sectionLinks={teacherHomeSectionLinks} />
                <TeacherFeedback />
            </Route>
        </Switch>
    )
}

export default TeacherLessons
