import React from 'react'
// import clsx from 'clsx'
import ButtonMaterial from 'components/atoms/ButtonMaterial'
import ListItemMaterial from 'components/atoms/ListItemMaterial'
import LinkMaterial from 'components/atoms/LinkMaterial'

type TechListMaterialProperties = React.HTMLProps<HTMLUListElement>

const TechListMaterial: React.FC<TechListMaterialProperties> = () => {
    return (
        <ul className="mdc-list">
            <ListItemMaterial tabIndex={0}>
                <LinkMaterial type="outter" href="https://reactjs.org/" to="">
                    <ButtonMaterial isRipple>React</ButtonMaterial>
                </LinkMaterial>
            </ListItemMaterial>
            <ListItemMaterial tabIndex={-1}>
                <LinkMaterial type="outter" href="https://www.typescriptlang.org/" to="">
                    <ButtonMaterial isRipple>TypeScript</ButtonMaterial>
                </LinkMaterial>
            </ListItemMaterial>
            <ListItemMaterial tabIndex={-1}>
                <LinkMaterial type="outter" href="https://webpack.js.org/" to="">
                    <ButtonMaterial isRipple>Webpack</ButtonMaterial>
                </LinkMaterial>
            </ListItemMaterial>
            <ListItemMaterial tabIndex={-1}>
                <LinkMaterial type="outter" href="https://babeljs.io/" to="">
                    <ButtonMaterial isRipple>Babel</ButtonMaterial>
                </LinkMaterial>
            </ListItemMaterial>
            <ListItemMaterial tabIndex={-1}>
                <LinkMaterial type="outter" href="https://eslint.org/" to="">
                    <ButtonMaterial isRipple>ES Lint</ButtonMaterial>
                </LinkMaterial>
            </ListItemMaterial>
            <ListItemMaterial tabIndex={-1}>
                <LinkMaterial type="inner" to="/works">
                    <ButtonMaterial isRipple>Test Browser Router</ButtonMaterial>
                </LinkMaterial>
            </ListItemMaterial>
        </ul>
    )
}

export default TechListMaterial
