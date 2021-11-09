declare module '*.svg' {
    import * as React from 'react'
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
    const source: string
    export default source
}

declare module '*.jpg' {
    const content: string
    export default content
}

declare module '*.jpeg' {
    const content: string
    export default content
}

declare module '*.png' {
    const content: string
    export default content
}

declare module '*.json' {
    const content: string
    export default content
}
