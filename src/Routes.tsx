import { Route, Switch } from 'react-router-dom'
import React from 'react'

const HomePage = React.lazy(() => import('pages/HomePage'))
const TeacherPage = React.lazy(() => import('pages/TeacherPage'))

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <HomePage />
                </React.Suspense>
            </Route>
            <Route path="/teacher-app">
                <React.Suspense fallback={<div>Carregando...</div>}>
                    <TeacherPage />
                </React.Suspense>
            </Route>
        </Switch>
    )
}

export default Routes
