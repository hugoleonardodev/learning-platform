const fixedUrl = (urlToFix: string): string => {
    if (urlToFix.endsWith('/')) {
        return urlToFix.slice(0, -1)
    }
    return urlToFix
}

export default fixedUrl
