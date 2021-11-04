import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

// import LessonsInstructions from 'components/molecules/LessonsInstructions'
import TeacherWizard from 'components/organisms/TeacherWizard'
import TeacherInstructions from 'components/organisms/TeacherInstructions'

const TeacherLessons: React.FC = () => {
    const { path } = useRouteMatch()
    console.log(path)

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
                <div>Lessons results</div>
            </Route>
        </Switch>
    )
}

export default TeacherLessons
