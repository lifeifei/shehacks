import React from 'react';
import './Home.css';
import HomeLogo from './home_logo.svg';
import Guide from './Guide';
import Posted from './Posted';

const HomeContent = () => {
    return (
        <div className="content">
            <div><img src={HomeLogo} alt="Home"/></div>
            <div className="title">paykitty</div>
            <div className="description">POWERING FINANCIAL EQUALITY</div>
            <Guide/>
            <Posted/>
        </div>
    );
};

export default HomeContent;
