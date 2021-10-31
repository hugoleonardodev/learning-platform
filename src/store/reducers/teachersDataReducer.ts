import { TeacherActionsCreators } from 'store/actions/teachersActions'
import { TeacherDataState, TeachersDataActionTypes } from 'store/constants/teachersDataTypes'

const initialState = {
    teacherEmail: '',
    currentLesson: 1,
    totalLessons: 4,
    nextLesson: false,
    isTrainingStarted: false,
    isQuizStarted: false,
    isLoading: false,
    teacherLessons: [
        {
            lessonId: 1,
            videoPath: 'https://www.youtube.com/watch?v=iDT2128CWoM',
            videoQuestions: [
                {
                    question: 'Qual das características a seguir a pelúcia da Galinha Pintadinha não apresenta ??',
                    answers: {
                        answerA: 'Resistente',
                        answerB: 'Super fofinha',
                        answerC: 'Produto oficial',
                        answerD: 'Tóxica',
                    },
                    correct: '3',
                },
                {
                    question: 'Qual é a cor da pelúcia da Galinha Pintadinha ??',
                    answers: {
                        answerA: 'Verde',
                        answerB: 'Amarelo',
                        answerC: 'Azul',
                        answerD: 'Branco',
                    },
                    correct: '2',
                },
            ],
        },
        {
            lessonId: 2,
            videoPath: 'https://www.youtube.com/watch?v=eB_pjpNb2FQ',
            videoQuestions: [
                {
                    question: 'Qual o conto clássico foi mencionado no vídeo ??',
                    answers: {
                        answerA: 'Os Três Porquinhos',
                        answerB: 'Cinderalla',
                        answerC: 'A tartaruga e a Lebre',
                        answerD: 'Curupira',
                    },
                    correct: '2',
                },
                {
                    question: 'Qual a cor do telhado da casa da Galinha Pintadinha ??',
                    answers: {
                        answerA: 'Roxo',
                        answerB: 'Amarelo',
                        answerC: 'Azul',
                        answerD: 'Branco',
                    },
                    correct: '0',
                },
            ],
        },
        {
            lessonId: 3,
            videoPath: 'https://www.youtube.com/watch?v=vAO9WQsMU0Q',
            videoQuestions: [
                {
                    question: 'Qual o conto clássico foi mencionado no vídeo ??',
                    answers: {
                        answerA: 'Os Três Porquinhos',
                        answerB: 'Cinderalla',
                        answerC: 'A tartaruga e a Lebre',
                        answerD: 'Curupira',
                    },
                    correct: '0',
                },
                {
                    question: 'Qual é a cor do ursinho do filhote da Galinha Pintadinha ??',
                    answers: {
                        answerA: 'Azul',
                        answerB: 'Amarelo',
                        answerC: 'Verde',
                        answerD: 'Branco',
                    },
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
        default:
            return state
    }
}

export default teachersDataReducer
