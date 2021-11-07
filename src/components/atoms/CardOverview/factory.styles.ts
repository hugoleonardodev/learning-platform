import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Card, CardTitle, CardSubtitle, CardText } from 'reactstrap'

export const CardOverviewWrapperLink = styled(Link)`
    min-width: 240px;
    text-decoration: none;
    margin-bottom: 32px;
    box-shadow: 0 3px 30px rgb(0 0 0 / 10%), 0 3px 20px rgb(0 0 0 / 10%);
    @media only screen and (max-width: 769px) {
        min-width: 200px;
    }
`

export const CardOverviewContainer = styled(Card)`
    max-width: 240px;
    min-height: 240px;
    justify-content: center;
    align-items: center;
    background: ${properties => properties.theme.colors.background.light};
    @media only screen and (max-width: 769px) {
        min-height: 160px;
    }
`

export const CardOverviewTitle = styled(CardTitle)`
    svg {
        height: 100px;
        width: 100px;
    }
    svg :nth-child(2) {
        fill: ${properties => properties.theme.colors.primary.main};
    }
    @media only screen and (max-width: 769px) {
        svg {
            height: 60px;
            width: 60px;
        }
    }
`

export const CardOverviewSubTitle = styled(CardSubtitle)`
    color: ${properties =>
        properties.theme.isDark ? properties.theme.colors.text.dark : properties.theme.colors.grey.light};
`

export const CardOverviewText = styled(CardText)`
    font-size: 48px;
    font-weight: 500;
    color: ${properties => properties.theme.colors.primary.main};
    @media only screen and (max-width: 769px) {
        font-size: 36px;
    }
`
