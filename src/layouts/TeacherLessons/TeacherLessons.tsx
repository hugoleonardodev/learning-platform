import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import TeacherWizard from 'components/organisms/TeacherWizard'

type TeacherLessonsProperties = {
    currentLesson?: string
}
const Lessons: React.FC<TeacherLessonsProperties> = () => {
    return <div>Intruções para a lição</div>
}

const TeacherLessons: React.FC = () => {
    const { path } = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route exact path={`${path}`}>
                    <Lessons />
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
            </Switch>
        </div>
    )
}

export default TeacherLessons
