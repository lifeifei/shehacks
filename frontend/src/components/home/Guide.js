import React from 'react';
import GUIDE_LIST_DESC from './GuideList';
import './Home.css';
import GuideItem from './GuideItem';

import product from './product.png';
import people from './people.png';
import transaction from './transaction.png';
import deliver from './deliver.png';

const Guide = () => {
    const images = [product, people, transaction, deliver];
    return (
      <div className="guide">
          <div className="guideTitle">HOW IT WORKS...</div>
          <div className="guideDescription">
              <div>A hassle-free and transparent way to split the costs of an online purchase.</div>

              <div>Paykitty enables you to purchase online items as a group. Groups can be made up of friends, family, community groups, and even strangers!</div>
          </div>
          <div className="guideList">
              {
                  images.map((imageName, index) => (<GuideItem key={index} image={imageName} description={GUIDE_LIST_DESC[index]} />))
              }

          </div>
      </div>
    );
};

export default Guide;
