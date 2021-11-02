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
    return (
        <>
            <TeacherBreadcrumbTitle>{sectionTitle}</TeacherBreadcrumbTitle>
            <TeacherBreadcrumb>
                {sectionLinks.length > 0 ? (
                    sectionLinks.map(link => (
                        <TeacherBreadcrumbItem key={link.linkTitle}>
                            <TeacherBreadcrumbLink to={`${url}${link.linkPath}`}>
                                {link.linkTitle}
                            </TeacherBreadcrumbLink>
                        </TeacherBreadcrumbItem>
                    ))
                ) : (
                    <>
                        <TeacherBreadcrumbItem>
                            <TeacherBreadcrumbLink to={`${url}/`}>Teacher App</TeacherBreadcrumbLink>
                            <TeacherBreadcrumbItem active>Home</TeacherBreadcrumbItem>
                        </TeacherBreadcrumbItem>
                    </>
                )}
                <TeacherBreadcrumbItem active>{sectionTitle}</TeacherBreadcrumbItem>
            </TeacherBreadcrumb>
            <TeacherSeparator />
        </>
    )
}

export default TeacherHeading
