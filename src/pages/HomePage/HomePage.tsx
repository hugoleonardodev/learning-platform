import React from 'react'
import { useDispatch } from 'react-redux'

import HomeLayout from 'layouts/HomeLayout'

import { promiseThunkAction } from 'store/actions/quotesActions'

const HomePage: React.FC = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(promiseThunkAction())
    }, [dispatch])

    return <HomeLayout />
}
export default HomePage
