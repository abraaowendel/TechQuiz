export const api = async () => {
    return fetch("https://quizapi.io/api/v1/questions", 
        {headers: {"X-Api-Key": "WVxewHR0bAuDMWYg7hJjX2PhiI7ItBsIa13ZxsHo"},})
        .then(res => res.json())
        .then((data) => data)
        .catch(console.error)
}