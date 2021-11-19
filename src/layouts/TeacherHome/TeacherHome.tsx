import React from 'react'

import {
    TeacherCardGroup,
    TeacherHomeCardCol,
    TeacherHomeCol,
    TeacherHomeContainer,
    // TeacherHomeFooter,
    TeacherHomeRow,
} from './factory.styles'

import { ReactComponent as MessagesIcon } from 'common/assets/notifications.svg'
import { ReactComponent as ProfileIcon } from 'common/assets/profile.svg'
import { ReactComponent as LessonsIcon } from 'common/assets/lessons.svg'

import { CardOverviewProperties } from 'components/atoms/CardOverview/CardOverview'
import CardOverview from 'components/atoms/CardOverview'
import TeacherHeading from 'components/molecules/TeacherHeading'
import TeacherStatus from 'components/molecules/TeacherStatus'
import { useSelector } from 'react-redux'
import { RootStateWithReducers } from 'store/constants/_rootReducerTypes'

const teacherHomeSectionLinks = [{ linkTitle: 'App', linkPath: '' }]

const TeacherHome: React.FC = () => {
    const { teacherMessages, teacherLessons, completedLessons } = useSelector(
        (state: RootStateWithReducers) => state.teachers,
    )
    const teacherOverviewItems: CardOverviewProperties[] = [
        {
            iconTitle: <MessagesIcon />,
            subTitle: 'Novas Mensagens',
            text: teacherMessages.length,
            linkPath: '/messages',
        },
        {
            iconTitle: <LessonsIcon />,
            subTitle: 'Lições Concluídas',
            text: completedLessons.length,
            linkPath: '/lessons',
        },
        {
            iconTitle: <ProfileIcon />,
            subTitle: 'Total de Lições',
            text: teacherLessons.length,
            linkPath: '/profile',
        },
    ]
    return (
        <TeacherHomeContainer>
            <TeacherHomeRow xs="1">
                <TeacherHomeCol>
                    <TeacherHeading sectionTitle="Home" sectionLinks={teacherHomeSectionLinks} />
                </TeacherHomeCol>
            </TeacherHomeRow>
            <TeacherHomeRow xs="1">
                <TeacherCardGroup>
                    {teacherOverviewItems.map(item => (
                        <TeacherHomeCardCol key={item.subTitle}>
                            <CardOverview
                                iconTitle={item.iconTitle}
                                subTitle={item.subTitle}
                                text={item.text}
                                linkPath={item.linkPath}
                            />
                        </TeacherHomeCardCol>
                    ))}
                </TeacherCardGroup>
            </TeacherHomeRow>
            <TeacherHomeRow xs="1">
                <TeacherHomeCol>
                    <TeacherStatus />
                </TeacherHomeCol>
            </TeacherHomeRow>
        </TeacherHomeContainer>
    )
}

export default TeacherHome
