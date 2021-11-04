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

export interface TeacherClearCurrentAnswers {
    type: TeachersDataActionTypes.TEACHER_CLEAR_CURRENT_ANSWERS
}

export const teacherClearCurrentAnswers = (): TeacherClearCurrentAnswers => ({
    type: TeachersDataActionTypes.TEACHER_CLEAR_CURRENT_ANSWERS,
})

export interface TeacherUpdateCompleteLesssons {
    type: TeachersDataActionTypes.TEACHER_UPDATE_COMPLETED_LESSONS
    payload: string
}

export const teacherUpdateCompletedLessons = (lesson: string): TeacherUpdateCompleteLesssons => ({
    type: TeachersDataActionTypes.TEACHER_UPDATE_COMPLETED_LESSONS,
    payload: lesson,
})

export interface TeacherIsAproved {
    type: TeachersDataActionTypes.TEACHER_IS_APROVED
    payload: boolean
}

export const teacherIsAproved = (isAproved: boolean): TeacherIsAproved => ({
    type: TeachersDataActionTypes.TEACHER_IS_APROVED,
    payload: isAproved,
})

export interface TeacherSubmitFeedback {
    type: TeachersDataActionTypes.TEACHER_SUBMIT_FEEDBACK
    payload: string
}

export const teacherSubmitFeedback = (feedback: string): TeacherSubmitFeedback => ({
    type: TeachersDataActionTypes.TEACHER_SUBMIT_FEEDBACK,
    payload: feedback,
})

export type TeacherActionsCreators =
    | TeacherEmailLoginAction
    | TeacherStartingCourseAction
    | TeacherStartingQuizAction
    | TeacherSwtichThemeAction
    | TeacherAnsweringQuestion
    | TeacherClearCurrentAnswers
    | TeacherUpdateCompleteLesssons
    | TeacherIsAproved
    | TeacherSubmitFeedback
