import React from 'react'

import {
    HomeFooterContainer,
    HomeFooterEmailIcoin,
    HomeFooterList,
    HomeFooterListItem,
    HomeFooterNav,
    HomeFooterNavLink,
    HomeFooterNavLinkIcon,
    HomeFooterTitle,
} from './factory.styles'

import LinkedinIcon from 'common/assets/linkedin-logo.svg'
import EmailIcon from 'common/assets/email.svg'

const HomeFooter: React.FC = () => {
    return (
        <HomeFooterContainer>
            <HomeFooterTitle>&copy; hugoleonardodev</HomeFooterTitle>
            <HomeFooterNav>
                <HomeFooterList>
                    <HomeFooterListItem>
                        <HomeFooterNavLink
                            href="https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HomeFooterNavLinkIcon src={LinkedinIcon} alt="linkedin" width="32px" height="32px" />
                        </HomeFooterNavLink>
                    </HomeFooterListItem>
                    <HomeFooterListItem>
                        <HomeFooterNavLink
                            href="mailto:hugoleonardo.dev@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HomeFooterEmailIcoin src={EmailIcon} alt="email" width="32px" height="32px" />
                        </HomeFooterNavLink>
                    </HomeFooterListItem>
                </HomeFooterList>
            </HomeFooterNav>
        </HomeFooterContainer>
    )
}

export default HomeFooter
