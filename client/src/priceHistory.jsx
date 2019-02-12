import React from 'react';
import PropTypes from 'prop-types';

const PriceHistory = (props) => {
  const { priceHistory } = props;
  return (
    <div>
      <div className="detailTitle">
        <span className="FTh5">
          Price History
        </span>
      </div>
      <div className="detailContent">
        <div className="detailContentOne">
          { priceHistory.price1 }
          <br />
          { priceHistory.price2 }
        </div>
      </div>
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
