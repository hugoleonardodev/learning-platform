import { Route, Switch, useRouteMatch } from 'react-router'
import React from 'react'

const TeacherApp = React.lazy(() => import('components/organisms/TeacherApp'))
const TeacherHome = React.lazy(() => import('layouts/TeacherHome'))
const TeacherLessons = React.lazy(() => import('layouts/TeacherLessons'))
const TeacherProfile = React.lazy(() => import('layouts/TeacherProfile'))
const TeacherMessages = React.lazy(() => import('layouts/TeacherMessages'))

const TeacherPage: React.FC = () => {
    const { path } = useRouteMatch()
    // const history = useHistory()
    // if (history.location.pathname.endsWith('teacher-app')) {
    //     return <Redirect to={`${path}/lessons`} />
    // }
    return (
        <React.Suspense fallback={<div>Carregando...</div>}>
            <TeacherApp>
                <Switch>
                    <Route exact path={path}>
                        {/* <Redirect to="/teacher-app/lessons" /> */}
                        <React.Suspense fallback={<div>Carregando...</div>}>
                            <TeacherHome />
                        </React.Suspense>
                    </Route>
                    <Route path={`${path}/lessons`}>
                        <React.Suspense fallback={<div>Carregando...</div>}>
                            <TeacherLessons />
                        </React.Suspense>
                    </Route>
                    <Route path={`${path}/profile`}>
                        <React.Suspense fallback={<div>Carregando...</div>}>
                            <TeacherProfile />
                        </React.Suspense>
                    </Route>
                    <Route path={`${path}/messages/:id`}>
                        <React.Suspense fallback={<div>Carregando...</div>}>
                            <TeacherMessages />
                        </React.Suspense>
                    </Route>
                </Switch>
            </TeacherApp>
        </React.Suspense>
    )
}

export default TeacherPage
