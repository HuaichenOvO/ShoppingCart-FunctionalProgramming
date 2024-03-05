import React, { useState } from 'react';
import PropTypes from "prop-types";

export default function PopupWindow({ isOpen, onSubmitObject }) {
    const [tProductName, setTProductName] = useState("");
    const [tProductPrice, setTProductPrice] = useState("");
    const [isResetDone, setIsResetDone] = useState(false);

    // Event handler to handle form submission
    // ////////???????????????????
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(`PopupWindow | Name: ${tProductName}, price: ${tProductPrice}`);
        // Here, you can perform any further processing with the form values
        if (!isNaN(parseInt(tProductPrice))) {
            if (parseInt(tProductPrice) > 0) {
                const tmpObj = {
                    productName: tProductName,
                    productPrice: tProductPrice
                };
                onSubmitObject(tmpObj);
            }
        }
        else {
            window.alert("Invalid price input!");
        }
        setTProductName("");
        setTProductPrice("");
    };

    const formComponent =
        <form onSubmit={handleSubmit}>
            <div className="popup-content">
                {/* Content of your popup window */}
                <h4>Design your dish</h4>
                <div className="row g-3 align-items-center" style={{ margin: '10px' }}>
                    <div className="col-auto">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            Dish Name
                        </label>
                    </div>

                    <div className="col-auto">
                        <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            id="exampleFormControlInput1"
                            value={tProductName}
                            onChange={(e) => setTProductName(e.target.value)}
                            placeholder="Fantastic dish name"
                        />
                    </div>
                </div>
                {/* <div className="row g-2 align-items-center" style={{ margin: '10px' }}>
                        <div className="col-auto">
                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                Some picture?
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput2"
                                placeholder="HAHA Not allowed!"
                                disabled
                            />
                        </div>
                    </div> */}
                <div className="row g-2 align-items-center" style={{ margin: '10px' }}>
                    <div className="col-auto">
                        <label htmlFor="exampleFormControlInput1" className="form-label">
                            A proper price?
                        </label>
                    </div>
                    <div className="col-auto">
                        <input
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            id="exampleFormControlInput3"
                            value={tProductPrice}
                            onChange={(e) => setTProductPrice(e.target.value)}
                            placeholder="Say.. 1?"
                        />
                    </div>
                </div>

                <button className="btn btn-primary" type='submit'>Comfirm</button>
            </div>
        </form>;

    if (!isOpen) {
        if (!isResetDone) {
            setTProductName("");
            setTProductPrice("");
            setIsResetDone(true);
        }
        return null;
    }
    else {
        if (isResetDone) {
            setIsResetDone(false);
        }
        return (

            <div className="popup-overlay">
                {formComponent}
            </div>
        );
    }
}

PopupWindow.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onSubmitObject: PropTypes.func.isRequired,
};
