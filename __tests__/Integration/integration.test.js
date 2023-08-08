const request = require("supertest");
const app = require("../../app");
const connection = require("../../db/connection");

afterAll(() => {
  return connection.end();
});

beforeAll(() => {
  return seed();
});

describe("app", () => {
  describe("GET: /api/healthcheck", () => {
    test("200: responds with a status code 200", () => {
      return request(app).get("/api/healthcheck").expect(200);
    });
  });
});

//create app
//create controllers
//create models
