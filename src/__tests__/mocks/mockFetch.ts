import apiResponse from '__tests__/mocks/apiResponse'

const mockFetch = (url: string): Promise<any> =>
    Promise.resolve({
        status: 200,
        ok: true,
        json: () => {
            if (url === 'https://type.fit/api/quotes') return Promise.resolve(apiResponse)

            return Promise.resolve(apiResponse)
        },
    })

export default mockFetch
