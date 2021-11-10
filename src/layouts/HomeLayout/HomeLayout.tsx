import React from 'react'

import FormLogin from 'components/organisms/FormLogin'

import {
    HomeContainer,
    HomePictureContainer,
    HomeBackground,
    HomeCard,
    HomeCardGroup,
    HomeCardImage,
    HomeCardSubTitle,
    HomeCardTextContainer,
    HomeCardTitle,
    HomeCol,
    HomeLogo,
    HomeLogoContainer,
    HomeLogoTitle,
    HomeRow,
    HomeFormPictureContainer,
} from './factory.styles'

import StudyingOnlineAvif from 'common/assets/studying_online.avif'
import TimeToPlayLogoAvif from 'common/assets/time-to-play-logo.avif'
import StudyingOnlineWebp from 'common/assets/studying_online.webp'
import TimeToPlayLogoWebp from 'common/assets/time-to-play-logo.webp'
import StudyingOnlineJpg from 'common/assets/studying_online.jpg'
import TimeToPlayLogoJpg from 'common/assets/time-to-play-logo.jpg'

import HomeFooter from 'components/molecules/HomeFooter'
import ForgotPassword from 'components/organisms/FormLogin/ForgotPassword'

const HomeLayout: React.FC = () => {
    const [forgotPassword, setForgotPassword] = React.useState(false)
    return (
        <HomeContainer as="main">
            <HomePictureContainer>
                <source srcSet={StudyingOnlineAvif} type="image/avif" />
                <source srcSet={StudyingOnlineWebp} type="image/webp" />
                <HomeBackground
                    src={StudyingOnlineJpg}
                    alt="Studying Background"
                    width="1224"
                    height="836"
                    decoding="async"
                    loading="lazy"
                />
            </HomePictureContainer>
            <HomeCardGroup>
                <HomeCard>
                    <HomeRow xs="1">
                        <HomeCol>
                            <HomeCardTextContainer>
                                <HomeCardTitle>TIME TO PLAY</HomeCardTitle>
                                <HomeCardSubTitle>A MELHOR METODOLOGIA DO BRASIL</HomeCardSubTitle>
                            </HomeCardTextContainer>
                            <HomeFormPictureContainer>
                                <source srcSet={StudyingOnlineAvif} type="image/avif" />
                                <source srcSet={StudyingOnlineWebp} type="image/webp" />
                                <HomeCardImage
                                    src={StudyingOnlineJpg}
                                    alt="Studying Online"
                                    width="1224"
                                    height="836"
                                    decoding="async"
                                    loading="lazy"
                                />
                            </HomeFormPictureContainer>
                        </HomeCol>
                    </HomeRow>
                </HomeCard>
                <HomeCard>
                    <HomeRow xs="1">
                        <HomeCol>
                            <HomeLogoContainer>
                                <picture>
                                    <source srcSet={TimeToPlayLogoAvif} type="image/avif" />
                                    <source srcSet={TimeToPlayLogoWebp} type="image/webp" />
                                    <HomeLogo
                                        src={TimeToPlayLogoJpg}
                                        alt="Studying Online"
                                        width="72"
                                        height="72"
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </picture>
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
