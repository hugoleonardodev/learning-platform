import React from 'react'
import { useRouteMatch } from 'react-router'

import {
    MainContent,
    MainSection,
    VertSideNav,
    VertSideNavItem,
    VertSideNavItemSelector,
    VertSideNavLink,
} from './factory.styles'

import { fixedUrl } from 'common/functions'

import TeacherHeader from 'components/molecules/TeacherHeader'

import { ReactComponent as DashboardIcon } from 'common/assets/dashboard.svg'
import { ReactComponent as ProfileIcon } from 'common/assets/profile.svg'
import { ReactComponent as LessonsIcon } from 'common/assets/lessons.svg'

const TeacherApp: React.FC = ({ children }) => {
    const [sideMenu, toggleSideMenu] = React.useState(false)
    const { url } = useRouteMatch()
    const locationPathname = window.location.pathname
    return (
        <>
            <TeacherHeader toggleSideMenu={toggleSideMenu} sideMenu={sideMenu} />
            <MainContent sideMenu={sideMenu}>
                <VertSideNav sideMenu={sideMenu}>
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/`}
                        isselected={locationPathname.endsWith('teacher-app/') ? 'true' : 'false'}
                    >
                        <VertSideNavItem isselected={locationPathname.endsWith('teacher-app/') ? 'true' : 'false'}>
                            <DashboardIcon />
                            Home
                        </VertSideNavItem>
                        <VertSideNavItemSelector
                            isselected={locationPathname.endsWith('teacher-app/') ? 'true' : 'false'}
                        />
                    </VertSideNavLink>
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/lessons`}
                        isselected={locationPathname.includes('lessons') ? 'true' : 'false'}
                    >
                        <VertSideNavItem isselected={locationPathname.includes('lessons') ? 'true' : 'false'}>
                            <LessonsIcon />
                            Lessons
                        </VertSideNavItem>
                        <VertSideNavItemSelector isselected={locationPathname.includes('lessons') ? 'true' : 'false'} />
                    </VertSideNavLink>
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/profile`}
                        isselected={locationPathname.includes('profile') ? 'true' : 'false'}
                    >
                        <VertSideNavItem isselected={locationPathname.includes('profile') ? 'true' : 'false'}>
                            <ProfileIcon />
                            Profile
                        </VertSideNavItem>
                        <VertSideNavItemSelector isselected={locationPathname.includes('profile') ? 'true' : 'false'} />
                    </VertSideNavLink>
                </VertSideNav>
                <MainSection sideMenu={sideMenu}>{children}</MainSection>
            </MainContent>
        </>
    )
}

export default TeacherApp
