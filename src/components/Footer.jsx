
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px 0', marginTop: 'auto' }}>
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Remote Jobs Search</h5>
            <p>Trova il tuo lavoro remoto ideale con facilità!</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6>Link Utili</h6>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="/" style={{ color: '#1abc9c', textDecoration: 'none' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/favourites" style={{ color: '#1abc9c', textDecoration: 'none' }}>
                  Preferiti
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h6>Contatti</h6>
            <p>Email: support@remotejobs.com</p>
            <p>Telefono: +39 123 456 789</p>
          </Col>
        </Row>
        <hr style={{ borderColor: '#7f8c8d' }} />
        <Row>
          <Col className="text-center">
            <p style={{ margin: 0 }}>
              &copy; {new Date().getFullYear()} Remote Jobs Search. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

