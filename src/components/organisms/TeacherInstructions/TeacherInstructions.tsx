import LessonsInstructions from 'components/molecules/LessonsInstructions'
import TeacherHeading from 'components/molecules/TeacherHeading'
import React from 'react'

const teacherLessonsInstructionsLinks = [
    { linkTitle: 'App', linkPath: '' },
    { linkTitle: 'Lessons', linkPath: '/lessons' },
]

const TeacherInstructions: React.FC = () => {
    return (
        <div>
            <TeacherHeading sectionTitle="Lessons" sectionLinks={teacherLessonsInstructionsLinks} />
            <LessonsInstructions />
        </div>
    )
}

export default TeacherInstructions
