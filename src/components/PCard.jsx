import React from "react";
import PropTypes from "prop-types";

export default function PCard({ p, onAdd }) {

	return (
		<div className="card mb-4" style={{ width: "12rem" }}>
			<img src={p.productImage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h6 className="card-title">{p.productName} - {p.productID}</h6>
				<h6>$ {p.productPrice}</h6>
				<button className="btn btn-success" onClick={() => onAdd(p.productID)}>
					Add to cart!
				</button>
			</div>
		</div>

	);
}

PCard.propTypes = {
	p: PropTypes.object.isRequired,
	onAdd: PropTypes.func.isRequired,
};
