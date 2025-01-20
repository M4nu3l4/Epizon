/* eslint-disable react/prop-types */
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/reducers/favouritesSlice';
import { Link } from 'react-router-dom';

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((job) => job._id === data._id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(data));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  console.log(data); 

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={12} md={6}>
        <Link to={`/${data.company_name}`} style={{ fontWeight: 'bold' }}>
          {data.company_name}
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <a href={data.url} target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem' }}>
          {data.title}
        </a>
      </Col>
      <Col xs={12}>
        <p>Category: {data.category}</p>
        <p>Job Type: {data.job_type}</p>
        <p>Location: {data.candidate_required_location}</p>
      </Col>
      <Col xs={12} className="mt-3">
        <Button
          variant={isFavorite ? 'danger' : 'primary'}
          onClick={handleFavoriteToggle}
        >
          {isFavorite ? 'Remove from Favourites' : 'Add to Favourites'}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;



