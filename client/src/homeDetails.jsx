import React from 'react';
import PropTypes from 'prop-types';

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
    const { homeDetails } = this.props;
    return (
      <div>
        <div className="featureTitle h3">
          Home Details
        </div>
        <Overview homeDetails={homeDetails} />
        <Description description={homeDetails.description} />
        <Features homeDetails={homeDetails} />
        <PriceHistory priceHistoryData={homeDetails.priceHistoryData} />
      </div>
    );
  }
}

HomeDetails.propTypes = {
  homeDetails: PropTypes.instanceOf(Object).isRequired,
};

export default HomeDetails;
