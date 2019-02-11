import React from 'react';

import Overview from './overview';
import Description from './description';
import Features from './features';
import PriceHistory from './priceHistory';

class HomeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <div className="overview">
          <Overview overview="hello" />
        </div>
        <div className="description">
          <Description description="this home is located at xxx and yyy street, with nice neighborhoods" />
        </div>
        <div className="features">
          <Features features="features data" />
        </div>
        <div className="priceHistory">
          <PriceHistory priceHistory={{ price1: 'price1', price2: 'price2' }} />
        </div>
      </div>
    );
  }
}

export default HomeDetails;
