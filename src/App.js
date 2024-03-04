import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import searchIcon from "./search.svg";

// 89ad9ba5

const API_URL = "http://www.omdbapi.com?apikey=89ad9ba5";
const movie1 = {
  Title: "Naruto",
  Year: "2002-2007",
  Type: "series",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Naruto");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className=" search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No movi es found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// youtube video https://www.youtube.com/watch?v=b9eMGE7QtTk&list=PLS2L_ncGiMTsc-2WOTI5LEHeXZ_WGAjbc&index=5&t=3147s
