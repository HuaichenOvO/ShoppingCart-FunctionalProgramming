import "./App.css";

import React, { useState } from "react";

import PopupWindow from "./components/PopupWindow.jsx"
import Products from "./components/Products.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

export default function App() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const togglePopup = () => { setIsPopupOpen(!isPopupOpen); };

	// https://www.imagine.art/dashboard/tool/realtime/text
	// citation of the AI picture generator
	// worth a try, real cool
	const [products, setProducts] = useState([
		{
			productID: 1,
			productName: `Roast Meat`,
			productImage: 'meat1.png',
			productPrice: 5,
		},
		{
			productID: 2,
			productName: `Steak Souples`,
			productImage: 'noodle1.png',
			productPrice: 8,
		},
		{
			productID: 3,
			productName: `Salmon Rice`,
			productImage: 'rice1.png',
			productPrice: 9,
		},
		{
			productID: 4,
			productName: `Avocado Salad`,
			productImage: 'salad1.png',
			productPrice: 4,
		},
		{
			productID: 5,
			productName: `Meatball Noodles`,
			productImage: 'noodle3.png',
			productPrice: 7,
		},
	]);

	const [cartItems, setCartItems] = useState([
		{
			SID: 1,
			SName: `Roast Meat`,
			SImage: 'meat1.png',
			SPrice: 5,
			SNumber: 3,
		},
		{
			SID: 2,
			SName: `Steak Souples`,
			SImage: 'noodle1.png',
			SPrice: 8,
			SNumber: 3,
		},
		{
			SID: 4,
			SName: `Avocado Salad`,
			SImage: 'salad1.png',
			SPrice: 4,
			SNumber: 2,
		},
	]);

	const onChangeButtonPressed = (ID, number) => {
		// Get the index of the clicked product
		// console.log(`onChangeButtonPressed | Clicked`);

		const clickedItem = Array
			.from(cartItems)
			.filter((i) => (i.SID == ID))
			.at(0);

		const clickedIndex = Array
			.from(cartItems)
			.indexOf(clickedItem);

		// why?????????????
		clickedItem.SNumber += number;

		if (clickedItem.SNumber == 0) {
			// setCartItems(newCartItems);
			// cartItems.splice(clickedIndex, 1);
			const newCartItems = Array.from(cartItems);
			newCartItems.splice(clickedIndex, 1);
			setCartItems(newCartItems);
		}
		else {
			const newCartItems = Array.from(cartItems);
			newCartItems.splice(clickedIndex, 1, clickedItem);
			setCartItems(newCartItems);
		}

		console.log(`App | Clicked + or - on item index ${clickedIndex}`);
	};

	const onAddShoppingCart = (ID) => {

		let newCartItems = Array.from(cartItems);
		const newItemExists = newCartItems
			.filter((i) => (i.SID == ID))
			.length;

		const tmpItem = Array
			.from(products)
			.filter((i) => i.productID == ID)
			.at(0);

		if (newItemExists == 0) {
			setCartItems([...cartItems,
			{
				SID: tmpItem.productID,
				SName: tmpItem.productName,
				SImage: tmpItem.productImage,
				SPrice: tmpItem.productPrice,
				SNumber: 1,
			}
			])
		}
		else {
			onChangeButtonPressed(ID, 1);
		}

		console.log(`App | Add to shopping cart. Product ID is ${ID}. Number this item is ${newItemExists}`);
	};

	const onCreateProduct = (receivedObj) => {
		togglePopup();
		receivedObj
		const newProduct = {
			productID: products.at(-1).productID + 1,
			productName: receivedObj.productName,
			productImage: "unknown.png",
			productPrice: receivedObj.productPrice,
		}
		setProducts([...products, newProduct]);
		console.log(`App [submit new obj] | old ID: ${products.at(-1).productID}`);
	}

	return (
		<>
			<div className="container-md">
				<h1>We Order!</h1>
				<p>
					Any dishes you can create? <button onClick={togglePopup} className="btn btn-success">Add new dishes!</button>
				</p>
				<PopupWindow isOpen={isPopupOpen} onSubmitObject={onCreateProduct} />
				<hr />
			</div >

			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Products products={products} onAdd={onAddShoppingCart} />
					</div>

					<div className="col-md-6">
						<ShoppingCart shoppingProducts={cartItems} changeNumber={onChangeButtonPressed} />
					</div>
				</div>
			</div>
		</>
	);
}
