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
            <HomeFooterTitle>&copy; Time To Play</HomeFooterTitle>
            <HomeFooterNav>
                <HomeFooterList>
                    <HomeFooterListItem>
                        <HomeFooterNavLink
                            href="https://www.linkedin.com/in/time-to-play-school-2a7877164/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <HomeFooterNavLinkIcon src={LinkedinIcon} alt="linkedin" width="32px" height="32px" />
                        </HomeFooterNavLink>
                    </HomeFooterListItem>
                    <HomeFooterListItem>
                        <HomeFooterNavLink
                            href="mailto:contato@timetoplay.com"
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
