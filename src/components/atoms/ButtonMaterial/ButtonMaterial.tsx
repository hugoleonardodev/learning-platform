import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
// import mergeRefs from 'react-merge-refs'

type ButtonMaterialProperties = ButtonHTMLAttributes<HTMLButtonElement> & {
    isContainend?: boolean
    isRipple?: boolean
    rippleClass?: string // the unique custom className for the button
    hasIcon?: boolean
    iconName?: string // https://fonts.google.com/icons?selected=Material+Icons
    iconPosition?: 'start' | 'end'
}

const ButtonMaterial = forwardRef<HTMLButtonElement, ButtonMaterialProperties>(
    (
        {
            className,
            children,
            isContainend = false,
            isRipple = false,
            rippleClass = '',
            hasIcon = false,
            iconName = '',
            iconPosition,
            ...properties
        },
        reference,
    ) => {
        const buttonMaterialClasses = clsx(
            `${rippleClass} mdc-button mdc-button--touch`,
            { 'mdc-button--raised': isContainend },
            { 'button-is-ripple': isRipple },
            className,
        )
        return (
            <div className="mdc-touch-target-wrapper">
                <button className={buttonMaterialClasses} {...properties} ref={reference}>
                    {isRipple && <div className="mdc-button__ripple" />}

                    {hasIcon && iconPosition === 'start' && (
                        <i className="material-icons mdc-button__icon" aria-hidden="true">
                            {iconName}
                        </i>
                    )}

                    <span className="mdc-button__label">{children}</span>

                    {hasIcon && iconPosition === 'end' && (
                        <i className="material-icons mdc-button__icon" aria-hidden="true">
                            {iconName}
                        </i>
                    )}

                    <div className="mdc-button__touch" />
                </button>
            </div>
        )
    },
)

ButtonMaterial.displayName = 'ButtonMaterial'

export default ButtonMaterial
