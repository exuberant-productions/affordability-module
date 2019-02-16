import 'babel-polyfill';

const request = require('supertest');
const app = require('../app');

describe('GET /homeDetails/1', () => {
  test('It should respond with correct home details data', async () => {
    const response = await request(app).get('/homeDetails/1');
    expect(response.body).toBeDefined();
    expect(response.body.id).toEqual(1);
    expect(response.body.totalPrice).toEqual(1216472);
    expect(response.body.priceHistoryData).toBeInstanceOf(Array);
    expect(response.statusCode).toBe(200);
  });
});
