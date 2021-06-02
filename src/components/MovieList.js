import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorize } from "../js/action/starAction";
import MovieCard from "./MovieCard";

const MovieList = () => {
  // const {movieList} = useSelector(state => state.movieReducer)
  const movieList = useSelector((state) => state.movieReducer.movieList);
  const starArray = useSelector((state) => state.starReducer.starArray);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div>
      {starArray.map((star) => (
        <span
          key={star.id}
          className={star.isColored ? "gold" : "normal"}
          onClick={() => dispatch(colorize(star.id))}
        >
          {star.star}
        </span>
      ))}
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <div className="d-flex justify-content-around flex-wrap">
        {movieList
          .filter((movie) =>
            movie.title.toUpperCase().includes(text.toUpperCase().trim())
          )
          .filter(
            (movie) =>
              movie.rate >= starArray.filter((star) => star.isColored).length
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
