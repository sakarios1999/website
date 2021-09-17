import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/PriceCard.css";

class PriceCard extends Component<any, any> {
  render() {
    const { cart } = this.props;
    const Delivery = 15;
    const Total = cart.reduce((sum: number, a: any) => {
      return sum + a.regularPrice * a.quantity;
    }, 0);
    return (
      <div className="PriceCard">
        <div className="PriceCard-Section">
          <p>Price({cart.length} items) :</p>
          <p>${Total}</p>
        </div>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        <div className="PriceCard-Section">
          <p>Delivery Charge:</p>
          <p>${Delivery}</p>
        </div>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
          }}
        />
        <div className="PriceCard-Section">
          <p>Total Price:</p>
          <p>${Total + Delivery}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    cart: state.CartReducer.Cart,
  };
};
export default connect(mapStateToProps, null)(PriceCard);
