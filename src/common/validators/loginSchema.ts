import yup from './yup'

const MIN_PASSWORD_LENGTH = 4
const MAX_PASSOWRD_LENGTH = 20

const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(MIN_PASSWORD_LENGTH).max(MAX_PASSOWRD_LENGTH).required(),
})

export default loginSchema
