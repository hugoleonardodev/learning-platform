/**
 * An object with a question, answers options, and a correct answer position.
 * @question a question related to the lesson video training
 * @param string
 * @example "Qual a cor do céu?"
 * @answers teacher's email registered on the platform
 * @param array
 * @example ["verde", "amarelo", "azul", "vermelho"]
 * @correct the correct answer position in the array
 * @param string @param number
 * @example "0" or 0, "1" or 1, "2" or 2, ...
 */
export interface VideoQuestion {
    question: string
    answers: string[]
    correct: string | number
}

/**
 * An object with a lessonId, videoPath, and videoQuetions array realated to lesson.
 * @lessonId a string with the id of the lesson
 * @param string
 * @example "teacher-lesson-3"
 * @videoPath a string with the url path to the video lesson
 * @param string
 * @example "https://www.youtube.com/watch?v=vAO9WQsMU0Q"
 * @videoQuestions an array with the questions realated to viedo lesson
 * @param array
 * @example
 * {
 *   question: 'Qual é a cor do ursinho do filhote da Galinha Pintadinha ??',
 *   answers: ['Azul', 'Amarelo', 'Verde', 'Branco'],
 *   correct: '2',
 * }
 */
export interface TeacherLesson {
    lessonId: string
    videoPath: string
    videoQuestions: VideoQuestion[]
}

export interface TeacherMessage {
    messageTitle: string
    messageSubTitle?: string
    messageContent: string
    messageAuthor: 'system' | 'admin'
}

/**
 * An object with all teacher's data state.
 * @teacherEmail teacher's email registered on the platform
 * @param string
 * @example "toasty@sphinx.net"
 * @teacherName teacher's name registered on the platform
 * @param string
 * @example "toasty"
 * @teacherIsAproved `true` if teacher is aproved on training
 * @param boolean
 * @default false
 * @currentLesson teacher's current lesson training
 * @param number
 * @default 1
 * @totalLessons teacher's total lessons training
 * @param number
 * @default 3
 * @nextLesson `true` if teacher's passed to next lesson
 * @param boolean
 * @default false
 * @isTrainingStarted `true` if teacher's is starting the training
 * @param boolean
 * @default false
 * @isQuizStarted `true` if teacher's is starting the quiz
 * @param boolean
 * @default false
 * @isLoading `true` if teacher's the aplication is loading
 * @param boolean
 * @default false
 * @switchTheme `true` if teacher's is switching color theme
 * @param boolean
 * @default false
 * @completedLessons a list with the completed training lessons
 * @param array
 * @default []
 * @currentAnswers a list with the current lesson teacher answer's
 * @param array
 * @default []
 * @teacherLessons a list of video training realated questions
 * @param array
 * @default []
 * @teacherFeedback teacher feedback's at the end of the training
 * @param string
 * @default ''
 */
export interface TeacherDataState {
    teacherEmail: string
    teacherName: string
    teacherIsAproved: boolean
    currentLesson: number
    totalLessons: number
    nextLesson: boolean
    isTrainingStarted: boolean
    isQuizStarted: boolean
    isLoading: boolean
    switchTheme: boolean
    completedLessons: string[]
    currentAnswers: string[]
    teacherLessons: TeacherLesson[]
    teacherFeedback: string
    teacherMessages: TeacherMessage[]
}

/**
 * Teacher Data Action Types.
 * Actions realated with the teacher profile, training, and options.
 * 1. TEACHER_LOGIN: redux store's reducer case to handle login
 * 2. TEACHER_STARTING_TRAINING: redux store's reducer case to handle start training
 * 3. TEACHER_RE_STARTING_TRAINING: redux store's reducer case to handle re-start training
 * 4. TEACHER_STARTING_QUIZ: redux store's reducer case to handle starting quiz
 * 5. TEACHER_ANSWERING_QUESTION: redux store's reducer case to handle answering question
 * 6. TEACHER_SWITCH_THEME: redux store's reducer case to handle switch theme (light|dark)
 * 7. TEACHER_CLEAR_CURRENT_ANSWERS: redux store's reducer case to handle clear current answers array
 * 8. TEACHER_UPDATE_COMPLETED_LESSONS: redux store's reducer case to handle update completed lessons
 * 9. TEACHER_IS_APROVED: redux store's reducer case to handle teahcer is aproved
 * 10. TEACHER_SUBMIT_FEEDBACK: redux store's reducer case to handle teacher submit feedback
 */

