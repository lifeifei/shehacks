import React from 'react';
import './Home.css';
import PostedForm from './PostedForm';

const Posted = () => {
    return (
        <div className="posted">
            <div>We're not live yet, but be one of the first to sign up! </div>
            <PostedForm />
        </div>
    );
};

export default Posted;
