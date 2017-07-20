import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Home.css';

const required = value => value ? undefined : 'Required';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;

const PostedForm = ({ handleSubmit }) => {
    return (
        <form className="postedForm" onSubmit={handleSubmit}>
            <div className="inputContainer">
                <Field
                    name="email"
                    component="input"
                    type="text"
                    placeholder="Your Email"
                    validate={[ required, email ]}
                />
            </div>

            <div className="buttonContainer">
                <button className="button" type="submit">Sign up</button>
            </div>

        </form>
    );
};
export default reduxForm({
    form: 'posted',
})(PostedForm);
