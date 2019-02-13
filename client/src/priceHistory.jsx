import React from 'react';
import PropTypes from 'prop-types';

const formatDollar = (price) => {
  const strPrice = `${price}`;
  const remainder = (strPrice.length > 3) ? strPrice.length % 3 : 0;

  return `$${(remainder ? `${strPrice.substr(0, remainder)},` : '')}${strPrice.substr(remainder).replace(/(\d{3})(?=\d)/g, '$1,')}`;
};

const PriceHistory = (props) => {
  const { priceHistoryData } = props;
  return (
    <div>
      <div className="detailTitle">
        <span className="FT h5">
          Price History
        </span>
      </div>
      <div className="detailContentFlex pbn mbn">
        <div className="priceHistoryOne typeEmphasize padLR pts">
          Date
        </div>
        <div className="priceHistoryTwo typeEmphasize padLR pts">
          Price
        </div>
        <div className="priceHistoryThree typeEmphasize padLR pts">
          Event
        </div>
      </div>
      <div>
        <hr className="priceHistoryLine" />
      </div>
      {priceHistoryData.map(priceHistory => (
        <div key={priceHistory.id}>
          <div className="detailContentFlex pbn mbn">
            <div className="priceHistoryOne padLR pbm pts">
              {`${priceHistory.historyDate}`}
            </div>
            <div className="priceHistoryTwo padLR pbm pts">
              {`${formatDollar(priceHistory.price)}`}
            </div>
            <div className="priceHistoryTwo padLR pbm pts">
              {`${priceHistory.event}`}
            </div>
            {(priceHistory.event === 'Price Change' || priceHistory.event === 'Sold') ? (
              <div className="toggledContent">
                &#59445;
              </div>
            ) : ''}
          </div>
          <div>
            <hr className="priceHistoryLine mtn" />
          </div>
        </div>
      ))}
    </div>
  );
};

PriceHistory.propTypes = {
  priceHistoryData: PropTypes.instanceOf(Array).isRequired,
};

export default PriceHistory;
