import React from 'react';
import PropTypes from 'prop-types';

const Features = (props) => {
  const { homeDetails } = props;
  return (
    <div>
      <div className="detailTitle">
        <span className="FT h5">
          Featuers
        </span>
      </div>
      <div className="detailContentFlex">
        <div className="detailContentLeft padLR">
          <div className="mbm">
            <span className="typeEmphasize">LISTING INFORMATION</span>
            <br />
            <span className="typeLowLight h6">{`Updated: ${homeDetails.liUpdatedAt}`}</span>
          </div>
          <ul>
            <li>{`${homeDetails.liRooms} Bedrooms`}</li>
            <li>{`${homeDetails.liBaths} Bathrooms`}</li>
            <li>{homeDetails.liType}</li>
            <li>{`${homeDetails.liSqft} Square Feet`}</li>
            <li>{`Lot Size: ${homeDetails.liLotSize} sqft`}</li>
            <li>See Virtual Tour</li>
          </ul>
        </div>
        <div className="detailContentRight padLR">
          <div className="mbm">
            <span className="typeEmphasize">PUBLIC RECORDS</span>
            <br />
            <span className="typeLowLight h6">{`Updated: ${homeDetails.prUpdatedAt}`}</span>
          </div>
          <ul>
            <li>{`${homeDetails.prRooms} Bedrooms`}</li>
            <li>{`${homeDetails.prBaths} Bathrooms`}</li>
            <li>{homeDetails.prType}</li>
            <li>{`${homeDetails.prSqft} Square Feet`}</li>
            <li>{`Lot Size: ${homeDetails.prLotSize} sqft`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  homeDetails: PropTypes.instanceOf(Object).isRequired,
};

export default Features;
