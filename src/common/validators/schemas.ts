import yup from './yup'

const emailSchema = yup.object({
    email: yup.string().email().required(),
})

export default emailSchema
