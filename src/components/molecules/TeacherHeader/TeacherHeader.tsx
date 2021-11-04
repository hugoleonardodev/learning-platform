import React from 'react'
// import { useRouteMatch } from 'react-router'

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
    // TeacherNavItem,
    TeacherNavLink,
    // TeacherNavLinkButton,
    TeacherUncontrolledDropdown,
} from './factory.styles'

import { ReactComponent as HamburgerIcon } from 'common/assets/hamburger.svg'
import { ReactComponent as MenuListIcon } from 'common/assets/menu_list.svg'
// import { ReactComponent as NotificationsIcon } from 'common/assets/notifications.svg'
// import { ReactComponent as FullScreenIcon } from 'common/assets/full_screen.svg'
import { ReactComponent as PersonIcon } from 'common/assets/person.svg'

import TimeToPlayLogo from 'common/assets/time-to-play-logo.jpeg'
import { useHistory } from 'react-router'
// import ToggleSwitch from 'components/atoms/ToggleSwitch'
// import { fixedUrl } from 'common/functions'

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
    // const { url } = useRouteMatch()
    const history = useHistory()
    return (
        <TeacherHeaderContainer>
            <TeacherNavBar expand="md">
                <TeacherNavLink onClick={() => toggleSideMenu(!sideMenu)}>
                    <HamburgerIcon />
                </TeacherNavLink>
                <TeacherNavBrand to="/teacher-app/lessons" className="navbar-brand">
                    <TeacherNavBrandLogo src={TimeToPlayLogo} alt="Time To Play" />
                    TIME TO PLAY
                </TeacherNavBrand>
                <TeacherNavLink istoggle="true" onClick={() => setIsOpen(!isOpen)}>
                    <MenuListIcon />
                </TeacherNavLink>
                <TeacherNavCollapse isOpen={isOpen} navbar>
                    <TeacherNav className="me-auto" navbar>
                        {/* <TeacherNavItem>
                            <ToggleSwitch />
                        </TeacherNavItem> */}
                        {/* <TeacherNavItem>
                            <TeacherNavLinkButton
                                to={`${fixedUrl(url)}/messages`}
                                isselected={selectedItem === 'messages'}
                            >
                                <NotificationsIcon id="notifications-icon" />
                            </TeacherNavLinkButton>
                        </TeacherNavItem> */}
                        {/* <TeacherNavItem>
                            <TeacherNavLink>
                                <FullScreenIcon id="full-screen-icon" />
                            </TeacherNavLink>
                        </TeacherNavItem> */}
                        <TeacherUncontrolledDropdown inNavbar nav>
                            <TeacherDropdownToggle nav>
                                <PersonIcon id="person-icon" />
                            </TeacherDropdownToggle>
                            <TeacherDropdownMenu end>
                                {/* <TeacherDropdownItem>Perfil</TeacherDropdownItem> */}
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
