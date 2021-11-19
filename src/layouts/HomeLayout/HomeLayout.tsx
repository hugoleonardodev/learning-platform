import React from 'react'

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
import LearningPlatformLogoAvif from 'common/assets/learning_logo.avif'
import StudyingOnlineWebp from 'common/assets/studying_online.webp'
import LearningPlatformLogoWebp from 'common/assets/learning_logo.webp'
import StudyingOnlineJpg from 'common/assets/studying_online.jpg'
import LearningPlatformLogoJpg from 'common/assets/learning_logo.png'

import HomeFooter from 'components/molecules/HomeFooter'
import FormLogin from 'components/organisms/FormLogin'
import ForgotPassword from 'components/organisms/FormLogin/ForgotPassword'

const HomeLayout: React.FC = () => {
    const [forgotPassword, setForgotPassword] = React.useState(false)
    return (
        <HomeContainer as="main">
            <HomePictureContainer>
                <source srcSet={StudyingOnlineAvif} type="image/avif" />
                <source srcSet={StudyingOnlineWebp} type="image/webp" />
                <HomeBackground
                    src={LearningPlatformLogoJpg}
                    alt="Studying Background"
                    width="1254"
                    height="836"
                    decoding="async"
                    loading="eager"
                />
            </HomePictureContainer>
            <HomeCardGroup>
                <HomeCard>
                    <HomeRow xs="1">
                        <HomeCol>
                            <HomeCardTextContainer>
                                <HomeCardTitle>LEARNING PLATFORM</HomeCardTitle>
                                <HomeCardSubTitle>A MELHOR METODOLOGIA DO BRASIL</HomeCardSubTitle>
                            </HomeCardTextContainer>
                            <HomeFormPictureContainer>
                                <source srcSet={StudyingOnlineAvif} type="image/avif" />
                                <source srcSet={StudyingOnlineWebp} type="image/webp" />
                                <HomeCardImage
                                    src={StudyingOnlineJpg}
                                    alt="Studying Online"
                                    width="1254"
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
                                    <source srcSet={LearningPlatformLogoAvif} type="image/avif" />
                                    <source srcSet={LearningPlatformLogoWebp} type="image/webp" />
                                    <HomeLogo
                                        src={LearningPlatformLogoJpg}
                                        alt="Studying Online"
                                        width="72"
                                        height="72"
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </picture>
                                <HomeLogoTitle>LEARNING PLATFORM</HomeLogoTitle>
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
