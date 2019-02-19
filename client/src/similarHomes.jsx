import React from 'react';
import PropTypes from 'prop-types';

const formatDollar = (price) => {
  const strPrice = Math.abs(price).toString();
  const negativeSign = price < 0 ? '-' : '';
  const remainder = (strPrice.length > 3) ? strPrice.length % 3 : 0;

  return `${negativeSign}$${(remainder ? `${strPrice.substr(0, remainder)},` : '')}${strPrice.substr(remainder).replace(/(\d{3})(?=\d)/g, '$1,')}`;
};

class SimilarHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: props.similarHomes.length,
      hovered: false,
      transitionX: 0,
      liked: { },
    };
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
    this.applyLeftTransition = this.applyLeftTransition.bind(this);
    this.applyRightTransition = this.applyRightTransition.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({ hovered: true });
  }

  handleOnMouseLeave() {
    this.setState({ hovered: false });
  }

  applyLeftTransition() {
    const { transitionX } = this.state;
    if (transitionX > -3) this.setState({ transitionX: 0 });
    else this.setState({ transitionX: transitionX + 3 });
  }

  applyRightTransition() {
    const { itemCount, transitionX } = this.state;
    if (transitionX - 6 < itemCount * -1) this.setState({ transitionX: itemCount * -1 + 2 });
    else this.setState({ transitionX: transitionX - 3 });
  }

  toggleHeart(id) {
    const { liked } = this.state;
    if (liked[id]) liked[id] = false;
    else liked[id] = true;
    this.setState({ liked });
  }

  render() {
    const { similarHomes } = this.props;
    const {
      itemCount,
      hovered,
      transitionX,
      liked,
    } = this.state;
    return (
      <div>
        <div className="featureTitle h3 marginLeft7">
          Similar Homes you may like
        </div>
        <div className="pbl" />
        <div onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
          <div className="similarContents">
            <div style={{ transform: `translateX(calc(${transitionX * 27}% + ${transitionX * 16}px))` }}>
              {similarHomes.map(home => (
                <div className="similarEach" key={home.id}>
                  <button className="similarLikeButton" type="button" onClick={() => this.toggleHeart(home.id)}><div className={liked[home.id] ? 'similarHeartLiked' : 'similarHeart'}>&#59457;</div></button>
                  <div style={{ marginLeft: '1px', marginRgiht: '1px' }}>
                    <a href={`localhost:3000/${home.id}`} alt={home.address1} target="_blank" rel="noopener noreferrer">
                      <img className="similarHomeImg" src={home.image} alt="" key={home.id} />
                      <div className="similarHomeDetail man pts pbs phm h6 typeWeightNormal">
                        <div className="h5 man typeEmphasize">{formatDollar(home.price)}</div>
                        <div className="listInline">
                          <div>
                            <span>&#59419;</span>
                            {home.rooms}
                            bd
                          </div>
                          <div>
                            <span>&#59418;</span>
                            {home.baths}
                            ba
                          </div>
                        </div>
                        <div className="nowrap typeTruncate typeLowlight">{home.address1}</div>
                        <div className="nowrap typeTruncate typeLowlight">{home.address2}</div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              <div className="similarEach similarMoreOut">
                <a href="http://www.trulia.com/CA/San_Francisco/">
                  <div style={{ padding: '16px' }}>
                    <div className="toggledContent similarMoreIcon">&#59460;</div>
                    <div className="similarMoreListings">See more listings near San Francisco</div>
                    <button className="similarMoreButton" type="button">Take a look</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div hidden className="similarCarouselButtons">
            <button className={(hovered) ? 'similarCarouselLeftButton similarCarouselOpacity1' : 'similarCarouselLeftButton similarCarouselOpacity0'} type="button" style={(transitionX) ? { display: 'block' } : { display: 'none' }} onClick={this.applyLeftTransition}>
              <div className="similarCarouselLeftIcon" />
            </button>
            <button className={(hovered) ? 'similarCarouselRightButton similarCarouselOpacity1' : 'similarCarouselRightButton similarCarouselOpacity0'} type="button" style={(transitionX > itemCount * -1 + 2) ? { display: 'block' } : { display: 'none' }} onClick={this.applyRightTransition}>
              <div className="similarCarouselRightIcon" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

SimilarHomes.propTypes = {
  similarHomes: PropTypes.instanceOf(Array).isRequired,
};

export default SimilarHomes;
