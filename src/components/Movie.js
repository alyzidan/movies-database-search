import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE = "http://icon-park.com/imagefiles/movie_play_light_gray.png";

const Movie = (props) => {
    const poster = props.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.movie.Poster;
    return (
        <div className="movie">
          <h2>{props.movie.Title}</h2>
          <div>
            <img
              width="200"
              alt={`The movie titled: ${props.movie.Title}`}
              src={poster}
            />
          </div>
          <p>({props.movie.Year})</p>
        </div>
      );
}
export default Movie;
