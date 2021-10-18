import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import clsx from 'clsx'
// import mergeRefs from 'react-merge-refs'

type LinkMaterialProperties = LinkProps<HTMLAnchorElement> & {
    type: 'inner' | 'outter'
    outterLink?: string
}

const LinkMaterial = React.forwardRef<HTMLAnchorElement, LinkMaterialProperties>(
    ({ children, className = '', type, ...properties }, reference) => {
        const linkMaterialClass = clsx(`${type}-link`, className)

        return (
            <>
                {type === 'inner' ? (
                    <Link className={linkMaterialClass} ref={reference} {...properties}>
                        {children}
                    </Link>
                ) : (
                    <a
                        className={linkMaterialClass}
                        rel="noopener noreferrer"
                        ref={reference}
                        target="_blank"
                        // to={{ pathname: outterLink }}
                        {...properties}
                    >
                        {children}
                    </a>
                )}
            </>
        )
    },
)

LinkMaterial.displayName = 'LinkMaterial'

export default LinkMaterial
