import React from 'react'
import PropTypes from 'prop-types';

export default function ShoppingCart({ shoppingProducts }) {
    // ??????????????????????????????/
    return (
        <div className="products row">
            <ul>
                {shoppingProducts.map(
                    (p) => {
                        { console.log("shoppingProducts: ", p.name) }
                        return (<div className="col-4">
                            <li className='card'>
                                <img src={p.image} alt={p.name} />
                                <p>Blah Blah{p.name}</p>
                            </li>
                        </div>)
                    }
                )}
            </ul>
        </div>
    )
}

ShoppingCart.propTypes = {
    shoppingProducts: PropTypes.array.isRequired,
}