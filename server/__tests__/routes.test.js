global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const { app } = require("../app");
const request = require("supertest");

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const mongoUri = mongod.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
});

describe("Item get routes", () => {
  test("getItems should get all items and return status 200", done => {
    request(app)
    .get('/items')
    .expect('Content-Type', /application\/json/)
    .expect(200, done);
  });

  test("getItem should get specific items and return status 200", done => {
    request(app)
    .get('/items/61b72114b3c622f0ae3bdf3b')
    .expect('Content-Type', /application\/json/)
    .expect(200, done);
  });
});
  
afterAll(async () => {
  await mongoose.connection.close();
});
