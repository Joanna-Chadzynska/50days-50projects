export async function getPost(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
    )
    const json = await response.json()

    return json
}

// Use the API_KEY
// const client = process.env.TMDB_API_KEY
// const URL = `https://api.themoviedb.org/3/movie/550?api_key=3f1f5c28069c7144d7ae13ffdaa9c846`
// const apiKey = process.env.TMDB_API_KEY
// console.log(client)
