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
    // const [totalQuestions, setTotalQuestions] = React.useState(0)
    const totalQuestions = React.useRef(0)

    const fixedBreadcrumbPath = (breadcrumbTitle: string, breadcrumbLinks: SectionLink[]) => {
        if (breadcrumbTitle.startsWith('Question')) {
            const fixedArrayLinks = [...breadcrumbLinks]
            // const urlArray = url.split('/')
            // const lessonString = urlArray[urlArray.length - __TWO__]
            // const lessonPosition = Number.parseInt(lessonString[lessonString.length - 1])
            const questionPosition = Number.parseInt(breadcrumbTitle[breadcrumbTitle.length - 1])

            // fixedArrayLinks.push({ linkTitle: `Lesson${lessonPosition}`, linkPath: `/${sectionTitle}` })
            // setTotalQuestions(questionPosition)
            totalQuestions.current = questionPosition
            for (let questionsCount = 1; questionsCount <= questionPosition; questionsCount++) {
                fixedArrayLinks.push({ linkTitle: `Question${questionsCount}`, linkPath: `/question${questionsCount}` })
            }
            return fixedArrayLinks
        }
        if (breadcrumbTitle.startsWith('Result')) {
            const fixedArrayLinks = [...breadcrumbLinks]

            for (let questionsCount = 1; questionsCount <= totalQuestions.current; questionsCount++) {
                fixedArrayLinks.push({ linkTitle: `Question${questionsCount}`, linkPath: `/question${questionsCount}` })
            }
            fixedArrayLinks.push({ linkTitle: 'Result', linkPath: '/result' })

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
