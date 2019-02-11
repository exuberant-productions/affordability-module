import React from 'react';

import HomeDetails from './homeDetails';
import SimilarHomes from './similarHomes';
import Affordability from './affordability';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          <HomeDetails />
        </div>
        <div>
          <SimilarHomes />
        </div>
        <div>
          <Affordability />
        </div>
      </div>
    );
  }
}

export default App;