export enum TeachersDataActionTypes {
    TEACHER_LOGIN = 'TEACHER_LOGIN',
    TEACHER_STARTING_TRAINING = 'TEACHER_STARTING_TRAINING',
    TEACHER_RE_STARTING_TRAINING = 'TEACHER_RE_STARTING_TRAINING',
    TEACHER_STARTING_QUIZ = 'TEACHER_STARTING_QUIZ',
    TEACHER_ANSWERING_QUESTION = 'TEACHER_ANSWERING_QUESTION',
    TEACHER_SWITCH_THEME = 'TEACHER_SWITCH_THEME',
    TEACHER_CLEAR_CURRENT_ANSWERS = 'TEACHER_CLEAR_CURRENT_ANSWERS',
    TEACHER_UPDATE_COMPLETED_LESSONS = 'TEACHER_UPDATE_COMPLETED_LESSONS',
    TEACHER_IS_APROVED = 'TEACHER_IS_APROVED',
    TEACHER_SUBMIT_FEEDBACK = 'TEACHER_SUBMIT_FEEDBACK',
}

/**
 * Describes the teacher login action object.
 * @type redux store's teacher login action
 * @default "TEACHER_LOGIN"
 * @payload teacher's email registered on the platform
 * @param string
 * @example 'toasty@sphinx.net'
 */
export interface TeacherEmailLoginAction {
    type: TeachersDataActionTypes.TEACHER_LOGIN
    payload: string
}

/**
 * Describes the teacher starting training action object.
 * @type redux store's teacher starting training action
 * @default "TEACHER_STARTING_TRAINING"
 * @payload `true` if the training lessons is starting
 * @param boolean
 * @default false
 */
export interface TeacherStartingTrainingAction {
    type: TeachersDataActionTypes.TEACHER_STARTING_TRAINING
    payload: boolean
}

/**
 * Describes the teacher starting quiz action object.
 * @type redux store's teacher starting quiz action
 * @default "TEACHER_STARTING_QUIZ"
 * @payload `true` if the lessons quiz is starting
 * @param boolean
 * @default false
 */
export interface TeacherStartingQuizAction {
    type: TeachersDataActionTypes.TEACHER_STARTING_QUIZ
    payload: boolean
}

/**
 * Describes the teacher switch colors theme action object.
 * @type redux store's teacher switch colors theme action
 * @default "TEACHER_SWITCH_THEME"
 * @payload `true` if teacher is switching the colors theme
 * @param boolean
 * @default false
 */
export interface TeacherSwtichThemeAction {
    type: TeachersDataActionTypes.TEACHER_SWITCH_THEME
    payload: boolean
}

/**
 * Describes the teacher answering question action object.
 * @type redux store's teacher answering question theme action
 * @default "TEACHER_ANSWERING_QUESTION"
 * @payload teacher answer for the current question
 * @param string
 * @example 'Verde'
 */
export interface TeacherAnsweringQuestion {
    type: TeachersDataActionTypes.TEACHER_ANSWERING_QUESTION
    payload: string
}

/**
 * Describes the teacher clearing current answers array action object.
 * @type redux store's teacher clearing current answers array theme action
 * @default "TEACHER_CLEAR_CURRENT_ANSWERS"
 */
export interface TeacherClearCurrentAnswers {
    type: TeachersDataActionTypes.TEACHER_CLEAR_CURRENT_ANSWERS
}

/**
 * Describes the teacher updating the completed lessons array action object.
 * @type redux store's teacher updating the completed lessons array action
 * @default "TEACHER_UPDATE_COMPLETED_LESSONS"
 * @payload teacher current finished lesson
 * @param string
 * @example 'Verde'
 */
export interface TeacherUpdateCompleteLesssons {
    type: TeachersDataActionTypes.TEACHER_UPDATE_COMPLETED_LESSONS
    payload: string
}

export interface TeacherIsAproved {
    type: TeachersDataActionTypes.TEACHER_IS_APROVED
    payload: boolean
}

/**
 * Describes the teacher submit feedback object.
 * @type redux store's teacher submit feedback action type
 * @default "TEACHER_SUBMIT_FEEDBACK"
 * @payload teacher's feedback after all lessons completed
 * @param string
 * @example "<p>Olá Learning Platform, ótima aula!</p>"
 */
export interface TeacherSubmitFeedback {
    type: TeachersDataActionTypes.TEACHER_SUBMIT_FEEDBACK
    payload: string
}

export type TeacherActionsCreators =
    | TeacherEmailLoginAction
    | TeacherStartingTrainingAction
    | TeacherStartingQuizAction
    | TeacherSwtichThemeAction
    | TeacherAnsweringQuestion
    | TeacherClearCurrentAnswers
    | TeacherUpdateCompleteLesssons
    | TeacherIsAproved
    | TeacherSubmitFeedback
