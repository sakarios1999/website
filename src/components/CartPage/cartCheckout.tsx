import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Col, Row } from "reactstrap";
import "./styles/Checkout.css";
interface IProps {
  cart: any;
}
interface IState {}
export default class Checkout extends Component<IProps, IState> {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <>
        <Row className="cartCheckout-Title">
          <Col md="6">
            <h3>Cart Totals</h3>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <h3 className="cartCheckout-Title__Subtotal">Subtotal</h3>
          </Col>
          <Col md="6">
            <p className="cartCheckout-Totals__Subtotal">
              $
              {cart.reduce((sum: number, a: any) => {
                return sum + a.regularPrice * a.quantity;
              }, 0)}
            </p>
          </Col>
        </Row>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        <Row>
          <Col md="6">
            <h3 className="cartCheckout-Title__Total">Total</h3>
          </Col>

          <Col md="6">
            <p className="cartCheckout-Totals__Total">
              $
              {cart.reduce((sum: number, a: any) => {
                return sum + a.regularPrice * a.quantity;
              }, 0)}
            </p>
          </Col>
        </Row>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        <Row>
          <Col md={{ size: 12, offset: 0 }} lg={{ size: 2, offset: 10 }}>
            <PayPalButton
              amount="0.01"
              style={{
                layout: "vertical",
                color: "black",
                shape: "rect",
                label: "checkout",
              }}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID,
                  }),
                });
              }}
            />
          </Col>
        </Row>
      </>
    );
  }
}
