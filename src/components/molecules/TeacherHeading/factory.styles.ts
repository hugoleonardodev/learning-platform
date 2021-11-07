import styled from 'styled-components'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export const TeacherBreadcrumbTitle = styled.h1`
    color: ${properties => properties.theme.colors.text.main};
`

export const TeacherBreadcrumb = styled(Breadcrumb)``

export const TeacherBreadcrumbItem = styled(BreadcrumbItem)`
    a {
        text-decoration: none;
        color: ${properties => properties.theme.colors.primary.main};
        &:hover {
            color: ${properties => properties.theme.colors.primary.light};
        }
    }
    &.active::before {
        float: left;
        padding-right: 0.5rem;
        color: ${properties => properties.theme.colors.grey.light};
        content: var(--bs-breadcrumb-divider, '|');
    }
`

export const TeacherBreadcrumbLink = styled(Link)``

export const TeacherSeparator = styled.div`
    margin-bottom: 2rem !important;
    border-bottom: 1px solid ${properties => properties.theme.colors.grey.light};
`
