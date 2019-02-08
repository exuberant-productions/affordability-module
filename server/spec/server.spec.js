import "babel-polyfill";
const request = require("supertest");
const app = require('../app');

describe("GET /homeDetails/1", () => {
  test("It should respond with correct home details data", async () => {
    const response = await request(app).get("/homeDetails/1");
    expect(response.body).toEqual([{"id": 1, "totalPrice": 779213, "detailsId": 1}]);
    expect(response.statusCode).toBe(200);
  });
});