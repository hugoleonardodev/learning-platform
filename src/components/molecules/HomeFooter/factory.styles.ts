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
    @media only screen and (max-width: 767px) {
        display: none;
    }
`

export const HomeFooterTitle = styled.h3`
    color: ${properties => properties.theme.colors.background.light};
`

export const HomeFooterNav = styled.nav``

export const HomeFooterList = styled.ul`
    display: flex;
    min-width: 200px;
    min-height: 30px;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
`

export const HomeFooterListItem = styled.li`
    display: flex;
`

export const HomeFooterNavLink = styled.a`
    text-decoration: none;
`
export const HomeFooterNavLinkIcon = styled.img`
    max-width: 32px;
    max-height: 32px;
`

export const HomeFooterEmailIcoin = styled.img`
    max-width: 32px;
    max-height: 32px;
    transform: translateY(4px);
`
