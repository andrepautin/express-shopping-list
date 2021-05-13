const express = require("express");
const router = new express.Router();
const db = require("../fakeDb");
const Item = require("../item-model");

// returns a list of shopping items 
router.get("/", function (req, res, next) {
    return res.json({ items: db.items })
});

router.post("/", function (req, res, next) {
    let item = new Item(req.body.name, req.body.price);
    return res.json({ item });
});

router.get("/:name", function (req, res, next) {
    let item = Item.find(req.params.name);
    return res.json({ item });
})

router.patch("/:name", function (req, res, next) {
    console.log("name", req.params.name);
    let item = Item.find(req.params.name);
    item = item.updateItem(req.params.name, req.body.price);
    return res.json({ item });
})

router.delete("/:name", function (req, res, next) {
    Item.delete(req.params.name)
    return res.json({
        message: "deleted"
    });
});

module.exports = router;