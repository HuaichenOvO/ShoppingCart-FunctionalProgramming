import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

import PCard from "./PCard";

export default function Products({ products, onAdd }) {
	const [pagination, setPagination] = useState(null);
	const [page, setPage] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	const onClickPage = (pageNumber) => {
		if (pageNumber == 0) {
			pageNumber = 1
		}
		else if (pageNumber == parseInt(products.length / 3) + 2) {
			pageNumber = parseInt(products.length / 3) + 1
		}
		console.log(`onClickPage | modified page ${pageNumber}`);
		setCurrentPage(pageNumber);
	}

	useEffect(
		() => {
			setPage(
				products
					.map((product, i) => {
						if (parseInt(i / 3) + 1 == currentPage) return <PCard key={i} p={product} onAdd={onAdd} />
					}
					)
			);

			if (products.length >= 3) {
				setPagination(
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item">
								<a className="page-link" href="#" onClick={() => {
									onClickPage(currentPage - 1);
								}}>
									Previous
								</a>
							</li>
							{products
								.map((p, i) => {
									if (i % 3 === 0) {
										const pageIndex = parseInt(i / 3 + 1);
										let insideHTML = {};
										if (pageIndex == currentPage) insideHTML = <b>{pageIndex}</b>;
										else insideHTML = <>{pageIndex}</>;
										return (<li key={i + 1} className="page-item">
											<a className="page-link" href="#" onClick={() => {
												onClickPage(pageIndex);
											}}>
												{insideHTML}
											</a>
										</li>);
									}
								})}
							<li className="page-item">
								<a className="page-link" href="#" onClick={() => {
									onClickPage(currentPage + 1);
								}} >
									Next
								</a>
							</li>
						</ul>
					</nav>
				)
			};
		}, [products, currentPage]
	);

	return (
		<>
			<h2>Order your favorites!</h2>
			<div className="row">
				{page}
			</div>

			{pagination}
		</>
	);
}

Products.propTypes = {
	products: PropTypes.array.isRequired,
	onAdd: PropTypes.func.isRequired,
};
