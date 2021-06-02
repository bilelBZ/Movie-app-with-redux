
import React, { useState } from "react";
import { Button,Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../js/action/movieAction";

const EditMovie = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [rate, setRate] = useState(movie.rate);
  const [url, setUrl] = useState(movie.posterUrl);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: movie.id,
      title,
      description,
      rate,
      posterUrl: url,
    };
    dispatch(editMovie(newMovie));
    handleClose()
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Title:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label htmlFor="">Description:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label htmlFor="">Image:</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <label htmlFor="">Rate:</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditMovie;
