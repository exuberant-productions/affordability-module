import React from 'react';
import PropTypes from 'prop-types';


const formatDollar = (price) => {
  const strPrice = Math.abs(price).toString();
  const negativeSign = price < 0 ? '-' : '';
  const remainder = (strPrice.length > 3) ? strPrice.length % 3 : 0;

  return `${negativeSign}$${(remainder ? `${strPrice.substr(0, remainder)},` : '')}${strPrice.substr(remainder).replace(/(\d{3})(?=\d)/g, '$1,')}`;
};

const getToggledContent = (priceHistory, show) => {
  if (priceHistory.event === 'Price Change' || priceHistory.event === 'Sold') {
    if (show[priceHistory.id]) {
      return (<div className="toggledContent">&#59505;</div>);
    }
    return (<div className="toggledContent">&#59445;</div>);
  }
  return '';
};

const getFormattedPriceChange = (priceChange) => {
  if (priceChange < 0) {
    return (
      <div>
        <span className="negativeValue h7">
          {formatDollar(priceChange)}
        </span>
        <span className="h7">
          &nbsp;(-20.22%)
        </span>
      </div>
    );
  }
  return (
    <div>
      <span className="positiveValue h7">
        {formatDollar(priceChange)}
      </span>
      <span className="h7">
        &nbsp;(33%)
      </span>
    </div>
  );
};

class PriceHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {},
    };
    this.handleToggleContentOnClick = this.handleToggleContentOnClick.bind(this);
  }

  componentDidMount() {
    const show = {};
    const { priceHistoryData } = this.props;
    priceHistoryData.forEach((priceHistory) => {
      show[priceHistory.id] = false;
    });
    this.setState({ show });
  }

  handleToggleContentOnClick(number) {
    const { show } = this.state;
    const prevShow = show[number];
    this.setState({ show: { ...show, [number]: !prevShow } });
  }

  render() {
    const { priceHistoryData } = this.props;
    const { show } = this.state;
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
          <div key={priceHistory.id} className={(priceHistory.event === 'Price Change' || priceHistory.event === 'Sold') ? 'clickable' : ''} onClick={() => this.handleToggleContentOnClick(priceHistory.id)} onKeyDown={() => {}} role="button" tabIndex={-1}>
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
              {getToggledContent(priceHistory, show)}
            </div>
            {(priceHistory.event === 'Price Change')
              ? (
                <div className={(show[priceHistory.id]) ? '' : 'toggleHidden'}>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne padLR mtn mbn pts h7 typeEmphasize txtR">
                      Price Change
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {getFormattedPriceChange(priceHistory.priceChange)}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Source
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.source}
                    </div>
                  </div>
                </div>
              )
              : ''}
            {(priceHistory.event === 'Sold')
              ? (
                <div className={(show[priceHistory.id]) ? '' : 'toggleHidden'}>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne padLR mtn mbn pts h7 typeEmphasize txtR">
                      Recording Date
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.recordingDate}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Contract Date
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.contractDate}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Sale Price
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.salePrice}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Price Type
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.priceType}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      County Transfer Tax
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.countyTransferTax}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Total Transfer Tax
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.totalTransferTax}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Transaction Type
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.transactionType}
                    </div>
                  </div>
                  <div className="detailContentFlex">
                    <div className="priceHistoryOne  mtn mbn padLR pts h7 typeEmphasize txtR">
                      Document Type
                    </div>
                    <div className="priceHistoryThree  mtn mbn padLR pts h7 txtL">
                      {priceHistory.documentType}
                    </div>
                  </div>
                </div>
              )
              : ''}
            <div>
              <hr className="priceHistoryLine" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PriceHistory.propTypes = {
  priceHistoryData: PropTypes.instanceOf(Array).isRequired,
};

export default PriceHistory;
