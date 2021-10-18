import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'

import store from 'store/index'
import { history } from 'store/index'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: React.FC = ({ children }) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>{children}</ConnectedRouter>
        </Provider>
    )
}

const customRender = (
    ui: React.ReactElement,
    options = {},
): RenderResult<
    // Must be pwd root folder. Change /home/hugo-dev/Public/ to your pwd root folder
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement
> => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
