import styled from 'styled-components'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export const TeacherBreadcrumbTitle = styled.h1``

export const TeacherBreadcrumb = styled(Breadcrumb)``

export const TeacherBreadcrumbItem = styled(BreadcrumbItem)`
    a {
        text-decoration: none;
        color: ${properties => properties.theme.colors.text};
        &:hover {
            color: ${properties => properties.theme.colors.primary.main};
        }
    }
    &.active::before {
        float: left;
        padding-right: 0.5rem;
        color: #6c757d;
        content: var(--bs-breadcrumb-divider, '|');
    }
`

export const TeacherBreadcrumbLink = styled(Link)``

export const TeacherSeparator = styled.div`
    margin-bottom: 2rem !important;
    border-bottom: 1px solid ${properties => properties.theme.colors.grey.light};
`
