import { Carousel, Col, Row } from "react-bootstrap";
import "./FeaturedVehicles.css";

const FeaturedVehicles = ({ carouselItems }) => {
  return (
    <Carousel>
      {carouselItems.map((car) => (
        <Carousel.Item key={car.id}>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8}>
              <img
                className="d-block w-100 carousel-img"
                src={car.imgPath}
                alt={`${car.make}_${car.model}`}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="text-center featured-car-details">
              <h3>{`${car.make} ${car.model}`}</h3>
              <p>{car.price} Eur</p>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FeaturedVehicles;
