const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig.js");

describe("GET /api/essentials", function () {
  it("return 400 on error", function () {
      return request(server)
          .get("/api/essentials")
          .then(res => {
          expect(res.status).toBe(400);
          });
  });

  it('should return a message saying "Please provide credentials"', function () {
      return request(server)
          .get("/api/essentials")
          .then(res => {
          expect(res.body).toMatchObject({"message": "Please provide credentials"})
      });
  });

  it("return 201 on success", function () {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "Test-UN", password: "Test-PW" })
      .then(res => {
        return request(server)
        .get("/api/essentials").set("authorization", token)
          .then(res => {
            expect(res.status).toBe(201);
          })
      });
  });

  it('should return a message saying "Hobbit created successfully"', function () {
    return request(server)
    .post("/api/auth/login")
    .send({ username: "Test-UN", password: "Test-PW" })
    .then(res => {
      return request(server)
      .get("/api/essentials").set("authorization", token)
        .then(res => {
          expect(res.body).toBe("created successfully");
        })
    });
  });
});






// describe("GET /api/essentials", () => {
//   beforeEach(async () => {
//     await db("users").truncate();
//   });
//   it("Return 200 on success", () => {
//     request(server)
//       .post("/api/auth/register")
//       .send({ username: "myself", password: "pass" });
//     request(server)
//       .post("/api/auth/login")
//       .send({ username: "myself" })
//       .then((res) => {
//         return request(server)
//           .get("/api/essentials")
//           .set("Authorization", res.token)
//           .then((res) => {
//             expect(res.status).toBe(200);
//           });
//       });
//   })