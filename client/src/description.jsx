import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  const { description } = props;
  return (
    <div>
      <div className="detailTitle">
        <span className="FTh5">
          Description
        </span>
      </div>
      <div className="detailContent">
        <div className="detailContentOne">
          { description }
        </div>
        <div>
          <span className="toggleMore">See More</span>
        </div>
      </div>
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
