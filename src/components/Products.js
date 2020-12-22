import React from "react";
import { NavLink } from "react-router-dom";

function Products(props: Props) {
  const products = [
    {
      id: 1,
      name: "Iphone X",
      price: 35000,
    },
    {
      id: 2,
      name: "Iphone 9",
      price: 34000,
    },
    {
      id: 3,
      name: "Iphone 8",
      price: 12000,
    },
  ];

  const match = props;
  console.log('match', match);

  const result = products.map((product, index) => {
    return (
      <NavLink to="" key={index}>
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
    </div>
  );
}

export default Products;
