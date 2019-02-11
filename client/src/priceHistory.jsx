import React from 'react';
import PropTypes from 'prop-types';

const PriceHistory = (props) => {
  const { priceHistory } = props;
  return (
    <div>
      { priceHistory.price1 }
      <br />
      { priceHistory.price2 }
    </div>
  );
};

PriceHistory.propTypes = {
  priceHistory: PropTypes.shape({
    price1: PropTypes.string,
    price2: PropTypes.string,
  }),
};

PriceHistory.defaultProps = { priceHistory: { } };

export default PriceHistory;
