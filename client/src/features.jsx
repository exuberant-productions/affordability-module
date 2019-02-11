import React from 'react';
import PropTypes from 'prop-types';

const Features = (props) => {
  const { features } = props;
  return (
    <div>
      feature below:
      <br />
      {features}
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.string.isRequired,
};

export default Features;
