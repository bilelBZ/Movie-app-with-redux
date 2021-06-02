import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../const";

export const addMovie = (payload) => ({
    
    type: ADD_MOVIE,
    payload //{id,title,description,posterUrl,trailer,rate}
})

export const deleteMovie = (payload) => ({
    type: DELETE_MOVIE,
    payload//id
})

export const editMovie = (payload) => ({
    type: EDIT_MOVIE,
    payload //{id,title,description,posterUrl,trailer,rate}
})


