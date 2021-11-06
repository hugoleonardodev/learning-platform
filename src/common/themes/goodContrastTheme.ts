import { DefaultTheme } from 'styled-components'

const goodContrastTheme: DefaultTheme = {
    isDark: false,
    colors: {
        background: {
            light: '#ffffff',
            main: '#ededed',
            dark: '#bbbbbb',
            text: '#000000',
        },
        text: {
            light: '#696969',
            main: '#3d3d3d',
            dark: '#171717',
            theme: '#ffffff',
        },
        grey: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            text: '#ffffff',
        },
        primary: {
            light: '#377367',
            main: '#00473d',
            dark: '#002017',
            text: '#ffffff',
        },
        secondary: {
            light: '#965e31',
            main: '#643407',
            dark: '#390c00',
            text: '#ffffff',
        },
        warning: {
            light: '#c1402a',
            main: '#8a0000',
            dark: '#580000',
            text: '#ffffff',
        },
        pink: {
            light: '#c04043',
            main: '#8a001c',
            dark: '#560000',
            text: '#ffffff',
        },
    },
}

export default goodContrastTheme
