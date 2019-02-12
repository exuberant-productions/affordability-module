import React from 'react';

import HomeDetails from './homeDetails';
import SimilarHomes from './similarHomes';
import Affordability from './affordability';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeDetails: undefined,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/homeDetails/1')
      .then(response => (
        response.json()
      ))
      .then((myJson) => {
        this.setState({ homeDetails: myJson });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { homeDetails } = this.state;
    if (!homeDetails) {
      return (
        <div>
          Failed to load data, please try again
        </div>
      );
    }

    return (
      <div>
        <div className="feature">
          <HomeDetails homeDetails={homeDetails} />
        </div>
        <div className="feature">
          <SimilarHomes />
        </div>
        <div className="feature">
          <Affordability totalPrice={homeDetails.totalPrice} />
        </div>
      </div>
    );
  }
}

export default App;
