import React from 'react';
import PropTypes from 'prop-types';

class SimilarHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { similarHomes } = this.props;
    return (
      <div>
        <div className="featureTitle h3">
          Similar Homes you may like
        </div>
        <div className="featureSimilar">
          {similarHomes.map(home => (
            <img className="featureSimilarImg" src={home.image} alt="" key={home.id} />
          ))}
        </div>
      </div>
    );
  }
}

SimilarHomes.propTypes = {
  similarHomes: PropTypes.instanceOf(Array).isRequired,
};

export default SimilarHomes;
