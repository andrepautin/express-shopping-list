const express = require("express");
const router = new express.Router();
const db = require("../fakeDb");
const Item = require("../item-model");

// returns a list of shopping items 
router.get("/", function(req, res, next) {
    return res.json({ items: db.items })
});

router.post("/", function(req, res, next) {
    let item = new Item(req.body.name, req.body.price);
    return res.json({ item });
});

router.get("/:name", function(req, res, next) {
    let item = Item.find(req.params.name);
    return res.json({ item });
})

module.exports = router;