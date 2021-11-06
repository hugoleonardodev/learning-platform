import { TeacherActionsCreators, TeacherDataState, TeachersDataActionTypes } from 'store/constants/teachersDataTypes'

type TeacherInitialState = TeacherDataState

const initialState: TeacherInitialState = {
    teacherEmail: 'toasty@sphinx.net',
    teacherName: 'toasty',
    teacherIsAproved: false,
    currentLesson: 1,
    totalLessons: 3,
    nextLesson: false,
    isTrainingStarted: false,
    isQuizStarted: false,
    isLoading: false,
    switchTheme: false,
    completedLessons: [],
    currentAnswers: [],
    teacherFeedback: '',
    teacherMessages: [
        {
            messageTitle: 'Bem vindo a plataforma!',
            messageAuthor: 'system',
            messageSubTitle: 'A melhor metodologia do Brasil.',
            messageContent: 'Estamos muito felizes que tenha escolhido aprender e ensinar com a gente.',
        },
    ],
    teacherLessons: [
        {
            lessonId: 'teacher-lesson-1',
            videoPath: 'https://www.youtube.com/watch?v=iDT2128CWoM',
            videoQuestions: [
                {
                    question: 'Qual das características a seguir a pelúcia da Galinha Pintadinha não apresenta ??',
                    answers: ['Tóxica', 'Resistente', 'Super fofinha', 'Produto oficial'],
                    correct: '0',
                },
                {
                    question: 'Qual é a cor da pelúcia da Galinha Pintadinha ??',
                    answers: ['Verde', 'Amarelo', 'Azul', 'Branco'],
                    correct: '2',
                },
            ],
        },
        {
            lessonId: 'teacher-lesson-2',
            videoPath: 'https://www.youtube.com/watch?v=eB_pjpNb2FQ',
            videoQuestions: [
                {
                    question: 'Qual o conto clássico foi mencionado no vídeo ??',
                    answers: ['Os Três Porquinhos', 'Cinderalla', 'A tartaruga e a Lebre', 'Curupira'],
                    correct: '2',
                },
                {
                    question: 'Qual a cor do telhado da casa da Galinha Pintadinha ??',
                    answers: ['Roxo', 'Amarelo', 'Azul', 'Branco'],
                    correct: '0',
                },
            ],
        },
        {
            lessonId: 'teacher-lesson-3',
            videoPath: 'https://www.youtube.com/watch?v=vAO9WQsMU0Q',
            videoQuestions: [
                {
                    question: 'Qual o conto clássico foi mencionado no vídeo ??',
                    answers: ['Os Três Porquinhos', 'Cinderalla', 'A tartaruga e a Lebre', 'Curupira'],
                    correct: '0',
                },
                {
                    question: 'Qual é a cor do ursinho do filhote da Galinha Pintadinha ??',
                    answers: ['Azul', 'Amarelo', 'Verde', 'Branco'],
                    correct: '2',
                },
            ],
        },
    ],
}

/**
 * Returns a Teacher Data State change.
 * @param feedback
 * @returns an object with `type` and `payload` to `dispatch` redux store's teacher is aproved status action
 * @example
const teachersDataReducer = (
    state: TeacherDataState = initialState,
    action: TeacherActionsCreators,
): TeacherDataState => {
    switch (action.type) {
        case TeachersDataActionTypes.TEACHER_LOGIN:
            return {
                ...state,
                teacherEmail: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_STARTING_TRAINING:
            return {
                ...state,
                isTrainingStarted: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_STARTING_QUIZ:
            return {
                ...state,
                isQuizStarted: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_SWITCH_THEME:
            return {
                ...state,
                switchTheme: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_ANSWERING_QUESTION:
            return {
                ...state,
                currentAnswers: [...state.currentAnswers, action.payload],
            }
        case TeachersDataActionTypes.TEACHER_CLEAR_CURRENT_ANSWERS:
            return {
                ...state,
                currentAnswers: [],
            }
        case TeachersDataActionTypes.TEACHER_UPDATE_COMPLETED_LESSONS:
            return {
                ...state,
                completedLessons: [...state.completedLessons, action.payload],
            }
        case TeachersDataActionTypes.TEACHER_SUBMIT_FEEDBACK:
            return {
                ...state,
                teacherFeedback: action.payload,
            }
        default:
            return state
    }
}
 */
const teachersDataReducer = (
    state: TeacherDataState = initialState,
    action: TeacherActionsCreators,
): TeacherDataState => {
    switch (action.type) {
        case TeachersDataActionTypes.TEACHER_LOGIN:
            return {
                ...state,
                teacherEmail: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_STARTING_TRAINING:
            return {
                ...state,
                isTrainingStarted: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_STARTING_QUIZ:
            return {
                ...state,
                isQuizStarted: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_SWITCH_THEME:
            return {
                ...state,
                switchTheme: action.payload,
            }
        case TeachersDataActionTypes.TEACHER_ANSWERING_QUESTION:
            return {
                ...state,
                currentAnswers: [...state.currentAnswers, action.payload],
            }
        case TeachersDataActionTypes.TEACHER_CLEAR_CURRENT_ANSWERS:
            return {
                ...state,
                currentAnswers: [],
            }
        case TeachersDataActionTypes.TEACHER_UPDATE_COMPLETED_LESSONS:
            return {
                ...state,
                completedLessons: [...state.completedLessons, action.payload],
            }
        case TeachersDataActionTypes.TEACHER_SUBMIT_FEEDBACK:
            return {
                ...state,
                teacherFeedback: action.payload,
            }
        default:
            return state
    }
}

export default teachersDataReducer
