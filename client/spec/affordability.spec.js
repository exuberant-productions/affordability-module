import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app';
import HomeDetails from '../src/homeDetails';
import SimilarHomes from '../src/similarHomes';
import Affordability from '../src/affordability';
import '../../setupTests';

global.fetch = require('node-fetch');

describe('App', () => {
  it('it renders without crashing', () => {
    shallow(<App />);
  });

  it('it mounts without crashing, and have an updated state value', (done) => {
    const { fetch } = window;
    let fetchMockCnt = 0;
    window.fetch = jest.fn().mockImplementation(() => {
      fetchMockCnt += 1;
      if (fetchMockCnt % 2 === 1) {
        return new Promise((resolve) => {
          resolve({
            status: 200,
            ok: true,
            json: () => new Promise((resolve2) => {
              resolve2({ totalPrice: 100000 });
            }),
          });
        });
      }
      return new Promise((resolve) => {
        resolve({
          status: 200,
          ok: true,
          json: () => new Promise((resolve2) => {
            resolve2([]);
          }),
        });
      });
    });
    const mounted = shallow(<App />);

    // this setImmediate is needed beacuse of Promise.all use in componentDidMount in App component
    setImmediate(() => {
      expect(mounted.state('homeDetails')).not.toEqual(undefined);
      expect(mounted.find(HomeDetails).length).toEqual(1);
      mounted.unmount();
      window.fetch = fetch;
      done();
    });
  });
});

describe('App > homeDetails', () => {
  let mounted;
  beforeEach(() => {
    mounted = shallow(<HomeDetails homeDetails={{ totalPrice: 1000000, description: 'desc', priceHistoryData: [] }} />);
  });

  it('it has homeDetails component rendered', () => {
  });

  it('it has children components', () => {
    expect(mounted.find('Overview').length).toEqual(1);
    expect(mounted.find('Description').length).toEqual(1);
    expect(mounted.find('Features').length).toEqual(1);
    expect(mounted.find('PriceHistory').length).toEqual(1);
  });

  afterEach(() => {
    mounted.unmount();
  });
});

describe('App > SimilarHomes', () => {
  let mounted;
  beforeEach(() => {
    mounted = shallow(<SimilarHomes similarHomes={[{ id: 2 }]} />);
  });

  it('it has 1 home div (home like button, heart) rendered', () => {
    expect(mounted.find('.similarLikeButton').length).toEqual(1);
  });

  afterEach(() => {
    mounted.unmount();
  });
});

describe('App > Affordability', () => {
  let mounted;
  beforeEach(() => {
    mounted = shallow(<Affordability totalPrice={1000000} />);
  });

  it('it has a Home Price input field', () => {
    expect(mounted.find('#test_homePrice').length).toEqual(1);
  });

  it('it has 1,000,000 entered in Home Price input field', () => {
    expect(mounted.find('#test_homePrice').prop('value')).toEqual('1,000,000');
  });

  afterEach(() => {
    mounted.unmount();
  });
});
