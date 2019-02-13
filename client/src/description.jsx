import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.seeMore = this.seeMore.bind(this);
  }

  seeMore() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  render() {
    const { description } = this.props;
    const { show } = this.state;
    return (
      <div>
        <div className="detailTitle">
          <span className="FT h5">
            Description
          </span>
        </div>
        <div className="detailContent mbl pbm">
          <div className={(show) ? 'detailContentOne padLR' : 'detailContentOne padLR maxLimit'}>
            { description }
            { description }
          </div>
          <div className="toggleMore" onClick={this.seeMore} onKeyDown={this.seeMore} role="button" tabIndex={-1}>
            <span className="toggleMoreArrow">&#59445; </span>
            <span className="toggleMoreText">See More</span>
          </div>
        </div>
      </div>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
