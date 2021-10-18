import React from 'react'
import clsx from 'clsx'

type ListItemMaterialProperties = React.HTMLProps<HTMLLIElement>

const ListItemMaterial = React.forwardRef<HTMLLIElement, ListItemMaterialProperties>(
    ({ children, className = '', ...properties }, reference) => {
        const listItemMaterialClass = clsx('mdc-list-item', className)

        return (
            <li className={listItemMaterialClass} ref={reference} {...properties}>
                {children}
            </li>
        )
    },
)

ListItemMaterial.displayName = 'ListItemMaterial'

export default ListItemMaterial
