import 'styled-components'

import defaultTheme from 'common/themes/defaultTheme'

export type Theme = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        colors: {
            background: string
            text: string
            grey: {
                light: string
                main: string
                dark: string
            }
            primary: {
                light: string
                main: string
                dark: string
            }
            secondary: {
                light: string
                main: string
                dark: string
            }
            warning: {
                light: string
                main: string
                dark: string
            }
            pink: {
                light: string
                main: string
                dark: string
            }
        }
    }
}
