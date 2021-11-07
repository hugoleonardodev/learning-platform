import styled, { keyframes, css } from 'styled-components'

import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap'

import { Link } from 'react-router-dom'

export const TeacherHeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 28px;
    background: ${properties => properties.theme.colors.background.light};
    box-shadow: 0 3px 30px rgb(0 0 0 / 10%), 0 3px 20px rgb(0 0 0 / 10%);
`

export const TeacherNavBar = styled(Navbar)``

export const TeacherNavBarToggler = styled(NavbarToggler)``

export const TeacherNavBrand = styled(Link)`
    width: 78vw;
    display: flex;
    justify-content: center;
    color: ${properties => properties.theme.colors.text.main};
    background: ${properties => properties.theme.colors.background};
    &:hover {
        color: ${properties => properties.theme.colors.primary.dark};
    }
    @media only screen and (max-width: 769px) {
        width: 50vw;
    }
`

export const TeacherNavBrandLogo = styled.img`
    width: 36px;
    border-radius: 100px;
    margin-right: 16px;
    box-shadow: 0 1px 2px 0 rgb(0 47 38 / 15%), 0 1px 3px 1px rgb(0 47 38 / 15%);
`

export const TeacherNavCollapse = styled(Collapse)``

export const TeacherNav = styled(Nav)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

type TeacherNavItemProperties = {
    fullscreen?: boolean | string
}

export const TeacherNavItem = styled(NavItem)<TeacherNavItemProperties>`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 769px) {
        margin-right: ${properties => properties.fullscreen === 'true' && '8px'};
    }
`

type TeacherNavLinkButtonProperties = {
    isselected: boolean
    istoggle?: boolean
}

export const TeacherNavLinkButton = styled(Link)<TeacherNavLinkButtonProperties>`
    color: ${properties => properties.theme.colors.text.light};
    background: ${properties => properties.theme.colors.background.main};
    cursor: pointer;
    #notifications-icon :nth-child(2) {
        fill: ${properties =>
            properties.isselected
                ? properties.theme.colors.primary.main
                : properties => properties.theme.colors.text.dark};
    }
    &:hover {
        #notifications-icon :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
    @media only screen and (min-width: 767px) {
        display: ${properties => (properties.istoggle ? 'none' : 'block')};
    }
`

type TeacherNavLinkProperties = {
    istoggle?: boolean
    ismenu?: boolean | string
    isactive?: boolean | string
}

const rotateToTop = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-180deg);
    }
`

const rotateToBottom = keyframes`
    from {
        transform: rotate(-180deg);
    }

    to {
        transform: rotate(0deg);
    }
`

const isActiveMixin = css<TeacherNavLinkProperties>`
    animation: ${rotateToTop} 0.3s ease-in;
    transform: rotate(-180deg);
`

const isNotActiveMixin = css<TeacherNavLinkProperties>`
    animation: ${rotateToBottom} 0.3s ease-in;
    transform: rotate(0deg);
`

export const TeacherNavLink = styled(NavLink)<TeacherNavLinkProperties>`
    cursor: pointer;
    margin-right: ${properties => properties.ismenu === 'true' && '8px'};
    #hamburger-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.text.light};
    }

    #full-screen-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.text.light};
    }

    #expand-more-icon {
        ${({ isactive }) => (isactive === 'true' ? isActiveMixin : isNotActiveMixin)}
    }

    #expand-more-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.text.light};
    }

    &:hover {
        #hamburger :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.light};
        }
        #full-screen-icon :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.light};
        }
    }

    @media only screen and (min-width: 767px) {
        display: ${properties => (properties.istoggle ? 'none' : 'block')};
    }
`

export const TeacherDropdownToggle = styled(DropdownToggle)`
    display: flex;
    #person-icon {
        background-color: ${properties => properties.theme.colors.primary.main};
        border-radius: 100px;
        box-shadow: 0 1px 2px 0 rgb(0 47 38 / 15%), 0 1px 3px 1px rgb(0 47 38 / 15%);
    }
    #person-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.background.main};
    }
    #notifications-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.text.light};
    }
    @media only screen and (max-width: 769px) {
        margin-right: 8px;
    }
`

export const TeacherUncontrolledDropdown = styled(UncontrolledDropdown)`
    display: flex;
    align-items: center;
`

export const TeacherMessagesUncontrolledDropdown = styled(UncontrolledDropdown)`
    color: ${properties => properties.theme.colors.text};
    display: flex;
    align-items: center;
`

export const TeacherMessagesDropdownMenu = styled(DropdownMenu)`
    transform: translate(-114px, 72px);
    background: ${properties => properties.theme.colors.background.light};
    &:hover {
        #person-icon :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
    @media only screen and (max-width: 769px) {
        position: absolute !important;
    }
`

export const TeacherMessagesBadge = styled.span`
    color: ${properties => properties.theme.colors.text.light};
`

export const TeacherDropdownMenu = styled(DropdownMenu)`
    transform: translate(-114px, 94px);
    background: ${properties => properties.theme.colors.background.light};
    &:hover {
        #person-icon :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
    @media only screen and (max-width: 769px) {
        position: absolute !important;
    }
`

type TeacherDropdownItemProperties = {
    divider: boolean
}

export const TeacherDropdownItem = styled(DropdownItem)<TeacherDropdownItemProperties>`
    color: ${properties => properties.theme.colors.text.light};
    background: ${properties => properties.theme.colors.background.light};
    &:hover {
        color: ${properties =>
            properties.theme.isDark ? properties.theme.colors.background.light : properties.theme.colors.primary.text};
        background: ${properties =>
            properties.divider
                ? properties => properties.theme.colors.background.light
                : properties.theme.colors.primary.light};
    }
`

export const TeacherDropdownItemHeader = styled.span`
    padding: 0 16px;
    color: ${properties => properties.theme.colors.text.light};
    cursor: default;
`

export const TeacherNavBarText = styled(NavbarText)``
