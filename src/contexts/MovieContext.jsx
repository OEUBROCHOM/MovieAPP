import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const {isAuthenticated} = useAuth()
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    const addToFavorites = (movie) => {
        if (!isAuthenticated) {
            alert("You need to be login or signup to add favorites!!")
            return
        }
        setFavorites(prev => [...prev, movie] )
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

