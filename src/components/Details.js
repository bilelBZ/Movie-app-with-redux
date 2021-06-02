import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
  console.log(match);
  const movieList = useSelector((state) => state.movieReducer.movieList);
  const movie = movieList.find(
    (el) => el.id.toString() === match.params.id.toString()
  );
  return (
    <div>
      <h1>Details</h1>
      {movie.description}
      <iframe
        width="731"
        height="411"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Details;
