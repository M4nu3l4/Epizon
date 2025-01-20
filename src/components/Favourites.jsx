import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/reducers/favouritesSlice';
import Job from './Job'; 

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);  
  const dispatch = useDispatch();  

  
  const handleRemoveFromFavourites = (jobId) => {
    dispatch(removeFromFavorites(jobId)); 
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">My Favourite Jobs</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favourites.length > 0 ? (
            favourites.map((jobData) => (
              <div key={jobData._id} className="job-card">
                <Job
                  data={jobData}  
                  isFavourite={true} 
                  onAddToFavourites={() => {}}  
                  onRemoveFromFavourites={() => handleRemoveFromFavourites(jobData._id)}  
                />
              </div>
            ))
          ) : (
            <p>No favourite jobs yet.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
