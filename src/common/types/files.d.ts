declare module '*.svg' {
    import * as React from 'react'
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
    const source: string
    export default source
}

declare module '*.avif' {
    const source: string
    export default source
}

declare module '*.bmp' {
    const source: string
    export default source
}

declare module '*.gif' {
    const source: string
    export default source
}

declare module '*.jpg' {
    const source: string
    export default source
}

declare module '*.jpeg' {
    const source: string
    export default source
}

declare module '*.png' {
    const source: string
    export default source
}

declare module '*.webp' {
    const source: string
    export default source
}

declare module '*.json' {
    const content: string
    export default content
}
