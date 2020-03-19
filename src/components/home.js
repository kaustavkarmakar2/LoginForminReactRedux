import React from "react";
import Team from "./team.js";
import Carousel from "react-bootstrap/Carousel";
import AboutUser from "./aboutus";
class Services extends React.Component {
  Household = () => {};
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/16:9x1080/"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/16:9x1080/"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://dummyimage.com/16:9x1080/"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="imageholder">
          <div className="card card-2"></div>
          <div className="card card-2"></div>
          <div className="card card-2"></div>
          <div className="card card-2"></div>
        </div>
        <div className="imageholder">
          <div className="card card-2"></div>
          <div className="card card-2"></div>
          <div className="card card-2"></div>
          <div className="card card-2"></div>
        </div>
        <Team />
        <AboutUser />
      </div>
    );
  }
}
export default Services;
