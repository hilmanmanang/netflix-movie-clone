const API_KEY = '17144953cc21c473236e304171cb53cd';

const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests