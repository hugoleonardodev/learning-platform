/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

function mdcRunWorksPageScripts() {
    const buttonRipple = document.querySelector('.button-is-ripple')
    if (buttonRipple) {
        mdc.ripple.MDCRipple.attachTo(buttonRipple)
    }

    const inputFilled = document.querySelector('.mdc-text-field')
    if (inputFilled) {
        const MDCTextField = mdc.textField.MDCTextField
        const textField = new MDCTextField(inputFilled)
    }
}

export default mdcRunWorksPageScripts
