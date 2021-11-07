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
    const totalQuestions = React.useRef(0)
    const totalLessons = React.useRef(0)

    const locationPath = window.location.pathname
    const arrayString = locationPath.split('/')
    const LENGTH_ENDS_WITH_QUESTION = 37
    const locationString =
        locationPath.endsWith('question', LENGTH_ENDS_WITH_QUESTION) || locationPath.endsWith('result')
            ? arrayString[arrayString.length - __TWO__]
            : arrayString[arrayString.length - 1]
    const lessonPosition = Number.parseInt(locationString[locationString.length - 1])

    const getAllLessonSectionLinks = (_breadcrumbTitle: string, breadcrumbLinks: SectionLink[]) => {
        const fixedArrayLinks = [...breadcrumbLinks.slice(0, -1)]

        totalLessons.current = lessonPosition

        for (let lessonsCount = 1; lessonsCount <= lessonPosition; lessonsCount++) {
            fixedArrayLinks.push({ linkTitle: `Lesson${lessonsCount}`, linkPath: `/lesson${lessonsCount}` })
        }
        return fixedArrayLinks
    }

    const fixedBreadcrumbPath = (breadcrumbTitle: string, breadcrumbLinks: SectionLink[]) => {
        if (breadcrumbTitle === 'Home') {
            return breadcrumbLinks
        }
        if (breadcrumbTitle.startsWith('Lesson')) {
            const fixedArrayLinks = [...breadcrumbLinks]

            totalLessons.current = lessonPosition

            lessonPosition && fixedArrayLinks.pop()

            for (let lessonsCount = 1; lessonsCount <= totalLessons.current; lessonsCount++) {
                fixedArrayLinks.push({ linkTitle: `Lesson${lessonsCount}`, linkPath: `/lesson${lessonsCount}` })
            }
            return fixedArrayLinks
        }

        if (breadcrumbTitle.startsWith('Question')) {
            const fixedArrayLinks = getAllLessonSectionLinks(sectionTitle, sectionLinks)
            const questionPosition = Number.parseInt(breadcrumbTitle[breadcrumbTitle.length - 1])

            totalQuestions.current = questionPosition

            for (let questionsCount = 1; questionsCount <= questionPosition; questionsCount++) {
                fixedArrayLinks.push({ linkTitle: `Question${questionsCount}`, linkPath: `/question${questionsCount}` })
            }
            return fixedArrayLinks
        }
        if (breadcrumbTitle === 'Result') {
            const fixedArrayLinks = getAllLessonSectionLinks(`Lesson${lessonPosition - 1}`, sectionLinks)
            const resultArrayLinks = [...fixedArrayLinks, { linkTitle: 'Result', linkPath: '/result' }]
            return resultArrayLinks
        }
        const fixedArrayLinks = getAllLessonSectionLinks(sectionTitle, sectionLinks)
        return fixedArrayLinks
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
