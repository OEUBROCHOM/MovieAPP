const API_KEY = "a50771a3587c2914c6ef39c2e92a652c";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json();
    return data.results;
}