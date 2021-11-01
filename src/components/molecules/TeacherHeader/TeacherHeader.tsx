import React from 'react'
import { useRouteMatch } from 'react-router'

import {
    TeacherDropdownItem,
    TeacherDropdownMenu,
    TeacherDropdownToggle,
    TeacherHeaderContainer,
    TeacherNav,
    TeacherNavBar,
    TeacherNavBrand,
    TeacherNavBrandLogo,
    TeacherNavCollapse,
    TeacherNavItem,
    TeacherNavLink,
    TeacherNavLinkButton,
    TeacherUncontrolledDropdown,
} from './factory.styles'

import { ReactComponent as HamburgerIcon } from 'common/assets/hamburger.svg'
import { ReactComponent as MenuListIcon } from 'common/assets/menu_list.svg'
import { ReactComponent as NotificationsIcon } from 'common/assets/notifications.svg'
import { ReactComponent as FullScreenIcon } from 'common/assets/full_screen.svg'
import { ReactComponent as FaceIcon } from 'common/assets/face.svg'

import TimeToPlayLogo from 'common/assets/time-to-play-logo.jpeg'
import ToggleSwitch from 'components/atoms/ToggleSwitch'
import { fixedUrl } from 'common/functions'

type TeacherHeaderProperties = {
    sideMenu: boolean
    toggleSideMenu: React.Dispatch<React.SetStateAction<boolean>>
    selectedItem: string
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>
}

const TeacherHeader: React.FC<TeacherHeaderProperties> = ({
    toggleSideMenu,
    sideMenu,
    setSelectedItem,
    selectedItem,
}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const { url } = useRouteMatch()
    return (
        <TeacherHeaderContainer>
            <TeacherNavBar expand="md">
                <TeacherNavLink onClick={() => toggleSideMenu(!sideMenu)}>
                    <HamburgerIcon />
                </TeacherNavLink>
                <TeacherNavBrand to="/" className="navbar-brand">
                    <TeacherNavBrandLogo src={TimeToPlayLogo} alt="Time To Play" />
                    TIME TO PLAY
                </TeacherNavBrand>
                <TeacherNavLink istoggle="true" onClick={() => setIsOpen(!isOpen)}>
                    <MenuListIcon />
                </TeacherNavLink>
                <TeacherNavCollapse isOpen={isOpen} navbar>
                    <TeacherNav className="me-auto" navbar>
                        <TeacherNavItem>
                            <ToggleSwitch />
                        </TeacherNavItem>
                        <TeacherNavItem onClick={() => setSelectedItem('messages')}>
                            <TeacherNavLinkButton
                                to={`${fixedUrl(url)}/messages`}
                                isselected={selectedItem === 'messages'}
                            >
                                <NotificationsIcon id="notifications-icon" />
                            </TeacherNavLinkButton>
                        </TeacherNavItem>
                        <TeacherNavItem>
                            <TeacherNavLink>
                                <FullScreenIcon id="full-screen-icon" />
                            </TeacherNavLink>
                        </TeacherNavItem>
                        <TeacherUncontrolledDropdown inNavbar nav>
                            <TeacherDropdownToggle nav>
                                <FaceIcon id="my-face-icon" />
                            </TeacherDropdownToggle>
                            <TeacherDropdownMenu end>
                                <TeacherDropdownItem>Perfil</TeacherDropdownItem>
                                <TeacherDropdownItem divider />
                                <TeacherDropdownItem>Sair</TeacherDropdownItem>
                            </TeacherDropdownMenu>
                        </TeacherUncontrolledDropdown>
                    </TeacherNav>
                </TeacherNavCollapse>
            </TeacherNavBar>
        </TeacherHeaderContainer>
    )
}

export default TeacherHeader
