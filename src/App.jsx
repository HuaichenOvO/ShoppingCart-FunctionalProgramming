import "./App.css";

import React, { useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "flame.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "flame.jpg",
    },
  ])

  const onAddProduct = () => {
    setProducts([
      ...products,
      {
        id: products.at(-1).id + 1,
        name: `Product ${products.length + 1}`,
        price: 400,
        image: "https://via.placeholder.com/150",
      },
    ]);
  };

  const onAddShoppingCart = (e) => {

    const nodeList = e.target.parentNode.childNodes;
    const src = nodeList[0].getAttribute('src');
    const product = nodeList[0].getAttribute('alt');
    const price = nodeList[2].innerHTML.slice(1);
    const id = nodeList[0].getAttribute('alt').slice(8);
    console.log(+id);


    // setShoppingCart([...shoppingCart,
    // {
    //   id: +id,
    //   name: product,
    //   price: +price,
    //   image: src,
    // }
    // ])
  }

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <h1>Basic Shopping Site</h1>

          <ProductsList products={products} onAddShoppingCart={onAddShoppingCart} />

          <button className="btn btn-primary" onClick={onAddProduct}>
            Add Product
          </button>
        </div>
        {/* col-8 */}

        <div className="col-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart shoppingProducts={shoppingCart} />
          {/* {shoppingCart.map(
            (p, i) =>
              // <p key={i}>Blah Blah{shopping.at(i).name}</p>

              <div key={i} className="col-4">
                <li className='card'>
                  <img src={p.image} alt={p.name} />
                  {p.name}
                </li>
              </div>

          )} */}
          {/* <h1>{shopping.at(0).name}</h1> */}
        </div>
      </div>
    </div>
  );
}

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [
//         {
//           id: 1,
//           name: "Product 1",
//           price: 100,
//           image: "https://via.placeholder.com/150",
//         },
//         {
//           id: 2,
//           name: "Product 2",
//           price: 200,
//           image: "https://via.placeholder.com/150",
//         },
//         {
//           id: 3,
//           name: "Product 3",
//           price: 300,
//           image: "https://via.placeholder.com/150",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Basic Shopping Site</h1>

//         <h2>Products</h2>
//         <div className="products">
//           {this.state.products.map((product) => (
//             <div key={product.id} className="product">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>Price: {product.price}</p>
//               <button>Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
