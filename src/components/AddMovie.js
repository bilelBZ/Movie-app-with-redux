import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMovie } from '../js/action/movieAction';

const AddMovie = ({history}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState("");
    const [url, setUrl] = useState("");
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && rate && description && url){
            dispatch(addMovie({id:Math.random(),title,rate,description,posterUrl:url}))
            history.push("/")
        }
        else alert("Missing Fields")
        
    }
    
    return (
        <form onSubmit={handleSubmit} className="col-md-6">
        <label htmlFor="">Title:</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <label htmlFor="">Description:</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <label htmlFor="">Image:</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
          required
        />
        <label htmlFor="">Rate:</label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setRate(e.target.value)}
          value={rate}
          required
        />
        
         
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
       
      </form>
    )
}

export default AddMovie
