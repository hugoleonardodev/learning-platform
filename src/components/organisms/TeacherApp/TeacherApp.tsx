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
import { fixedUrl } from 'common/functions'

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
                        isselected={selectedItem === 'home'}
                    >
                        <VertSideNavItem isselected={selectedItem === 'home'}>
                            <DashboardIcon />
                            Home
                        </VertSideNavItem>
                        <VertSideNavItemSelector isselected={selectedItem === 'home'} />
                    </VertSideNavLink>
                    <div className="divider" />
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/profile`}
                        onClick={() => setSelectedItem('profile')}
                        isselected={selectedItem === 'profile'}
                    >
                        <VertSideNavItem isselected={selectedItem === 'profile'}>
                            <ProfileIcon />
                            Profile
                        </VertSideNavItem>
                        <VertSideNavItemSelector isselected={selectedItem === 'profile'} />
                    </VertSideNavLink>
                    <VertSideNavLink
                        to={`${fixedUrl(url)}/lessons`}
                        onClick={() => setSelectedItem('lessons')}
                        isselected={selectedItem === 'lessons'}
                    >
                        <VertSideNavItem isselected={selectedItem === 'lessons'}>
                            <LessonsIcon />
                            Lessons
                        </VertSideNavItem>
                        <VertSideNavItemSelector isselected={selectedItem === 'lessons'} />
                    </VertSideNavLink>
                </VertSideNav>
                <MainSection sideMenu={sideMenu}>{children}</MainSection>
            </MainContent>
        </>
    )
}

export default TeacherApp
