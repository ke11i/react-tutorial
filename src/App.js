import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=e059286d';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    try{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if(data.Response ==='True'){
        setMovies(data.Search);
      }else{
        alert(data.Error)
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={({target}) => setSearchTerm(target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {
          movies.length > 0 ?
            (
              movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID}/>
              ))
            ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default App;