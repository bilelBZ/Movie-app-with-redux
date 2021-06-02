import { moviedata } from "../../data";
import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../const";
const initialState = {
  movieList: moviedata,
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movieList: [payload,...state.movieList] };

    case DELETE_MOVIE:
      return {
        ...state,
        movieList: state.movieList.filter((movie) => movie.id !== payload),
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movieList: state.movieList.map((movie) =>
          movie.id === payload.id ? { ...movie, ...payload } : movie
        ),
      };

    default:
      return state;
  }
};

export default movieReducer;
