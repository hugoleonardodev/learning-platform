import React from 'react'
import { useDispatch } from 'react-redux'

import HomeMainMaterial from 'layouts/HomeMainMaterial'

import { promiseThunkAction } from 'store/actions/quotesActions'

import mdcRunHomePageScripts from './HomePageMDC'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(promiseThunkAction())
        mdcRunHomePageScripts()
    }, [dispatch])

    return (
        <main>
            <HomeMainMaterial />
        </main>
    )
}

export default HomePage
