import styled from 'styled-components'

export const ToggleSwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 48px;
    height: 24px;
    color: ${properties => properties.theme.colors.text};
    background: ${properties => properties.theme.colors.background};
    margin-right: 16px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`
export const ToggleSwitchSlider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${properties => properties.theme.colors.background};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 1px 2px 0 rgb(0 47 38 / 15%), 0 1px 3px 1px rgb(0 47 38 / 15%);
    &::before {
        background-color: ${properties => properties.theme.colors.background};
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        left: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        box-shadow: 0 1px 2px 0 rgb(0 47 38 / 15%), 0 1px 3px 1px rgb(0 47 38 / 15%);
    }
    &.slider.round {
        border-radius: 24px;
    }
    &.slider.round::before {
        border-radius: 50%;
    }
`

export const ToggleSwitchInput = styled.input`
    &:checked + ${ToggleSwitchSlider} {
        background-color: ${properties => properties.theme.colors.primary.main};
    }
    &:focus + ${ToggleSwitchSlider} {
        box-shadow: 0 0 1px ${properties => properties.theme.colors.grey.main};
    }
    &:checked + ${ToggleSwitchSlider}::before {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
    }
`
