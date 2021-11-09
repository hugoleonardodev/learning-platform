import React from 'react'

/**
 * A hook that allows to conditionally render components with the screen size.
 * @param none
 * @returns an array with the current `width` and `height` of the screen
 * @example
 * import { useWindowSize } from 'common/hooks'
 *
 * const CurrentWindowSize: React.FC = () => {
 *  const [width, height] = useWindowSize()
 *  return (
 *      <div>
 *         width: {width}
 *         height: {height}
 *      </div>
 *  )
 * }
 * @see https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
 */
const useWindowSize = (): number[] => {
    const [size, setSize] = React.useState([0, 0])
    React.useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}

export default useWindowSize
