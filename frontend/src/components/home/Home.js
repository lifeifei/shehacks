import React from 'react';
import './Home.css';
import HomeContent from './HomeContent';

const Home = () => {
    return (
        <div className="canvas">
            <div className="leftCanvas"/>
            <HomeContent/>
            <div className="rightCanvas"/>
        </div>
    );
};

export default Home;
