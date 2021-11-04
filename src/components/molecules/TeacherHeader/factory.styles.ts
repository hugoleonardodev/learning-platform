import styled from 'styled-components'

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
    background: ${properties => properties.theme.colors.background};
    box-shadow: 0 3px 30px rgb(0 0 0 / 10%), 0 3px 20px rgb(0 0 0 / 10%);
`

export const TeacherNavBar = styled(Navbar)``

export const TeacherNavBarToggler = styled(NavbarToggler)``

export const TeacherNavBrand = styled(Link)`
    width: 78vw;
    display: flex;
    justify-content: center;
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    &:hover {
        color: ${properties => properties.theme.colors.primary.main};
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

export const TeacherNavItem = styled(NavItem)`
    display: flex;
    align-items: center;
`

type TeacherNavLinkButtonProperties = {
    isselected: boolean
    istoggle?: boolean
}

export const TeacherNavLinkButton = styled(Link)<TeacherNavLinkButtonProperties>`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    cursor: pointer;
    #notifications-icon :nth-child(2) {
        fill: ${properties =>
            properties.isselected ? properties.theme.colors.primary.main : properties => properties.theme.colors.text};
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
}

export const TeacherNavLink = styled(NavLink)<TeacherNavLinkProperties>`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    cursor: pointer;

    #full-screen-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.text};
    }

    &:hover {
        #full-screen-icon :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }

    @media only screen and (min-width: 767px) {
        display: ${properties => (properties.istoggle ? 'none' : 'block')};
    }
`

export const TeacherDropdownToggle = styled(DropdownToggle)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    #my-face-icon :nth-child(2) {
        fill: ${properties => properties.theme.colors.text};
    }
    #person-icon {
        background-color: ${properties => properties.theme.colors.primary.main};
        border-radius: 100px;
        box-shadow: 0 1px 2px 0 rgb(0 47 38 / 15%), 0 1px 3px 1px rgb(0 47 38 / 15%);
    }
    &:hover {
        #my-face-icon :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
`

export const TeacherUncontrolledDropdown = styled(UncontrolledDropdown)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`

export const TeacherDropdownMenu = styled(DropdownMenu)`
    transform: translateX(-116px);
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    @media only screen and (max-width: 769px) {
        position: absolute !important;
    }
`

type TeacherDropdownItemProperties = {
    divider: boolean
}

export const TeacherDropdownItem = styled(DropdownItem)<TeacherDropdownItemProperties>`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    &:hover {
        background: ${properties =>
            properties.divider
                ? properties => properties.theme.colors.background
                : properties.theme.colors.primary.light};
    }
`

export const TeacherNavBarText = styled(NavbarText)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`
