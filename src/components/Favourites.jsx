import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Job from './Job';


const Favourites = () => {
  const favorites = useSelector((state) => state.favorites);  

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">My Favourite Jobs</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favorites.length > 0 ? (
            favorites.map((jobData) => <Job key={jobData._id} data={jobData} />)  
          ) : (
            <p>No favourite jobs yet.</p>  
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;

