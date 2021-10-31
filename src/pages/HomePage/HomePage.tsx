import React from 'react'
import { useDispatch } from 'react-redux'

import { promiseThunkAction } from 'store/actions/quotesActions'

import HomeLayout from 'layouts/HomeLayout/HomeLayout'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(promiseThunkAction())
    }, [dispatch])

    return <HomeLayout />
}
export default HomePage
