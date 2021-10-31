import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'common/themes/defaultTheme'

import store from './store'

import Routes from './Routes'

// import 'bootstrap/dist/css/bootstrap.min.css'

import './App.scss'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </ThemeProvider>
    )
}

export default App
