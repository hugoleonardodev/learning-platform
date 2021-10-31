import React from 'react'
// Test renderer with Router and Store (Redux) for easy customizing tests entries
import { RenderWithRouterAndStore } from '__tests__/helpers/RenderWithStoreAndRouter'
import { screen } from '@testing-library/react'
// import { render } from '../../helpers/TestRenderer'
// import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import HomePage from 'pages/HomePage'

describe('HomePageNoMDC.tsx', () => {
    beforeEach(() => {
        const homeRoute = '/'
        const homeHistory = createMemoryHistory({ initialEntries: [homeRoute] })
        RenderWithRouterAndStore(<HomePage />, { path: homeRoute, history: homeHistory })
    })

    it('should renders a link with `React` text', () => {
        // test case passes because we have commented out the mdc modules from HomePage
        const link = screen.getByText('React')
        expect(link).toBeInTheDocument()
    })
})
