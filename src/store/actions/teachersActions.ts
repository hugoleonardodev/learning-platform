import {
    TeacherAnsweringQuestion,
    TeacherClearCurrentAnswers,
    TeacherEmailLoginAction,
    TeacherIsAproved,
    TeachersDataActionTypes,
    TeacherStartingQuizAction,
    TeacherStartingTrainingAction,
    TeacherSubmitFeedback,
    TeacherSwtichThemeAction,
    TeacherUpdateCompleteLesssons,
} from 'store/constants/teachersDataTypes'

/**
 * Returns an object with the action type and payload.
 * @param teacherEmail
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher login action
 * @example
 * teacherLogin('toasty@sphix.net') =>
 * ({
 *   type: "TEACHER_LOGIN",
 *   payload: 'toasty@sphix.net'
 * })
 */
export const teacherLogin = (teacherEmail: string): TeacherEmailLoginAction => ({
    type: TeachersDataActionTypes.TEACHER_LOGIN,
    payload: teacherEmail,
})

/**
 * Returns an object with the teacher starting training action type and payload.
 * @param teacherStartTraining
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher starting training action
 * @example
 * teacherStartTrainig(true) =>
 * ({
 *   type: "TEACHER_STARTING_TRAINING",
 *   payload: true
 * })
 */
export const teacherStartTrainig = (teacherStartTraining: boolean): TeacherStartingTrainingAction => ({
    type: TeachersDataActionTypes.TEACHER_STARTING_TRAINING,
    payload: teacherStartTraining,
})

/**
 * Returns an object with the teacher starting training quiz action type and payload.
 * @param teacherStartQuiz
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher starting quiz training action
 * @example
 * teacherStartQuiz(true) =>
 * ({
 *   type: "TEACHER_STARTING_QUIZ",
 *   payload: true
 * })
 */
export const teacherStartQuiz = (teacherStartQuiz: boolean): TeacherStartingQuizAction => ({
    type: TeachersDataActionTypes.TEACHER_STARTING_QUIZ,
    payload: teacherStartQuiz,
})

/**
 * Returns an object with the teacher switching colors theme action type and payload.
 * @param switchTheme
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher switching colors theme action
 * @example
 * teacherSwitchTheme(true) =>
 * ({
 *   type: "TEACHER_SWITCH_THEME",
 *   payload: true
 * })
 */
export const teacherSwitchTheme = (switchTheme: boolean): TeacherSwtichThemeAction => ({
    type: TeachersDataActionTypes.TEACHER_SWITCH_THEME,
    payload: switchTheme,
})

/**
 * Returns an object with the teacher answering question action type and payload.
 * @param answer
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher answering question action
 * @example
 * teacherAnsweringQuestion("Answer") =>
 * ({
 *   type: "TEACHER_SWITCH_THEME",
 *   payload: "Answer"
 * })
 */
export const teacherAnsweringQuestion = (answer: string): TeacherAnsweringQuestion => ({
    type: TeachersDataActionTypes.TEACHER_ANSWERING_QUESTION,
    payload: answer,
})

/**
 * Returns an object with the teacher clearing current answers array action type and payload.
 * @param answer
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher clearing current answers array action
 * @example
 * teacherAnsweringQuestion("Answer") =>
 * ({
 *   type: "TEACHER_CLEAR_CURRENT_ANSWERS",
 * })
 */
export const teacherClearCurrentAnswers = (): TeacherClearCurrentAnswers => ({
    type: TeachersDataActionTypes.TEACHER_CLEAR_CURRENT_ANSWERS,
})

/**
 * Returns an object with the teacher updating completed lessons array action type and payload.
 * @param lesson
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher updating completed lessons array action
 * @example
 * teacherUpdateCompletedLessons("Lesson1") =>
 * ({
 *   type: "TEACHER_UPDATE_COMPLETED_LESSONS",
 *   payload: "Lesson1"
 * })
 */
export const teacherUpdateCompletedLessons = (lesson: string): TeacherUpdateCompleteLesssons => ({
    type: TeachersDataActionTypes.TEACHER_UPDATE_COMPLETED_LESSONS,
    payload: lesson,
})

/**
 * Returns an object with the teacher is aproved status action type and payload.
 * @param isAproved
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher is aproved status action
 * @example
 * teacherIsAproved(true) =>
 * ({
 *   type: "TEACHER_IS_APROVED",
 *   payload: true
 * })
 */
export const teacherIsAproved = (isAproved: boolean): TeacherIsAproved => ({
    type: TeachersDataActionTypes.TEACHER_IS_APROVED,
    payload: isAproved,
})

/**
 * Returns an object with the teacher is aproved status action type and payload.
 * @param feedback
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher is aproved status action
 * @example
 * teacherSubmitFeedback("<p>Olá Time To Play, ótima aula!</p>") =>
 * ({
 *   type: "TEACHER_SUBMIT_FEEDBACK",
 *   payload: "<p>Olá Time To Play, ótima aula!</p>"
 * })
 */
export const teacherSubmitFeedback = (feedback: string): TeacherSubmitFeedback => ({
    type: TeachersDataActionTypes.TEACHER_SUBMIT_FEEDBACK,
    payload: feedback,
})
