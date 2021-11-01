import React from 'react'
import { Provider } from 'react-redux'
// import { ThemeProvider } from 'styled-components'

// import defaultTheme from 'common/themes/defaultTheme'
// import darkTheme from 'common/themes/darkTheme'

import store from './store'

import Routes from './Routes'
// import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const App: React.FC = () => {
    // const switchTheme = useSelector((state: RootStateWithReducers) => state.teachers.switchTheme)
    return (
        <Provider store={store}>
            {/* <ThemeProvider theme={switchTheme ? darkTheme : defaultTheme}> */}
            <Routes />
            {/* </ThemeProvider> */}
        </Provider>
    )
}

export default App
