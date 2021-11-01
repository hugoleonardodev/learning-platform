import React from 'react'
import { useRouteMatch } from 'react-router'

import TeacherHeader from 'components/molecules/TeacherHeader'

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
} from './styles'

const fixedUrl = (urlToFix: string) => {
    if (urlToFix.endsWith('/')) {
        return urlToFix.slice(0, -1)
    }
    return urlToFix
}

const TeacherApp: React.FC = ({ children }) => {
    const [sideMenu, toggleSideMenu] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState('home')
    const { url } = useRouteMatch()

    return (
        <>
            <TeacherHeader toggleSideMenu={toggleSideMenu} sideMenu={sideMenu} />
            <MainContent sideMenu={sideMenu}>
                <VertSideNav>
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/`}
                        onClick={() => setSelectedItem('home')}
                        isSelected={selectedItem === 'home'}
                    >
                        <VertSideNavItem isSelected={selectedItem === 'home'}>
                            <DashboardIcon />
                            Home
                        </VertSideNavItem>
                        <VertSideNavItemSelector isSelected={selectedItem === 'home'} />
                    </VertSideNavLink>
                    <div className="divider" />
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/profile`}
                        onClick={() => setSelectedItem('profile')}
                        isSelected={selectedItem === 'profile'}
                    >
                        <VertSideNavItem isSelected={selectedItem === 'profile'}>
                            <ProfileIcon />
                            Profile
                        </VertSideNavItem>
                        <VertSideNavItemSelector isSelected={selectedItem === 'profile'} />
                    </VertSideNavLink>
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/lessons`}
                        onClick={() => setSelectedItem('lessons')}
                        isSelected={selectedItem === 'lessons'}
                    >
                        <VertSideNavItem isSelected={selectedItem === 'lessons'}>
                            <LessonsIcon />
                            Lessons
                        </VertSideNavItem>
                        <VertSideNavItemSelector isSelected={selectedItem === 'lessons'} />
                    </VertSideNavLink>
                </VertSideNav>
                <MainSection sideMenu={sideMenu}>{children}</MainSection>
            </MainContent>
        </>
    )
}

export default TeacherApp
