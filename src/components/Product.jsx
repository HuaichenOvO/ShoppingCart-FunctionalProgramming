import React from "react";
import PropTypes from "prop-types";

export default function Product({ product, onAddShoppingCart }) {
  return (
    <div className="col-4">
      <div className="card ">
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>${product.price}</p>
        <button className="btn btn-outline-primary btn-sm" onClick={onAddShoppingCart}>Add to Cart</button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddShoppingCart: PropTypes.func.isRequired,
};
