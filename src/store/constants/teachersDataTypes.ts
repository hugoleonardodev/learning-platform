/**
 * Quote with text and author from https://type.fit/api/quotes
 * @text a quote from an author
 * @author author of the quote or unknown
 */

export interface Quote {
    text: string
    author: string
}

/**
 * Quotes Data types
 * @data an array of quotes from https://type.fit/api/quotes
 */

export interface QuoteData {
    data: Quote[]
}

/**
 * Quotes Data Action types
 * @UPDATE_ALL apdates all data quotes
 */

export enum TeachersDataActionTypes {
    TEACHER_LOGIN = 'TEACHER_LOGIN',
    TEACHER_STARTING_COURSE = 'TEACHER_STARTING_COURSE',
    TEACHER_RE_STARTING_COURSE = 'TEACHER_RE_STARTING_COURSE',
    TEACHER_STARTING_QUIZ = 'TEACHER_STARTING_QUIZ',
    TEACHER_ANSWERING_QUESTION = 'TEACHER_ANSWERING_QUESTION',
    TEACHER_SWITCH_THEME = 'TEACHER_SWITCH_THEME',
}

// export interface TeacherEmail {
//     teacherEmail: string
// }

export interface TeacherLogin {
    type: string
    payload: string
}
export interface VideoQuestionAnswers {
    answerA: string
    answerB: string
    answerC: string
    answerD: string
}
export interface VideoQuestion {
    question: string
    answers: VideoQuestionAnswers
    correct: string | number
}

export interface TeacherLesson {
    lessonId: number
    videoPath: string
    videoQuestions: VideoQuestion[]
}

export interface TeacherDataState {
    teacherEmail: string
    teacherIsAproved: boolean
    currentLesson: number
    totalLessons: number
    nextLesson: boolean
    isTrainingStarted: boolean
    isQuizStarted: boolean
    isLoading: boolean
    switchTheme: boolean
    teacherLessons: TeacherLesson[]
}
