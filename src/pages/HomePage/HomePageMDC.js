/* eslint-disable no-console */
/* eslint-disable no-undef */

function mdcRunHomePageScripts() {
    const linkButtons = document.querySelectorAll('.button-is-ripple')
    if (linkButtons.length > 0) {
        for (const element of linkButtons) {
            mdc.ripple.MDCRipple.attachTo(element)
        }
    }

    const mdcList = document.querySelector('.mdc-list')
    if (mdcList) {
        const MDCList = mdc.list.MDCList
        const list = new MDCList(mdcList)
        list.vertical
    }
}

export default mdcRunHomePageScripts
