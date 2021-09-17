import React, { Component } from "react";
import { Col } from "reactstrap";
import ProductCard from "./ProductCard";
import "./styles/ProductList.css";
interface IProps {
  category: any;
  products: any;
}
interface IState {}
export default class ProductList extends Component<IProps, IState> {
  render() {
    const { category, products } = this.props;
    let prod =
      category === ""
        ? products
        : products.filter((p: any) =>
            p.categories.some((cat) => cat.id === category)
          );
    return (
      <div className="ProductList">
        {prod &&
          prod.map((p: any) => {
            return (
              <Col xlg={3} lg={4} md={6} sm={12}>
                <ProductCard product={p} category={category} />
              </Col>
            );
          })}
      </div>
    );
  }
}
