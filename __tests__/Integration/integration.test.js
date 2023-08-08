const request = require("supertest");
const app = require("../../app");
const connection = require("../../db/connection");
const seed = require("../../db/seed");
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
  describe("GET: /api/parks", () => {
    test("200: responds with a status code 200", () => {
      return request(app).get("/api/parks").expect(200);
    });
    test("returns array of correct length containing park objects from parks table", () => {
      return request(app)
        .get("/api/parks")
        .then(({ body }) => {
          expect(body.parks.length).toBe(4);
        });
    });
    test("returns array containing correct park objects from parks table", () => {
      return request(app)
        .get("/api/parks")
        .then(({ body }) => {
          expect(body.parks).toEqual([
            {
              park_id: 1,
              park_name: "Thorpe Park",
              year_opened: 1979,
              annual_attendance: 1700000,
            },
            {
              park_id: 2,
              park_name: "Alton Towers",
              year_opened: 1980,
              annual_attendance: 2520000,
            },
            {
              park_id: 3,
              park_name: "Chessington World of Adventures",
              year_opened: 1987,
              annual_attendance: 1400000,
            },
            {
              park_id: 4,
              park_name: "Tivoli Gardens",
              year_opened: 1843,
              annual_attendance: 3972000,
            },
          ]);
        });
    });
  });
  describe("GET: /api/ride/:ride_id", () => {
    test("200: responds with a status code 200", () => {
      return request(app).get("/api/ride/1").expect(200);
    });
    test("200: responds with a status code 200", () => {
      return request(app)
        .get("/api/ride/1")
        .then(({ body }) => {
          console.log(body, "<<<body");
          expect(body).toEqual({
            ride: {
              ride_id: 1,
              ride_name: "Colossus",
              year_opened: 2002,
              park_name: "Thorpe Park",
              votes: 5,
            },
          });
        });
    });
  });
});

//create app
//create controllers
//create models
