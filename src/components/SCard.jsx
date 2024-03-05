import React from 'react';
import PropTypes from 'prop-types';

export default function SCard({ item, changeNumber, updateShoppingCart }) {

    console.log(`SCard | Item ${item.SID} is rendered `);

    return (
        <div className="card mb-4" style={{ width: "12rem" }}>
            <img src={item.SImage} alt={item.SName} />
            <div className="card-body">
                <p>{`  ${item.SName} - ${item.SID} `}</p>

                <p>
                    <button onClick={
                        () => { changeNumber(item.SID, -1); }
                    } className="btn btn-secondary btn-circle">-</button>

                    {`  ${item.SNumber}  `}

                    <button onClick={
                        () => { changeNumber(item.SID, 1); }
                    } className="btn btn-warning btn-circle">+</button>

                </p>
            </div>
        </div>)
}

SCard.propTypes = {
    item: PropTypes.object.isRequired,
    changeNumber: PropTypes.func.isRequired,
}