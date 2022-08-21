const Item = require('../models/item.model');

const getItems = (req, res) => {
    Item.find().sort({ date: -1 }).then(items => res.json(items));
}
const postItem = (req, res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
}
const updateItem = (req, res) => {
    Item.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((item) => {
            // find new updated and add as response
            Item.findOne({ _id: req.params.id })
                .then((item) => {
                    res.json(item);
                });
        });
}
const deleteItem = (req, res) => {
    Item.findByIdAndDelete({ _id: req.params.id })
        .then((item) => {
            res.json({ success: true });
        });
}
module.exports = {
    getItems,
    postItem,
    updateItem,
    deleteItem,
};