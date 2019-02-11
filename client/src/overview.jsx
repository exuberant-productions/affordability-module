import React from 'react';
import PropTypes from 'prop-types';

const Overview = (props) => {
  const { overview } = props;
  return (
    <div>
      overview... blah blah
      <br />
      {overview}
    </div>
  );
};

Overview.propTypes = {
  overview: PropTypes.string.isRequired,
};

export default Overview;
