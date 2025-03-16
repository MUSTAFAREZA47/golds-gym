export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.EXERCISE_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.YOUTUBE_RAPID_API_KEY,
    },
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(`Data from ${url}:`, data) // Debugging
        return data
    } catch (error) {
        console.error('Fetch error:', error)
        return null // Return null to prevent crashes
    }
}

