import React from 'react';

const GuideItem = ({image, description}) => {
    return (
        <div className="guideItem">
            <div className="guideImageContainer">
                <img src={image} alt="guide"/>
            </div>
            <div className="guideItemDescription">
                <div>{description}</div>
            </div>
        </div>
    );
};

export default GuideItem;
