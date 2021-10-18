import axios, { AxiosResponse } from 'axios'

const getQuote = async (): Promise<AxiosResponse<never>> => {
    const url = 'https://type.fit/api/quotes'

    const result = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    })

    return result
}

export default getQuote
