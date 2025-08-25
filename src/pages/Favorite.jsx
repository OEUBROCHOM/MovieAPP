import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorite(){
    const {favorites} = useMovieContext();

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <img className="favorites-banner" src="/images/banner2.jpg" alt="Favorites Banner" />

                <div className="favorites-header">
                    <h2>My Favorite</h2>
                </div>

                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="favorites-empty">
            <img className="favorites-banner" src="/images/bannerNo.jpg" alt="Favorites Banner" />
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    );
}

export default Favorite;