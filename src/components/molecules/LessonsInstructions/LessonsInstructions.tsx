import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router'

import {
    LessonsInstructionsButton,
    LessonsInstructionsButtonContainer,
    LessonsInstructionsHeading,
    LessonsInstructionsItem,
    LessonsInstructionsList,
    LessonsInstructionsParagraph,
    LessonsInstructionsSection,
    LessonsInstructionsWelcome,
    LessonsInstructionsWelcomeText,
} from './factory.styles'

import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const LessonsInstructions: React.FC = () => {
    const teacherEmail = useSelector((state: RootStateWithReducers) => state.teachers.teacherEmail)
    const history = useHistory()
    const { path } = useRouteMatch()
    const handleStartTraining = () => {
        history.push(`${path}/lesson1`)
    }
    return (
        <LessonsInstructionsSection>
            <LessonsInstructionsWelcome>
                <LessonsInstructionsWelcomeText>Olá, Professor {teacherEmail}.</LessonsInstructionsWelcomeText>
                <br />
                <LessonsInstructionsWelcomeText>
                    Seja bem vindo a plataforma Time To Play.
                </LessonsInstructionsWelcomeText>
            </LessonsInstructionsWelcome>
            <LessonsInstructionsHeading>Informações sobre o treinamento:</LessonsInstructionsHeading>
            <LessonsInstructionsList>
                <LessonsInstructionsItem>
                    <LessonsInstructionsWelcomeText>
                        Os conteúdos devem ser assistidos do início ao fim, com a opção de pausa, porém deslogar da
                        plataforma reinicia o progresso do vídeo;
                    </LessonsInstructionsWelcomeText>
                </LessonsInstructionsItem>
                <LessonsInstructionsItem>
                    <LessonsInstructionsWelcomeText>
                        Ao final de cada vídeo será exibido um conjunto de perguntas. Acertando 90% das respostas, você
                        acessa a próxima etapa;
                    </LessonsInstructionsWelcomeText>
                </LessonsInstructionsItem>
                <LessonsInstructionsItem>
                    <LessonsInstructionsWelcomeText>
                        Finalizando o último vídeo do treinamento, você receberá um e-mail para o agendamento do teste
                        final;
                    </LessonsInstructionsWelcomeText>
                </LessonsInstructionsItem>
                <LessonsInstructionsItem>
                    <LessonsInstructionsWelcomeText>
                        Após aprovado, será enviado um email com as datas para agendamento da entrevista final;
                    </LessonsInstructionsWelcomeText>
                </LessonsInstructionsItem>
                <LessonsInstructionsItem>
                    <LessonsInstructionsWelcomeText>
                        Não deixe de comentar sobre os módulos de treinamento e e questionários. Sua opinião é muito
                        importante;
                    </LessonsInstructionsWelcomeText>
                </LessonsInstructionsItem>
                <LessonsInstructionsItem>
                    <LessonsInstructionsWelcomeText>
                        Sinta-se livre para utilizar papel e caneta para anotações em cada lição. Você também pode
                        pausar o vídeo a qualquer momento;
                    </LessonsInstructionsWelcomeText>
                </LessonsInstructionsItem>
            </LessonsInstructionsList>
            <LessonsInstructionsParagraph>Bons estudos e nos vemos na primeira lição!</LessonsInstructionsParagraph>
            <LessonsInstructionsButtonContainer>
                <LessonsInstructionsButton onClick={handleStartTraining}>Iniciar Treinamento</LessonsInstructionsButton>
            </LessonsInstructionsButtonContainer>
        </LessonsInstructionsSection>
    )
}

export default LessonsInstructions
