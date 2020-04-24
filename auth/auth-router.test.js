const request = require("supertest");
const server = require("../api/server.js");

const Users = require("../users/users-model");

describe(" Auth-router", function() {
  describe(" POST /register", function() {
    it("should return new user with text/html", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).toMatch("text/html");
        });
    });
  });

  describe(" POST /register err", function() {
    it("should not return JSON", function() {
      return request(server)
        .post("/api/auth/register")
        .then(res => {
          expect(res.type).not.toMatch(/json/i);
         
        });
    });
 
  });


  describe("  POST /login", function() {
    it("should return JSON", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe(" POST /login err", function() {
    it("should not match text/html", function() {
      return request(server)
        .post("/api/auth/login")
        .then(res => {
          expect(res.type).not.toMatch("text/html");
         
        });
    });
  
   
  });
});