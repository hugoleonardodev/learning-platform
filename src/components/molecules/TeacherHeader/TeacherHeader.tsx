import React from 'react'
import { useRouteMatch, useHistory } from 'react-router'
import { useSelector } from 'react-redux'

import {
    TeacherDropdownItem,
    TeacherDropdownItemHeader,
    TeacherDropdownMenu,
    TeacherDropdownToggle,
    TeacherHeaderContainer,
    TeacherMessagesBadge,
    TeacherMessagesDropdownMenu,
    TeacherMessagesUncontrolledDropdown,
    TeacherNav,
    TeacherNavBar,
    TeacherNavBrand,
    TeacherNavBrandLogo,
    TeacherNavCollapse,
    TeacherNavItem,
    TeacherNavLink,
    TeacherUncontrolledDropdown,
} from './factory.styles'

import { ReactComponent as HamburgerIcon } from 'common/assets/hamburger.svg'
import { ReactComponent as ExpandMoreIcon } from 'common/assets/expand_more.svg'
import { ReactComponent as NotificationsIcon } from 'common/assets/notifications.svg'
import { ReactComponent as FullScreenIcon } from 'common/assets/full_screen.svg'
import { ReactComponent as PersonIcon } from 'common/assets/person.svg'

import LearningLogo from 'common/assets/learning_logo.png'
import { fixedUrl, toggleFullScreen } from 'common/functions'

import ToggleSwitch from 'components/atoms/ToggleSwitch'

import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

type TeacherHeaderProperties = {
    sideMenu: boolean
    toggleSideMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const TeacherHeader: React.FC<TeacherHeaderProperties> = ({ toggleSideMenu, sideMenu }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const { url } = useRouteMatch()
    const history = useHistory()
    const teacherMessages = useSelector((state: RootStateWithReducers) => state.teachers.teacherMessages)
    return (
        <TeacherHeaderContainer>
            <TeacherNavBar expand="md">
                <TeacherNavLink ismenu="true" onClick={() => toggleSideMenu(!sideMenu)}>
                    <HamburgerIcon id="hamburger-icon" />
                </TeacherNavLink>
                <TeacherNavBrand to="/teacher-app" className="navbar-brand">
                    <TeacherNavBrandLogo src={LearningLogo} alt="learning-platform" />
                    LEARNING PLATFORM
                </TeacherNavBrand>
                <TeacherNavLink istoggle="true" isactive={isOpen.toString()} onClick={() => setIsOpen(!isOpen)}>
                    <ExpandMoreIcon id="expand-more-icon" />
                </TeacherNavLink>
                <TeacherNavCollapse isOpen={isOpen} navbar>
                    <TeacherNav className="me-auto" navbar>
                        <TeacherNavItem>
                            <ToggleSwitch />
                        </TeacherNavItem>
                        <TeacherMessagesUncontrolledDropdown inNavbar nav>
                            <TeacherDropdownToggle nav>
                                <NotificationsIcon id="notifications-icon" />
                                <TeacherMessagesBadge>{teacherMessages.length}</TeacherMessagesBadge>
                            </TeacherDropdownToggle>
                            <TeacherMessagesDropdownMenu end>
                                <TeacherDropdownItemHeader>Mensagens:</TeacherDropdownItemHeader>
                                <TeacherDropdownItem divider />
                                {teacherMessages.length > 0 ? (
                                    teacherMessages.map((message, index) => (
                                        <div key={message.messageTitle}>
                                            <TeacherDropdownItem
                                                onClick={() => history.push(`${fixedUrl(url)}/messages/${index + 1}`)}
                                            >
                                                {message.messageTitle}
                                            </TeacherDropdownItem>
                                            {index !== teacherMessages.length - 1 && <TeacherDropdownItem divider />}
                                        </div>
                                    ))
                                ) : (
                                    <div />
                                )}
                            </TeacherMessagesDropdownMenu>
                        </TeacherMessagesUncontrolledDropdown>
                        <TeacherNavItem fullscreen="true">
                            <TeacherNavLink onClick={() => toggleFullScreen()}>
                                <FullScreenIcon id="full-screen-icon" />
                            </TeacherNavLink>
                        </TeacherNavItem>
                        <TeacherUncontrolledDropdown inNavbar nav>
                            <TeacherDropdownToggle nav>
                                <PersonIcon id="person-icon" />
                            </TeacherDropdownToggle>
                            <TeacherDropdownMenu end>
                                <TeacherDropdownItemHeader>Professor:</TeacherDropdownItemHeader>
                                <TeacherDropdownItem divider />
                                <TeacherDropdownItem>Perfil</TeacherDropdownItem>
                                <TeacherDropdownItem divider />
                                <TeacherDropdownItem onClick={() => history.push('/')}>Sair</TeacherDropdownItem>
                            </TeacherDropdownMenu>
                        </TeacherUncontrolledDropdown>
                    </TeacherNav>
                </TeacherNavCollapse>
            </TeacherNavBar>
        </TeacherHeaderContainer>
    )
}

export default TeacherHeader
