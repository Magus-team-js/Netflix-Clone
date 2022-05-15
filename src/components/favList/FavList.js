import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from '../navbar/Navbar';
import { Container } from 'react-bootstrap';

export default function FavList() {

  const [favMovies, setFavMovies] = useState();

  async function getFavMovies() {
    let url = 'https://movies-bahaa.herokuapp.com/getMovies';
    let response = await fetch(url, {
      method: 'GET',
    });
    let recivedData = await response.json();
    setFavMovies(recivedData)
  }
  
  async function handleDelete(id) {
    let url = `https://movies-bahaa.herokuapp.com/DELETE?id=${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  
    });
    if (response.status === 204) {
      getFavMovies();
      alert('Movie deleted successfully');
    }
  }

  useEffect(() => {
    getFavMovies();
  }, [])

  return (
    <>
      <Navbar />
      <Container fluid className="main-container" >
      <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
      {
        favMovies && favMovies.map((favMovie) => {
          return (
            <Card style={{ width: '18rem', textAlign: "center", marginTop: "3rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400/${favMovie.image}`} />
              <Card.Body style={{backgroundColor:"#7F8487"}}>
                <Card.Title>{favMovie.title}</Card.Title>
                <Card.Text style={{ overflowX: 'hidden', scrollBehavior: 'smooth', height: '200px' }}>
                  {favMovie.summary}
                </Card.Text>
                <Card.Text>
                  {favMovie.comment}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDelete(favMovie.id)}>Delete</Button>
              </Card.Body>
            </Card>
          )
        })
      }
        </div>
        </Container>
    </>
  )
}
