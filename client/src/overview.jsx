import React from 'react';
import PropTypes from 'prop-types';

const Overview = (props) => {
  const { homeDetails } = props;
  return (
    <div>
      <div className="detailTitle">
        <span className="FTh5">
          Overview
        </span>
      </div>
      <div className="detailContentFlex">
        <div className="detailContentLeft">
          <ul>
            <li>{homeDetails.ovType}</li>
            <li>{`${homeDetails.ovRooms} Beds`}</li>
            <li>{`${homeDetails.ovBaths} Baths`}</li>
            <li>{`Built in ${homeDetails.ovBuiltIn}`}</li>
            <li>{`${homeDetails.ovHowlongOnTrulia} days on Trulia`}</li>
          </ul>
        </div>
        <div className="detailContentRight">
          <ul>
            <li>{`${homeDetails.ovLotSize} sqft lot size`}</li>
            <li>{`${homeDetails.ovSqft} sqft`}</li>
            <li>{`$${homeDetails.ovPricePerSqft}/sqft`}</li>
            <li>{`${homeDetails.ovViews} views`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Overview.propTypes = {
  homeDetails: PropTypes.instanceOf(Object).isRequired,
};

export default Overview;
