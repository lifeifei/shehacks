import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProductForm = props => {
    const { handleSubmit, reset} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Title</label>
                <div>
                    <Field
                        name="productType"
                        component="input"
                        type="text"
                        placeholder="productType"
                    />
                </div>
            </div>
            <div>
                <label>Product Url</label>
                <div>
                    <Field
                        name="productUrl"
                        component="input"
                        type="text"
                        placeholder="productUrl"
                    />
                </div>
            </div>
            <div>
                <label>Product Total Price</label>
                <div>
                    <Field
                        name="productTotalPrice"
                        component="input"
                        type="text"
                        placeholder="productTotalPrice"
                    />
                </div>
            </div>
            <div>
                <label>Sharing description</label>
                <div>
                    <Field
                        name="shareDescription"
                        component="textarea"
                        type="text"
                        placeholder="shareDescription"
                    />
                </div>
            </div>
            <div>
                <label>Shipping Details</label>
                <div>
                    <Field
                        name="shippingDetails"
                        component="input"
                        type="text"
                        placeholder="shippingDetails"
                    />
                </div>
            </div>
            <div>
                <button type="submit">Confirm</button>
                <button type="button"onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple',
})(ProductForm);
