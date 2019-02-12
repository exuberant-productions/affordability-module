import React from 'react';

class SimilarHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <div className="featureTitle">
          <span className="FTh5">
            Similar Homes you may like
          </span>
        </div>
        <div style={{ display: 'flex', height: '200px' }}>
          <img style={{ height: '100%', objectFit: 'contain' }} src="https://s3-us-west-1.amazonaws.com/affordability-module/photo0.jpeg" alt="" />
          <img style={{ height: '100%', objectFit: 'contain' }} src="https://s3-us-west-1.amazonaws.com/affordability-module/photo3.jpeg" alt="" />
          <img style={{ height: '100%', objectFit: 'contain' }} src="https://s3-us-west-1.amazonaws.com/affordability-module/photo5.jpeg" alt="" />
          <img style={{ height: '100%', objectFit: 'contain' }} src="https://s3-us-west-1.amazonaws.com/affordability-module/photo7.jpeg" alt="" />
        </div>
      </div>
    );
  }
}

export default SimilarHomes;
