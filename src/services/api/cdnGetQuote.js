/* eslint-disable no-undef */
const cdnGetQuote = async () => {
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

export default cdnGetQuote
