import React from 'react';

import HomeDetails from './homeDetails';
import SimilarHomes from './similarHomes';
import Affordability from './affordability';
import '../../public/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDetails: undefined,
      similarHomes: undefined,
    };
  }

  componentDidMount() {
    let homeId = new URLSearchParams(window.location.search).get('homeId');
    if (!homeId || !parseInt(homeId, 10)) homeId = 1;
    Promise.all([
      fetch(`/homeDetails/${homeId}`).then(value => value.json()),
      fetch(`/similarHomes/${homeId}`).then(value => value.json()),
    ]).then(([response1, response2]) => (
      [response1, response2]
    ))
      .then(([myJson1, myJson2]) => {
        this.setState({
          homeDetails: myJson1,
          similarHomes: myJson2,
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { homeDetails, similarHomes } = this.state;
    if (!homeDetails || !similarHomes) {
      return (
        <div>
          { /* Failed to load data, please try again */ }
        </div>
      );
    }

    return (
      <div className="featureBody">
        <div className="feature">
          <HomeDetails homeDetails={homeDetails} />
        </div>
        <div className="featureSimilar">
          <SimilarHomes similarHomes={similarHomes} />
        </div>
        <div className="mvl" />
        <div style={{ height: '20px' }} />
        <div className="featureAffordability">
          <Affordability totalPrice={homeDetails.totalPrice} />
        </div>
      </div>
    );
  }
}

export default App;
