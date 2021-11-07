const toggleFullScreen = (): void => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }
}

export default toggleFullScreen
