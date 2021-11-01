import TeacherApp from 'components/organisms/TeacherApp'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'

const TeacherHome: React.FC = () => {
    return <div>Teacher Home</div>
}
const TeacherLessons: React.FC = () => {
    return <div>Teacher Lessons</div>
}

const TeacherProfile: React.FC = () => {
    return <div>Teacher Profile</div>
}
const TeacherMessages: React.FC = () => {
    return <div>Teacher Messages</div>
}
const TeacherLayout: React.FC = () => {
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

export default TeacherLayout
