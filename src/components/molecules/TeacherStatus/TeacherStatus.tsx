import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LessonsStatus from 'components/atoms/LessonsStatus'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'
import {
    ContinueTrainingButton,
    TeacherStatusCardGroup,
    TeacherStatusCol,
    TeacherStatusContainer,
    TeacherStatusRow,
    TeacherStatusTitle,
} from './factory.styles'

const TeacherStatus: React.FC = () => {
    const teacherIsAproved = useSelector((state: RootStateWithReducers) => state.teachers.teacherIsAproved)
    const history = useHistory()
    return (
        <>
            <TeacherStatusTitle>Status</TeacherStatusTitle>
            <TeacherStatusContainer>
                <TeacherStatusRow xs="1">
                    <TeacherStatusCardGroup>
                        <TeacherStatusCol>
                            <LessonsStatus />
                        </TeacherStatusCol>
                        {!teacherIsAproved && (
                            <TeacherStatusCol>
                                <ContinueTrainingButton onClick={() => history.push('/teacher-app/lessons')}>
                                    Continuar Treinamento
                                </ContinueTrainingButton>
                            </TeacherStatusCol>
                        )}
                    </TeacherStatusCardGroup>
                </TeacherStatusRow>
            </TeacherStatusContainer>
        </>
    )
}

export default TeacherStatus
