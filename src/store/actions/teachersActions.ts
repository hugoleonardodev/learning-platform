import { TeachersDataActionTypes } from 'store/constants/teachersDataTypes'

export interface TeacherEmailLoginAction {
    type: TeachersDataActionTypes.TEACHER_LOGIN
    payload: string
}

export const teacherLogin = (teacherEmail: string): TeacherEmailLoginAction => ({
    type: TeachersDataActionTypes.TEACHER_LOGIN,
    payload: teacherEmail,
})

export interface TeacherStartingCourseAction {
    type: TeachersDataActionTypes.TEACHER_STARTING_COURSE
    payload: boolean
}

export const teacherStartTrainig = (teacherStartCourse: boolean): TeacherStartingCourseAction => ({
    type: TeachersDataActionTypes.TEACHER_STARTING_COURSE,
    payload: teacherStartCourse,
})

export interface TeacherStartingQuizAction {
    type: TeachersDataActionTypes.TEACHER_STARTING_QUIZ
    payload: boolean
}

export const teacherStartQuiz = (teacherStartQuiz: boolean): TeacherStartingQuizAction => ({
    type: TeachersDataActionTypes.TEACHER_STARTING_QUIZ,
    payload: teacherStartQuiz,
})

export interface TeacherSwtichThemeAction {
    type: TeachersDataActionTypes.TEACHER_SWITCH_THEME
    payload: boolean
}

export const teacherSwitchTheme = (switchTheme: boolean): TeacherSwtichThemeAction => ({
    type: TeachersDataActionTypes.TEACHER_SWITCH_THEME,
    payload: switchTheme,
})

export interface TeacherAnsweringQuestion {
    type: TeachersDataActionTypes.TEACHER_ANSWERING_QUESTION
    payload: string
}

export const teacherAnsweringQuestion = (answer: string): TeacherAnsweringQuestion => ({
    type: TeachersDataActionTypes.TEACHER_ANSWERING_QUESTION,
    payload: answer,
})

export type TeacherActionsCreators =
    | TeacherEmailLoginAction
    | TeacherStartingCourseAction
    | TeacherStartingQuizAction
    | TeacherSwtichThemeAction
    | TeacherAnsweringQuestion
