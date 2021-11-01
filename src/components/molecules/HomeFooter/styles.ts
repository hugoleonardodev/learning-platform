import styled from 'styled-components'

export const HomeFooterContainer = styled.footer`
    background-color: transparent;
    z-index: 1;
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    /* color: ${properties => properties.theme.colors.text}; */
    /* background: ${properties => properties.theme.colors.background}; */
    @media only screen and (max-width: 767px) {
        display: none;
    }
`

export const HomeFooterTitle = styled.h5`
    color: ${properties => properties.theme.colors.background};
    /* background: ${properties => properties.theme.colors.background}; */
`

export const HomeFooterNav = styled.nav`
    /* color: ${properties => properties.theme.colors.text}; */
    /* background: ${properties => properties.theme.colors.background}; */
`

export const HomeFooterList = styled.ul`
    display: flex;
    min-width: 200px;
    min-height: 30px;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    /* color: ${properties => properties.theme.colors.text}; */
    /* background: ${properties => properties.theme.colors.background}; */
`

export const HomeFooterListItem = styled.li`
    display: flex;
    /* color: ${properties => properties.theme.colors.text}; */
    /* background: ${properties => properties.theme.colors.background}; */
`

export const HomeFooterNavLink = styled.a`
    text-decoration: none;
    /* color: ${properties => properties.theme.colors.text}; */
    /* background: ${properties => properties.theme.colors.background}; */
`
export const HomeFooterNavLinkIcon = styled.img`
    max-width: 32px;
    max-height: 32px;
    /* color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background}; */
`

export const HomeFooterEmailIcoin = styled.img`
    max-width: 32px;
    max-height: 32px;
    transform: translateY(4px);
    /* color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background}; */
`
