const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig.js");

describe("GET /api/mission", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  it("Return 200 on success", () => {
    request(server)
      .post("/api/auth/register")
      .send({ username: "myself", password: "pass" });

    request(server)
      .post("/api/auth/login")
      .send({ username: "myself", password: "pass" })
      .then((res) => {
        return request(server)
          .get("/api/mission")
          .set("Authorization", res.token)
          .then((res) => {
            expect(res.status).toBe(200);
          });
      });
  });

  //   it("Return 401 on failure", () => {
  //     const token = "abc";
  //     return request(server)
  //       .get("/api/essentials")
  //       .set("Authorization", token)
  //       .then((res) => {
  //         expect(res.status).toBe(401);
  //       });
  //   });
});
