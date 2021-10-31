import { TeachersDataActionTypes } from 'store/constants/teachersDataTypes'

export interface TeacherEmailLoginAction {
    type: TeachersDataActionTypes.TEACHER_LOGIN
    payload: string
}

export interface TeacherStartingCourseAction {
    type: TeachersDataActionTypes.TEACHER_STARTING_COURSE
    payload: boolean
}

export interface TeacherStartingQuizAction {
    type: TeachersDataActionTypes.TEACHER_STARTING_QUIZ
    payload: boolean
}

export const teacherLogin = (teacherEmail: string): TeacherEmailLoginAction => ({
    type: TeachersDataActionTypes.TEACHER_LOGIN,
    payload: teacherEmail,
})

export const teacherStartTrainig = (teacherStartCourse: boolean): TeacherStartingCourseAction => ({
    type: TeachersDataActionTypes.TEACHER_STARTING_COURSE,
    payload: teacherStartCourse,
})

export const teacherStartQuiz = (teacherStartQuiz: boolean): TeacherStartingQuizAction => ({
    type: TeachersDataActionTypes.TEACHER_STARTING_QUIZ,
    payload: teacherStartQuiz,
})

export type TeacherActionsCreators = TeacherEmailLoginAction | TeacherStartingCourseAction | TeacherStartingQuizAction
