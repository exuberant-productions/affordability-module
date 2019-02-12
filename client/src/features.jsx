import React from 'react';
import PropTypes from 'prop-types';

const Features = (props) => {
  const { features } = props;
  return (
    <div>
      <div className="detailTitle">
        <span className="FTh5">
          Featuers
        </span>
      </div>
      <div className="detailContentFlex">
        <div className="detailContentLeft">
          feature below:
          <br />
          {features}
        </div>
        <div className="detailContentRight">
          feature two blah
          <br />
          472 rooms
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.string.isRequired,
};

export default Features;
