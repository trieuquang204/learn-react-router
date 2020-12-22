import React, { component } from "react";


function Product(props: Props) {
  const match  = props;
  const slug = match.match.params.slug

  return (
    <div className="App">Day la trang chi tiet san pham : {slug} </div>
  );
}

export default Product;
