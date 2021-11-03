import yup from './yup'

const questionsSchema = yup.object({
    question: yup.string().required().oneOf(['0', '1', '2', '3']),
    question1: yup.string().oneOf(['0', '1', '2', '3']),
    question2: yup.string().oneOf(['0', '1', '2', '3']),
    question3: yup.string().oneOf(['0', '1', '2', '3']),
    question4: yup.string().oneOf(['0', '1', '2', '3']),
    question5: yup.string().oneOf(['0', '1', '2', '3']),
    question6: yup.string().oneOf(['0', '1', '2', '3']),
    question7: yup.string().oneOf(['0', '1', '2', '3']),
    question8: yup.string().oneOf(['0', '1', '2', '3']),
    question9: yup.string().oneOf(['0', '1', '2', '3']),
})

export default questionsSchema
