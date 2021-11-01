import React from 'react'

import {
    TeacherDropdownItem,
    TeacherDropdownMenu,
    TeacherDropdownToggle,
    TeacherHeaderContainer,
    TeacherNav,
    TeacherNavBar,
    TeacherNavBarText,
    TeacherNavBarToggler,
    TeacherNavBrand,
    TeacherNavCollapse,
    TeacherNavItem,
    TeacherNavLink,
    TeacherUncontrolledDropdown,
} from './styles'

type TeacherHeaderProperties = {
    sideMenu: boolean
    toggleSideMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const TeacherHeader: React.FC<TeacherHeaderProperties> = ({ toggleSideMenu, sideMenu }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <TeacherHeaderContainer>
            <TeacherNavBar color="dark" dark expand="md">
                <TeacherNavBarToggler onClick={() => toggleSideMenu(!sideMenu)} />
                <TeacherNavBrand href="/">TIME TO PLAY</TeacherNavBrand>
                <TeacherNavBarToggler onClick={() => setIsOpen(!isOpen)} />
                <TeacherNavCollapse isOpen={isOpen} navbar>
                    <TeacherNav className="me-auto" navbar>
                        <TeacherNavItem>
                            <TeacherNavLink href="/components/">Components</TeacherNavLink>
                        </TeacherNavItem>
                        <TeacherNavItem>
                            <TeacherNavLink href="https://github.com/reactstrap/reactstrap">GitHub</TeacherNavLink>
                        </TeacherNavItem>
                        <TeacherUncontrolledDropdown inNavbar nav>
                            <TeacherDropdownToggle caret nav>
                                Options
                            </TeacherDropdownToggle>
                            <TeacherDropdownMenu end>
                                <TeacherDropdownItem>Option 1</TeacherDropdownItem>
                                <TeacherDropdownItem>Option 2</TeacherDropdownItem>
                                <TeacherDropdownItem divider />
                                <TeacherDropdownItem>Reset</TeacherDropdownItem>
                            </TeacherDropdownMenu>
                        </TeacherUncontrolledDropdown>
                    </TeacherNav>
                    <TeacherNavBarText>Simple Text</TeacherNavBarText>
                </TeacherNavCollapse>
            </TeacherNavBar>
        </TeacherHeaderContainer>
    )
}

export default TeacherHeader
