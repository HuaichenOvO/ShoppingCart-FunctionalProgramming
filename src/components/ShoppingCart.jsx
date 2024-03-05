import './../App.css'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

import SCard from './SCard';

export default function ShoppingCart({ shoppingProducts, changeNumber }) {
    // When state changes, use useState, when prop changes, use useEffect
    const [sum, setSum] = useState(0);

    useEffect(
        () => {
            if (shoppingProducts.length == 0) {
                setSum(0);
            }
            else {
                // why???????????????
                const tmpProducts = Array.from(shoppingProducts);
                const result = tmpProducts.reduce(
                    (acc, currentItem) =>
                        acc + currentItem.SPrice * currentItem.SNumber
                    , 0
                );

                setSum(result);
                console.log(`getTotalBill | The sum is ${result}`);
            }
        }, [shoppingProducts]
    )


    return (
        <>
            <h4>Shopping Cart | Checkout Bill $ {sum}</h4>
            <div className="row">
                {shoppingProducts.map(
                    (p, i) => {
                        if (p.SNumber > 0)
                            return <SCard key={i} item={p} changeNumber={changeNumber} />
                    }
                )}
            </div>
        </>
    )
}

ShoppingCart.propTypes = {
    shoppingProducts: PropTypes.array.isRequired,
    changeNumber: PropTypes.func.isRequired,
}