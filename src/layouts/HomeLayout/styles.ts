import styled from 'styled-components'
import { Container, Row, Col, Button, Input, Card, CardImg, CardGroup } from 'reactstrap'

export const HomeContainer = styled(Container)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomeBackground = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    filter: brightness(0.5);
`

export const HomeRow = styled(Row)`
    height: 100%;
    display: flex;
    align-items: center;
`

export const HomeCol = styled(Col)``

export const ButtonRounded = styled(Button)`
    border-radius: 100px;
`
export const InputRounded = styled(Input)`
    border-radius: 100px;
`
export const HomeCardImage = styled(CardImg)`
    filter: brightness(0.5);
    @media only screen and (min-width: 768px) {
        min-height: 356px;
    }
`

export const HomeCard = styled(Card)`
    border: none;
    margin-bottom: 0 !important;
`

export const HomeCardTextContainer = styled.div`
    position: absolute;
    z-index: 1;
    padding: 16px;
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HomeLogo = styled.img`
    width: 72px;
    border-radius: 100px;
    margin-left: 36px;
    box-shadow: 0 1px 2px 0 rgb(0 47 38 / 15%), 0 1px 3px 1px rgb(0 47 38 / 15%);
`

export const HomeLogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`

export const HomeLogoTitle = styled.h1`
    margin-left: 16px;
`

export const HomeCardTitle = styled.h2``

export const HomeCardSubTitle = styled.h3``

export const HomeCardGroup = styled(CardGroup)`
    max-width: 80vw;
`
