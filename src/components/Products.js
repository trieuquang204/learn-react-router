import React from "react";
import { NavLink, Route } from "react-router-dom";
import Product from './Product';

function Products(props: Props) {
  const products = [
    {
      id: 1,
      name: "Iphone X",
      slug: 'iphonex',
      price: 35000,
    },
    {
      id: 2,
      name: "Iphone 9",
      slug: 'iphone9',
      price: 34000,
    },
    {
      id: 3,
      name: "Iphone 8",
      slug: 'iphone8',
      price: 12000,
    },
  ];

  const match = props;
  const url = match.match.url;

  const result = products.map((product, index) => {
    return (
      <NavLink to={`${url}/${product.slug}`} key={index}>
        <li className="list-group-item">
          {product.id} - {product.name} - {product.price}
        </li>
      </NavLink>
    );
  });

  return (
    <div className="container">
      <h1>Danh sach san pham</h1>
      <div className="row">
        <ul className="list-group">{result}</ul>
      </div>
      <div className="row">
        <Route path="/products/:slug" component={Product} />
      </div>
    </div>
  );
}

export default Products;
