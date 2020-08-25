import React, {  useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import Spinner from "./Spinner";
import ContentLoader from "react-content-loader"

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=cebf528c";

const App = () => {
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      setMovies(jsonResponse.Search);
      setLoading(false);
    })
  },[]);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True"){ 
        setMovies(jsonResponse.Search)
        setLoading(false);
      }else{
        setErrorMessage(jsonResponse.error)
        setLoading(false);
      }
    })
  }

  return (
    <div className="App">
        <div className="App">
        <Header text="Movies Database" />
        <Search search={search} />
        <p className="App-intro">Sharing a few of My favourite movies</p>
        <div className="movies">
          {loading && !errorMessage ? (
            // [1,3,4,5,6].map((movie,index) => 
            <ContentLoader 
            height={475}
            width={400}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="4" y="29" rx="4" ry="4" width="396" height="16" /> 
            <rect x="0" y="70" rx="5" ry="5" width="400" height="400" /> 
            <rect x="346" y="29" rx="0" ry="0" width="0" height="0" />
          </ContentLoader>
            //)
          
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
    </div>
    </div>
  );
}

export default App;
