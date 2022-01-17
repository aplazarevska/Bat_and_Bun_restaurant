global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Item = require('../models/itemModel');

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const mongoUri = mongod.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
});

test("Item model schema should be present", () => {
  expect(typeof Item).toBe('function');
});
  
afterAll(async () => {
  await mongoose.connection.close();
});
