import styled from 'styled-components'
import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

type MainContentProperties = {
    sideMenu: boolean
}

export const MainContent = styled.main<MainContentProperties>`
    display: flex;
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    min-width: ${properties => (properties.sideMenu ? 'calc(80vw)' : 'calc(98vw + 104px)')};
    transform: ${properties => (properties.sideMenu ? 'translateX(0)' : 'translateX(-104px)')};
    transition: transform 0.6s ease;
`

export const VertSideNav = styled.nav`
    height: 100vh;
    max-width: 128px;
    min-width: 104px;
    margin-top: -28px;
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    box-shadow: 0 3px 30px rgb(0 0 0 / 10%), 0 3px 20px rgb(0 0 0 / 10%);
    @media only screen and (max-width: 769px) {
        max-width: 76px;
        min-width: 76px;
    }
`

type VertSideNavItemProperties = {
    isselected: boolean
}

export const VertSideNavItem = styled(NavItem)<VertSideNavItemProperties>`
    min-width: 96px;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${properties =>
        properties.isselected ? properties.theme.colors.primary.main : properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    svg :nth-child(2) {
        fill: ${properties =>
            properties.isselected ? properties.theme.colors.primary.main : properties.theme.colors.text};
    }
    @media only screen and (max-width: 769px) {
        min-width: 58px;
        min-height: unset;
        max-width: 76px;
        max-height: 76px;
    }
`

export const VertSideNavItemSelector = styled.div<VertSideNavItemProperties>`
    width: 8px;
    height: 100%;
    min-height: 72px;
    color: ${properties => properties.theme.colors.text};
    background: ${properties =>
        properties.isselected ? properties.theme.colors.primary.main : properties.theme.colors.background};
`

type VertSideNavLinkProperties = {
    isselected: boolean
}

export const VertSideNavLink = styled(Link)<VertSideNavLinkProperties>`
    display: flex;
    justify-content: center;
    text-decoration: none;
    padding: 12px 0;
    color: ${properties =>
        properties.isselected ? properties.theme.colors.primary.main : properties.theme.colors.text};
    &:hover {
        .nav-item {
            color: ${properties => properties.theme.colors.primary.main};
            svg :nth-child(2) {
                fill: ${properties => properties.theme.colors.primary.main};
            }
        }
    }
    @media only screen and (max-width: 769px) {
        margin-left: 4px;
        justify-content: space-between;
    }
`

type MainSectionProperties = {
    sideMenu: boolean
}

export const MainSection = styled.section<MainSectionProperties>`
    height: 100vh;
    margin-left: 104px;
    min-width: ${properties => (properties.sideMenu ? 'calc(70vw)' : 'calc(80vw)')};
    transition: min-width 0.6s ease;
    transform: ${properties => (properties.sideMenu ? 'translateX(-64px)' : 'translateX(0)')};
    @media only screen and (max-width: 769px) {
        transform: ${properties => (properties.sideMenu ? 'translateX(-88px)' : 'translateX(-44px)')};
    }
`
