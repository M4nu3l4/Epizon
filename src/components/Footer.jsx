
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3" style={{ border: '1px solid red' }}>

      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5>Remote Jobs Search</h5>
            <p>Trova il tuo lavoro remoto ideale con facilità!</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6>Link Utili</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-success text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/favourites" className="text-success text-decoration-none">
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
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Remote Jobs Search. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
