import React from 'react'
import { useSelector } from 'react-redux'

import { LessonsStatusContainer, LessonsStatusText } from './factory.styles'

import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const LessonsStatus: React.FC = () => {
    const teacherIsAproved = useSelector((state: RootStateWithReducers) => state.teachers.teacherIsAproved)
    return (
        <div>
            {teacherIsAproved ? (
                <LessonsStatusContainer>
                    <LessonsStatusText>Aprovado</LessonsStatusText>
                    <LessonsStatusText>Parabéns professor. Você foi aprovado no treinamento.</LessonsStatusText>
                    <LessonsStatusText>
                        Enviamos um e-mail com as datas para agendar a entrevista final.
                    </LessonsStatusText>
                    <LessonsStatusText>Favor conferir também a caixa de spam do seu e-mail.</LessonsStatusText>
                </LessonsStatusContainer>
            ) : (
                <LessonsStatusContainer>
                    <LessonsStatusText>Você precisa concluir o treinamento.</LessonsStatusText>
                    <br />
                    <LessonsStatusText>Clique no botão para continuar.</LessonsStatusText>
                </LessonsStatusContainer>
            )}
        </div>
    )
}

export default LessonsStatus
