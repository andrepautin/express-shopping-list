const db = require("./fakeDb");

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
}

module.exports = Item;