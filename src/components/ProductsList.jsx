import PropTypes from "prop-types";

import Product from "./Product";

export default function ProductsList({ products, onAddShoppingCart }) {
  return (
    <>
      <h2>Products</h2>
      <div className="products row">
        {products.map((p, i) => (
          <Product key={i} product={p} onAddShoppingCart={onAddShoppingCart} />
        ))}
      </div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddShoppingCart: PropTypes.func.isRequired,
};
