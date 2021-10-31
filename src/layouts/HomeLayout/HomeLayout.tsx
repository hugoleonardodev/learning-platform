import React from 'react'

import FormLogin from 'components/organisms/FormLogin'

import {
    HomeBackground,
    HomeCard,
    HomeCardGroup,
    HomeCardImage,
    HomeCardSubTitle,
    HomeCardTextContainer,
    HomeCardTitle,
    HomeCol,
    HomeContainer,
    HomeLogo,
    HomeLogoContainer,
    HomeLogoTitle,
    // HomeNav,
    // HomeNavLink,
    // HomeNavLinkIcon,
    HomeRow,
} from './styles'

import StudyingOnline from 'common/assets/studying_online.jpg'
import TimeToPlayLogo from 'common/assets/time-to-play-logo.jpeg'
import HomeFooter from 'components/molecules/HomeFooter'
import ForgotPassword from 'components/organisms/FormLogin/ForgotPassword'
// import StudyingBackground1 from 'common/assets/studying_background2.jpg'
// import EmailIcon from 'common/assets/email.svg'
// import LinkedinIcon from 'common/assets/linkedin-logo.svg'

const HomeLayout: React.FC = () => {
    const [forgotPassword, setForgotPassword] = React.useState(false)
    return (
        <HomeContainer as="main">
            <HomeBackground src={StudyingOnline} alt="Studying Background" />
            <HomeCardGroup>
                <HomeCard>
                    <HomeRow xs="1">
                        <HomeCol>
                            <HomeCardTextContainer>
                                <HomeCardTitle>TIME TO PLAY</HomeCardTitle>
                                <HomeCardSubTitle>A MELHOR METODOLOGIA DO BRASIL</HomeCardSubTitle>
                            </HomeCardTextContainer>
                            <HomeCardImage src={StudyingOnline} alt="Studying Online" />
                        </HomeCol>
                    </HomeRow>
                </HomeCard>
                <HomeCard>
                    <HomeRow xs="1">
                        <HomeCol>
                            <HomeLogoContainer>
                                <HomeLogo src={TimeToPlayLogo} alt="Time To Play Logo" />
                                <HomeLogoTitle>TIME TO PLAY</HomeLogoTitle>
                            </HomeLogoContainer>
                            {forgotPassword ? (
                                <ForgotPassword setForgotPassword={setForgotPassword} />
                            ) : (
                                <FormLogin setForgotPassword={setForgotPassword} />
                            )}
                        </HomeCol>
                    </HomeRow>
                </HomeCard>
            </HomeCardGroup>
            <HomeFooter />
        </HomeContainer>
    )
}

export default HomeLayout
