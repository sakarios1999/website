/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import { Col, Container, Input, Row } from "reactstrap";
import { addItem } from "../../store/Actions/cartActionCreator";
import Tabs from "./productTabsComponent/Tabs";
import "./styles/Product.css";

class Product extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  handleChange = (val: string) => {
    this.setState({ quantity: parseInt(val) });
  };
  handleAdd = () => {
    const productId = this.props.match.params.id;
    const newItem: any = {
      ...this.props.products.find((product: any) => product.id === productId),
      quantity: this.state.quantity,
    };
    console.log(newItem);
    return this.props.addItem(newItem);
  };
  // renderSuggestions() {
  //   const ProductCat = this.props.match.params.Category;
  //   const ProductId = this.props.match.params.id;
  //   let Prod: Array<any> = [];
  //   this.props.products.map((p: any) => {
  //     if (p.categories[0] === ProductCat) {
  //       if (p.id.toString() !== ProductId) {
  //         Prod.push(p);
  //         console.log(Prod);
  //       }
  //     }
  //   });
  //   console.log("prod", Prod);
  //   return (
  //     <Row>
  //       <Col lg="4" s="12">
  //         <ProductCard {...Prod[Math.floor(Math.random() * Prod.length)]} />
  //       </Col>
  //       <Col lg="4" s="12">
  //         <ProductCard {...Prod[Math.floor(Math.random() * Prod.length)]} />
  //       </Col>
  //       <Col lg="4" s="12">
  //         <ProductCard {...Prod[Math.floor(Math.random() * Prod.length)]} />
  //       </Col>
  //     </Row>
  //   );
  // }

  render() {
    const ProductId = this.props.match.params.id;
    return this.props.products.map((prod: any) => {
      if (prod.id.toString() === ProductId) {
        return (
          <Container className="Product" fluid={true}>
            <Row className="Product-Section">
              <Col className="Product-Img__Container" lg="6" md="12">
                <img
                  className="Product-Img"
                  src={prod.bannerImage}
                  alt={prod.name}
                />
              </Col>
              <Col className="Product-Section__Info" lg="6" md="12">
                <p className="Product-Category">{prod.categories[0].title}</p>
                <h1 className="Product-Name">{prod.title}</h1>
                <h4 className="Product-Price">{`$${prod.regularPrice}`}</h4>
                <Row className="Product-Reviews">
                  <Col lg="3">
                    <StarRatings
                      className="Product-Stars"
                      rating={5}
                      StarRatedColor="black"
                      numberOfStars={5}
                      isSelectable={false}
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </Col>
                  <Col lg="5">
                    <p className="Product-ReviewNumber">{`( 2 Customer Reviews )`}</p>
                  </Col>
                </Row>
                <p
                  className="Product-info"
                  dangerouslySetInnerHTML={{ __html: prod.description }}
                />
                <Row className="Product-BuyingSection">
                  <Col lg="2">
                    <Input
                      type="number"
                      placeholder="1"
                      min={1}
                      onChange={(e) => this.handleChange(e.target.value)}
                    ></Input>
                  </Col>
                  <Col lg="6">
                    <button
                      onClick={() => this.handleAdd()}
                      className="Product-addToCart"
                    >
                      ADD TO CART
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg="12">
                <Tabs
                  description={prod.description}
                  info={prod.info}
                  reviews={prod.reviews}
                  additionalInfo={prod.additionalInfo}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <h1 className="Products-Related">Related Products</h1>
            </Row>
            {/* {this.renderSuggestions()} */}
          </Container>
        );
      }
    });
  }
}
const mapStateToProps = (state: any) => {
  return {
    products: state.ProductsReducer.products,
  };
};
const mapDispatchToProps = (dispatch: DispatchType) => ({
  addItem: (item: ICart) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
