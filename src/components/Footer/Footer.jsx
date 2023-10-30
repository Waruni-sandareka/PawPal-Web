import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


const Footer = () => {
  return (
    <div className='bg-textYellowColor bg-no-repeat bg-cover bg-center text-white py-8'>
    <Container>
      <Row>
        <Col>
          <Col xs={4} className="footer-item">
            <i className="fa fa-phone" aria-hidden="true"></i> {/* You can replace "fa fa-phone" with your desired phone icon class */}
            <p>Telephone No: +1 123-456-7890</p>
          </Col>
          <Col xs={4} className="footer-item">
            <i className="fa fa-map-marker" aria-hidden="true"></i> {/* You can replace "fa fa-map-marker" with your desired address icon class */}
            <p>Address: 123 Street Name, City, Country</p>
          </Col>
          <Col xs={4} className="footer-item">
            <i className="fa fa-map" aria-hidden="true"></i> {/* You can replace "fa fa-map" with your desired location icon class */}
            <p>Location: Latitude, Longitude</p>
          </Col>
        </Col>
        <Col xs={12} md={6} className="footer-item text-center">
          <div>
            <h5>About the Company</h5>
            <p>
              A brief description of the company goes here.<br></br> You can provide information about your company's history, mission, and values.
            </p>
          </div>
        </Col>
        <Col xs={12} className="social-icons text-right mt-3 mx-5">
          <a href="#"><i className="fa fa-linkedin" aria-hidden="true">L</i></a>
          <a href="#"><i className="fa fa-twitter" aria-hidden="true">T</i></a>
          <a href="#"><i className="fa fa-facebook" aria-hidden="true">F</i></a>
          <a href="#"><i className="fa fa-instagram" aria-hidden="true">I</i></a>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Footer
