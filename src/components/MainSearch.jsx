// src/components/MainSearch.jsx

import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/reducers/favouritesSlice';  

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  
  const favourites = useSelector(state => state.favourites); 
  const dispatch = useDispatch();  

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavorites = (job) => {
    dispatch(addToFavorites(job)); 
  };

  const handleRemoveFromFavorites = (jobId) => {
    dispatch(removeFromFavorites(jobId));  
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Search for remote jobs..."
              className="me-2"
            />
            <Button type="submit" variant="primary">Cerca</Button>
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.length > 0 ? (
            jobs.map((jobData) => (
              <Job
                key={jobData._id}
                data={jobData}
                onAddToFavorites={handleAddToFavorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
                isFavourite={favourites.some(job => job._id === jobData._id)}  
              />
            ))
          ) : (
            <p>No job listings available.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
