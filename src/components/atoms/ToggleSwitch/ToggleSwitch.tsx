import React from 'react'
import { ToggleSwitchInput, ToggleSwitchLabel, ToggleSwitchSlider } from './styles'

const ToggleSwitch: React.FC = () => {
    return (
        <ToggleSwitchLabel className="switch">
            <ToggleSwitchInput type="checkbox" />
            <ToggleSwitchSlider className="slider round"></ToggleSwitchSlider>
        </ToggleSwitchLabel>
    )
}

export default ToggleSwitch
