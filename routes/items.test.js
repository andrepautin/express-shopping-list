const request = require("supertest");
const app = require("../app");
let db = require("../fakeDb");
let item = { name: "pickles", price: "8" };

beforeEach(function () {
  db.items.push(item);
});
afterEach(function () {
  db.items.length = 0;
});

describe("GET /items", function() {
  it("Gets a list of items", async function() {
    let response = await request(app).get("/items");
    expect(response.body).toEqual({ items: [item] });
  });
});

describe("GET /items/:name", function() {
  it("Gets a single item", async function() {
    let response = await request(app).get(`/items/${item.name}`);
    expect(response.body).toEqual({item: item});
  });
});



