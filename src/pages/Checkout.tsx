import { Component } from "react";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import PriceCard from "../components/Checkout/PriceCard";
class Checkout extends Component<any, any> {
  render() {
    return (
      <Container>
        <Helmet>
          <title>TYC - Checkout</title>
        </Helmet>
        <Row>
          <Col md="8">
            <CheckoutForm />
          </Col>
          <Col md={{ size: "3", offset: "1" }}>
            <PriceCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Checkout;
