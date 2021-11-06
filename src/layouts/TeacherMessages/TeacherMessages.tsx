import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const TeacherMessages: React.FC = () => {
    const { teacherMessages } = useSelector((state: RootStateWithReducers) => state.teachers)
    const pathLocation = window.location.pathname
    const messagePosition = Number.parseInt(pathLocation[pathLocation.length - 1])
    return (
        <div>
            <h2>{teacherMessages[messagePosition - 1].messageTitle}</h2>
            <h3>{teacherMessages[messagePosition - 1].messageSubTitle}</h3>
            <p>{teacherMessages[messagePosition - 1].messageContent}</p>
            <p>{teacherMessages[messagePosition - 1].messageAuthor}</p>
        </div>
    )
}

export default TeacherMessages
