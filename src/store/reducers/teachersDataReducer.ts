import { TeacherActionsCreators } from 'store/actions/teachersActions'
import { TeacherDataState, TeachersDataActionTypes } from 'store/constants/teachersDataTypes'

const initialState = {
    teacherEmail: 'Raimundo',
    teacherIsAproved: false,
    currentLesson: 1,
    totalLessons: 4,
    nextLesson: false,
    isTrainingStarted: false,
    isQuizStarted: false,
    isLoading: false,
    switchTheme: false,
    completedLessons: [],
    currentAnswers: [],
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
        case TeachersDataActionTypes.TEACHER_STARTING_COURSE:
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
        default:
            return state
    }
}

export default teachersDataReducer
