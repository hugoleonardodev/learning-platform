import React from 'react'
// import { screen } from '@testing-library/react'
import { render } from '../helpers/TestRenderer'

import App from '../../App'

describe('App.tsx', () => {
    it('should breaks because mdc is only defined at browser by import the modules from CDN', () => {
        // In order to make it renders, just provide a mock for mdc CDN JavaScript files.
        // But, since we are not able to test styles, we will test classNames to match the mdc
        // Cypress will provide a test on browser environment with the mdc module
        render(<App />, {})
    })
})
