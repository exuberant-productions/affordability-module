import React from 'react';
import PropTypes from 'prop-types';

const Description = (props) => {
  const { description } = props;
  return (
    <div>
      { description }
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
