const db = require("./fakeDb");

// creates instance of an item
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    db.items.push(this);
  }

  static find(name) {
    let item = db.items.find(item => item.name === name);
    return item;
  }

  static delete(name) {
    let index = db.items.findIndex(item => item.name === name);
    db.items.splice(index, 1);
  }

  updateItem(name, price) {
    this.item = { name, price };
    return this.item;
  }
}

module.exports = Item;