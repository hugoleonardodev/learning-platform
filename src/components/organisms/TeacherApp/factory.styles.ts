import { NavItem } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type MainContentProperties = {
    sideMenu: boolean
}

export const MainContent = styled.main<MainContentProperties>`
    display: flex;
    background: ${properties => properties.theme.colors.background.light};
    transform: ${properties => (properties.sideMenu ? 'translateX(0)' : 'translateX(-104px)')};
    transition: transform 0.6s ease;
    @media only screen and (max-width: 769px) {
        transform: none;
    }
`

export const VertSideNav = styled.nav<MainContentProperties>`
    height: 100vh;
    max-width: 128px;
    min-width: 104px;
    margin-top: -28px;
    background: ${properties => properties.theme.colors.background.light};
    box-shadow: 0 3px 30px rgb(0 0 0 / 10%), 0 3px 20px rgb(0 0 0 / 10%);
    transition: transform 0.6s ease;
    @media only screen and (max-width: 769px) {
        max-width: 76px;
        min-width: 76px;
        position: absolute;
        z-index: 2;
        transform: ${properties => (properties.sideMenu ? 'translateX(0)' : 'translateX(-76px)')};
    }
`

type VertSideNavItemProperties = {
    isselected: string | boolean
}

export const VertSideNavItem = styled(NavItem)<VertSideNavItemProperties>`
    min-width: 96px;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${properties =>
        properties.isselected === 'true' ? properties.theme.colors.primary.main : properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    svg :nth-child(2) {
        fill: ${properties =>
            properties.isselected === 'true'
                ? properties.theme.colors.primary.main
                : properties.theme.colors.grey.light};
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
        properties.isselected === 'true' ? properties.theme.colors.primary.main : properties.theme.colors.background};
`

type VertSideNavLinkProperties = {
    isselected: string | boolean
}

export const VertSideNavLink = styled(Link)<VertSideNavLinkProperties>`
    display: flex;
    justify-content: center;
    text-decoration: none;
    padding: 12px 0;
    color: ${properties =>
        properties.isselected === 'true' ? properties.theme.colors.primary.main : properties.theme.colors.grey.light};
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
    background: ${properties => properties.theme.colors.background.light};
    width: 100%;
    @media only screen and (max-width: 769px) {
        margin-left: 8px;
        padding-right: 8px;
        width: 96%;
        height: calc(100vh);
    }
    @media only screen and (max-width: 541px) {
        height: calc(100vh + 40vh);
    }
    @media only screen and (max-width: 415px) {
        height: calc(100vh + 60vh);
    }
    @media only screen and (max-width: 361px) {
        height: calc(100vh + 70vh);
    }
`
