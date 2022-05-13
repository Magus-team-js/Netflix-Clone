import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from '../../modalMovie/ModalMovie'

export default function Movie(props) {
  const [show, setShow] = useState(false);
  const [chosenMovie, setChosenMovie] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setChosenMovie(movie);
    setShow(true);

  }
  return (
    <>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={props.movie.poster_path} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            {props.movie.overview}
          </Card.Text>
          <Card.Text>
            {props.movie.release_date}
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>Add To Favorite</Button>
        </Card.Body>
      </Card>
      {
        chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
      }
    </>
  )
}
