import React from 'react'
import { useRouteMatch } from 'react-router'

import {
    TeacherBreadcrumb,
    TeacherBreadcrumbItem,
    TeacherBreadcrumbLink,
    TeacherBreadcrumbTitle,
    TeacherSeparator,
} from './factory.styles'

type SectionLink = {
    linkTitle: string
    linkPath: string
}

type TeacherHeadingProperties = {
    sectionTitle: string
    sectionLinks: SectionLink[]
}

const TeacherHeading: React.FC<TeacherHeadingProperties> = ({ sectionTitle, sectionLinks }) => {
    const { url } = useRouteMatch()

    const fixedBreadcrumbPath = (breadcrumbTitle: string, breadcrumbLinks: SectionLink[]) => {
        if (breadcrumbTitle.startsWith('Question')) {
            const fixedArrayLinks = [...breadcrumbLinks]
            const urlArray = url.split('/')
            const lessonString = urlArray[urlArray.length - __TWO__]
            const lessonPosition = Number.parseInt(lessonString[lessonString.length - 1])
            const questionPosition = Number.parseInt(breadcrumbTitle[breadcrumbTitle.length - 1])

            fixedArrayLinks.push({ linkTitle: `Lesson${lessonPosition}`, linkPath: `/${sectionTitle}` })

            for (let questionsCount = 1; questionsCount <= questionPosition; questionsCount++) {
                fixedArrayLinks.push({ linkTitle: `Question${questionsCount}`, linkPath: `/question${questionsCount}` })
            }
            return fixedArrayLinks
        }
        return breadcrumbLinks
    }

    const fixedSectionLinks = fixedBreadcrumbPath(sectionTitle, sectionLinks)

    return (
        <>
            <TeacherBreadcrumbTitle>{sectionTitle}</TeacherBreadcrumbTitle>
            <TeacherBreadcrumb>
                {fixedSectionLinks.map((sectionLink, index) =>
                    index !== fixedSectionLinks.length - 1 ? (
                        <TeacherBreadcrumbItem active key={sectionLink.linkTitle}>
                            {sectionLink.linkTitle}
                        </TeacherBreadcrumbItem>
                    ) : (
                        <TeacherBreadcrumbItem active key={sectionLink.linkTitle}>
                            <TeacherBreadcrumbLink to={`${url}${sectionLink.linkPath}`}>
                                {sectionLink.linkTitle}
                            </TeacherBreadcrumbLink>
                        </TeacherBreadcrumbItem>
                    ),
                )}
            </TeacherBreadcrumb>
            <TeacherSeparator />
        </>
    )
}

export default TeacherHeading
