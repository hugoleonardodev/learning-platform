import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { teacherSwitchTheme } from 'store/actions/teachersActions'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

import { ToggleSwitchInput, ToggleSwitchLabel, ToggleSwitchSlider } from './styles'

const ToggleSwitch: React.FC = () => {
    const dispatch = useDispatch()
    const switchTheme = useSelector((state: RootStateWithReducers) => state.teachers.switchTheme)
    const handleSwitch = () => {
        dispatch(teacherSwitchTheme(!switchTheme))
    }
    return (
        <ToggleSwitchLabel className="switch">
            <ToggleSwitchInput type="checkbox" onClick={handleSwitch} />
            <ToggleSwitchSlider className="slider round"></ToggleSwitchSlider>
        </ToggleSwitchLabel>
    )
}

export default ToggleSwitch
