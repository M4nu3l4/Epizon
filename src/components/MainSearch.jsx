import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Job from './Job';
import { Link } from 'react-router-dom';

const MainSearch = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search=';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);  

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20');
      if (response.ok) {
        const { data } = await response.json();
        console.log('Jobs data:', data); 
        setJobs(data);
      } else {
        alert('Error fetching results');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading ? (
            <p>Loading...</p>  
          ) : jobs.length > 0 ? (
            jobs.map(jobData => <Job key={jobData._id} data={jobData} />)
          ) : (
            <p>No jobs found.</p> 
          )}
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <Link to="/favourites">
            <Button variant="success">Go to Favourites</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

