import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import PhoneDark from "../../assets/Images/PhoneDark.png";
import PhoneLight from "../../assets/Images/PhoneLight.png";
import LeftArrow from "../CustomComponents/CarouselArrows/LeftArrow";
import RightArrow from "../CustomComponents/CarouselArrows/RightArrow";
import "./styles/HeroCarousel.css";

export default class AutoPlay extends Component {
  slider: any;
  constructor(props: any) {
    super(props);
    this.slider = React.createRef();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 4000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <div className="Hero">
        <Slider
          className="Hero-slider"
          ref={(c) => (this.slider = c)}
          {...settings}
        >
          <div>
            <Container className="Hero-Container">
              <Row className="Hero-Row">
                <Col className="Hero-Info" lg="5">
                  <p className="Hero-SectionMsg">
                    SAY GOODBYE TO BUSINESS CARDS
                  </p>
                  <h1>The future Of socializing is reinvented.</h1>
                  <button className="Hero-Btn">Learn More</button>
                </Col>
                <Col className="Hero-ImgContainer" lg="7">
                  <img className="Hero-Image" src={PhoneLight} alt="" />
                  <img className="Hero-Image" src={PhoneDark} alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          <div>
            <h3> Slide 2</h3>
          </div>
          <div>
            <h3> Slide 3</h3>
          </div>
        </Slider>
        <div onClick={this.previous}>
          <LeftArrow />
        </div>
        <div onClick={this.next}>
          <RightArrow />
        </div>
      </div>
    );
  }
}
