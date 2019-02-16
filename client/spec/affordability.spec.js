import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app';
import '../../setupTests';

global.fetch = require('node-fetch');

it('renders without crashing', () => {
  shallow(<App />);
});

/*
describe('affordability', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App searchYouTube={() => {}}/>
    );
  });

  describe('home details', function() {
    it('should be a stateful component', function() {
      expect(React.Component.isPrototypeOf(App)).to.be.true;
    });
  });
});
*/
