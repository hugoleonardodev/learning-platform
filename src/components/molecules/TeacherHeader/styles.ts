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

type TeacherNavLinkProperties = {
    istoggle?: boolean
}

export const TeacherNavLink = styled(NavLink)<TeacherNavLinkProperties>`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    cursor: pointer;
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.text};
    }
    &:hover {
        svg :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
    @media only screen and (min-width: 767px) {
        display: ${properties => (properties.istoggle ? 'none' : 'block')};
    }
`

export const TeacherNavLinkButton = styled(Link)<TeacherNavLinkProperties>`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    cursor: pointer;
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.text};
    }
    &:hover {
        svg :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
    @media only screen and (min-width: 767px) {
        display: ${properties => (properties.istoggle ? 'none' : 'block')};
    }
`

export const TeacherUncontrolledDropdown = styled(UncontrolledDropdown)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`

export const TeacherDropdownToggle = styled(DropdownToggle)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.text};
    }
    &:hover {
        svg :nth-child(2) {
            fill: ${properties => properties.theme.colors.primary.main};
        }
    }
`

export const TeacherDropdownMenu = styled(DropdownMenu)`
    transform: translateX(-116px);
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    @media only screen and (max-width: 769px) {
        position: absolute !important;
    }
`

export const TeacherDropdownItem = styled(DropdownItem)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    &:hover {
        background: ${properties => properties.theme.colors.primary.light};
    }
`

export const TeacherNavBarText = styled(NavbarText)`
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
`
