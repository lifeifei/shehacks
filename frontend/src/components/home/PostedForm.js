import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Home.css';
const PostedForm = () => {
    return (
        <form className="postedForm">
            <div className="inputContainer">
                <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Your Email"
                />
            </div>

            <div className="buttonContainer">
                <button className="button">Keep me posted</button>
            </div>

        </form>
    );
};
export default reduxForm({
    form: 'posted',
})(PostedForm);
