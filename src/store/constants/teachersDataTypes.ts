/**
 * Teacher Data Action Types.
 * Actions realated with the teacher profile and training.
 * @TEACHER_LOGIN   When teacher's logs in
 * @TEACHER_STARTING_COURSE     starts the course with videos and questions
 * @TEACHER_RE_STARTING_COURSE     restart the full course or a question
 * @TEACHER_STARTING_QUIZ   starts the questionary for the video
 * @TEACHER_ANSWERING_QUESTION  triggers question answer action
 * @TEACHER_SWITCH_THEME    switches the main app theme (light/dark)
 */

export enum TeachersDataActionTypes {
    TEACHER_LOGIN = 'TEACHER_LOGIN',
    TEACHER_STARTING_COURSE = 'TEACHER_STARTING_COURSE',
    TEACHER_RE_STARTING_COURSE = 'TEACHER_RE_STARTING_COURSE',
    TEACHER_STARTING_QUIZ = 'TEACHER_STARTING_QUIZ',
    TEACHER_ANSWERING_QUESTION = 'TEACHER_ANSWERING_QUESTION',
    TEACHER_SWITCH_THEME = 'TEACHER_SWITCH_THEME',
    TEACHER_CLEAR_CURRENT_ANSWERS = 'TEACHER_CLEAR_CURRENT_ANSWERS',
    TEACHER_UPDATE_COMPLETED_LESSONS = 'TEACHER_UPDATE_COMPLETED_LESSONS',
    TEACHER_IS_APROVED = 'TEACHER_IS_APROVED',
    TEACHER_SUBMIT_FEEDBACK = 'TEACHER_SUBMIT_FEEDBACK',
}

/**
 * Teacher Login Action Type
 * @type a string with the type of the action
 * @payload a string with the payload for the action
 */

export interface TeacherLogin {
    type: string
    payload: string
}

export interface VideoQuestion {
    question: string
    answers: string[]
    correct: string | number
}

export interface TeacherLesson {
    lessonId: string
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
    completedLessons: string[]
    currentAnswers: string[]
    teacherLessons: TeacherLesson[]
    teacherFeedback: string
}
