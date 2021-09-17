import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { Col, Input, Row } from "reactstrap";
import { addItem } from "../../store/Actions/cartActionCreator";
import AddToCartButton from "../CustomComponents/AddToCartButton/AddToCartButton";
import "./styles/ProductCard.css";

class ProductCard extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: any) {
    this.setState({ quantity: parseInt(e.target.value) });
  }
  handleAdd = () => {
    const newItem: any = {
      ...this.props.product,
      quantity: this.state.quantity,
    };
    return this.props.addItem(newItem);
  };
  render() {
    const { product, categories } = this.props;
    const inStock = true;
    console.log("Card", this.props.product);
    return (
      <div className="Card">
        {/*{!inStock && <p className="Card-OutOfStock">Sold Out</p>}*/}
        <Row className="Card-img__Container">
          <img
            className="Card-Img"
            src={
              !product.bannerImage
                ? "https://imagestycdeve.s3.us-east.cloud-object-storage.appdomain.cloud/post/nfc.png"
                : this.props.product.bannerImage
            }
            alt=""
          />
          <span className="Card-addToCart">
            {" "}
            <AddToCartButton />
          </span>
        </Row>

        <Row className="Card-Type-Rating">
          <Col lg={6}>
            <p className="Card-Type">
              {product.categories &&
                product.categories.map((cat: any) => {
                  return cat.title;
                })}
            </p>
          </Col>

          <Col lg={5} className="Card-Stars-Col">
            <StarRatings
              className="Card-Stars"
              rating={5}
              StarRatedColor="black"
              numberOfStars={5}
              isSelectable={false}
              starDimension="15px"
              starSpacing="0px"
            />
          </Col>
        </Row>
        <Row className="Card-Title">
          <Col lg={12}>
            <Link
              className="Card-Title__Link"
              to={`/Product/${this.props.product.id}/${this.props.product.categories[0].title}`}
            >
              {product.title}
            </Link>
          </Col>
        </Row>
        <Row className="Card-Price-Order">
          <Col lg={2}>
            <p className="Card-Price">{`$${product.regularPrice}`}</p>
          </Col>
          <Col lg={3}>
            <Input
              className="Card-Order"
              type="number"
              min={1}
              placeholder="1"
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state: ICart) => {
  return { Cart: state };
};
const mapDispatchToProps = (dispatch: DispatchType) => ({
  addItem: (item: ICart) => dispatch(addItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
