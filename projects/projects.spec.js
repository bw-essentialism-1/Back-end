const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig.js");
describe("GET /api/projects", function () {
  it("return 400 on error", function () {
    return request(server)
      .get("/api/projects")
      .then((res) => {
        expect(res.status).toBe(400);
      });
  });
  it('should return a message saying "Please provide credentials"', function () {
    return request(server)
      .get("/api/projects")
      .then((res) => {
        expect(res.body).toMatchObject({
          message: "Please provide credentials",
        });
      });
  });
});
