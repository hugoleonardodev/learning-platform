import React from 'react'
import { useRouteMatch } from 'react-router'

import TeacherHeader from 'components/molecules/TeacherHeader'

import { fixedUrl } from 'common/functions'

import { ReactComponent as DashboardIcon } from 'common/assets/dashboard.svg'
import { ReactComponent as ProfileIcon } from 'common/assets/profile.svg'
import { ReactComponent as LessonsIcon } from 'common/assets/lessons.svg'

import {
    MainContent,
    MainSection,
    VertSideNav,
    VertSideNavItem,
    VertSideNavItemSelector,
    VertSideNavLink,
} from './factory.styles'

const TeacherApp: React.FC = ({ children }) => {
    const [sideMenu, toggleSideMenu] = React.useState(false)
    const { url } = useRouteMatch()
    const locationPathname = window.location.pathname
    const selectedRoute = locationPathname.split('/')
    const selectedItem = selectedRoute[selectedRoute.length - 1]

    return (
        <>
            <TeacherHeader toggleSideMenu={toggleSideMenu} sideMenu={sideMenu} selectedItem={selectedItem} />
            <MainContent sideMenu={sideMenu}>
                <VertSideNav>
                    <VertSideNavLink to={`${fixedUrl(url)}/`} isselected={selectedItem === ''}>
                        <VertSideNavItem isselected={selectedItem === ''}>
                            <DashboardIcon />
                            Home
                        </VertSideNavItem>
                        <VertSideNavItemSelector isselected={selectedItem === ''} />
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
