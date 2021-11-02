import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'

import TeacherApp from 'components/organisms/TeacherApp'

import TeacherHome from 'layouts/TeacherHome'
import TeacherLessons from 'layouts/TeacherLessons'
import TeacherProfile from 'layouts/TeacherProfile'
import TeacherMessages from 'layouts/TeacherMessages'

const TeacherPage: React.FC = () => {
    const { path } = useRouteMatch()
    return (
        <TeacherApp>
            <Switch>
                <Route exact path={path}>
                    <TeacherHome />
                </Route>
                <Route path={`${path}/lessons`}>
                    <TeacherLessons />
                </Route>
                <Route path={`${path}/profile`}>
                    <TeacherProfile />
                </Route>
                <Route path={`${path}/messages`}>
                    <TeacherMessages />
                </Route>
            </Switch>
        </TeacherApp>
    )
}

export default TeacherPage
