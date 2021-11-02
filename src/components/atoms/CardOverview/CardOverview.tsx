import React from 'react'
import { useRouteMatch } from 'react-router'

import { fixedUrl } from 'common/functions'

import {
    CardOverviewContainer,
    CardOverviewSubTitle,
    CardOverviewText,
    CardOverviewTitle,
    CardOverviewWrapperLink,
} from './factory.styles'

export interface CardOverviewProperties {
    iconTitle: ReturnType<React.FC<React.SVGProps<SVGSVGElement>>>
    subTitle: string
    text: number | string
    linkPath: string
}

const CardOverview: React.FC<CardOverviewProperties> = ({ iconTitle, subTitle, text, linkPath }) => {
    const { url } = useRouteMatch()
    return (
        <CardOverviewWrapperLink to={`${fixedUrl(url)}${linkPath}`}>
            <CardOverviewContainer>
                <CardOverviewTitle>{iconTitle}</CardOverviewTitle>
                <CardOverviewSubTitle>{subTitle}</CardOverviewSubTitle>
                <CardOverviewText>{text}</CardOverviewText>
            </CardOverviewContainer>
        </CardOverviewWrapperLink>
    )
}

export default CardOverview
