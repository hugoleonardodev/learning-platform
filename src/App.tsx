import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Routes from './Routes'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
// import '../_main.scss'
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default App
