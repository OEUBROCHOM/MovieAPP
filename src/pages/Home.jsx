import MovieCard from "../components/MovieCard"
import { useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err) { 
                console.error(err);
                setError("Failed to load movies...");
        
             }
            finally {
                setLoading(false);
            }
          
        }
        loadPopularMovies();
    }, [])


    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        }catch (err) {
            console.error(err);
            setError("Failed to search movies...");
        }
        finally {
            setLoading(false);
        }
    };
   
    return (
        <div className="home">
            <div className="banner">
                <div className="banner-content">
                    <h1 className="banner-title">Discover Amazing <span>Movies</span></h1>
                    <p className="banner-description">
                        Explore the latest and most popular films. Search, watch, and enjoy your favorite movies anytime.
                    </p>
                    <button className="banner-button">Watch Now</button>
                </div>
            </div>

            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {error && <div className="error">{error}</div>}

            {loading ? (<div className="loading-message">Loading...</div>):(
                <div className="movies-grid">
                    {movies.map((movie) => (
                        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
        <                   MovieCard movie={movie} key={movie.id} />
                        )
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;