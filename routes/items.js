const express = require("express");
const router = new express.Router();
const db = require("../fakeDb");
const Item = require("../item-model");

// returns a list of shopping items 
router.get("/", function (req, res, next) {
    return res.json({ items: db.items })
});

// adds a new item to the list of items
router.post("/", function (req, res, next) {
    let item = new Item(req.body.name, req.body.price);
    return res.json({ item });
});

// finds a single item by name in the list of items
// and return that item
router.get("/:name", function (req, res, next) {
    let item = Item.find(req.params.name);
    return res.json({ item });
})

// finds an item by name in the list of items, 
// updates and returns it
router.patch("/:name", function (req, res, next) {
    console.log("name", req.params.name);
    let item = Item.find(req.params.name);
    item = item.updateItem(req.params.name, req.body.price);
    return res.json({ item });
})

// finds an item by name in the list of items and deletes it
router.delete("/:name", function (req, res, next) {
    Item.delete(req.params.name)
    return res.json({
        message: "deleted"
    });
});

module.exports = router;