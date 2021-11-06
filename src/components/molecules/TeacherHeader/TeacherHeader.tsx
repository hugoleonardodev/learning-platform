import React from 'react'
import { useRouteMatch } from 'react-router'

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
    // TeacherNavLinkButton,
    TeacherUncontrolledDropdown,
} from './factory.styles'

import { ReactComponent as HamburgerIcon } from 'common/assets/hamburger.svg'
import { ReactComponent as ExpandMoreIcon } from 'common/assets/expand_more.svg'
import { ReactComponent as NotificationsIcon } from 'common/assets/notifications.svg'
import { ReactComponent as FullScreenIcon } from 'common/assets/full_screen.svg'
import { ReactComponent as PersonIcon } from 'common/assets/person.svg'

import TimeToPlayLogo from 'common/assets/time-to-play-logo.jpeg'
import { useHistory } from 'react-router'
import ToggleSwitch from 'components/atoms/ToggleSwitch'
import { fixedUrl } from 'common/functions'
import { useSelector } from 'react-redux'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

type TeacherHeaderProperties = {
    sideMenu: boolean
    toggleSideMenu: React.Dispatch<React.SetStateAction<boolean>>
    selectedItem: string
    setSelectedItem?: React.Dispatch<React.SetStateAction<string>>
}

const TeacherHeader: React.FC<TeacherHeaderProperties> = ({
    toggleSideMenu,
    sideMenu,
    // setSelectedItem,
    // selectedItem,
}) => {
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
                    <TeacherNavBrandLogo src={TimeToPlayLogo} alt="Time To Play" />
                    TIME TO PLAY
                </TeacherNavBrand>
                <TeacherNavLink istoggle="true" onClick={() => setIsOpen(!isOpen)}>
                    <ExpandMoreIcon id="menu-list-icon" />
                </TeacherNavLink>
                <TeacherNavCollapse isOpen={isOpen} navbar>
                    <TeacherNav className="me-auto" navbar>
                        <TeacherNavItem>
                            <ToggleSwitch />
                        </TeacherNavItem>
                        {/* <TeacherNavItem>
                            <TeacherNavLinkButton
                                to={`${fixedUrl(url)}/messages`}
                                isselected={selectedItem === 'messages'}
                            >
                                <NotificationsIcon id="notifications-icon" />
                            </TeacherNavLinkButton>
                        </TeacherNavItem> */}
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
                            <TeacherNavLink>
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
