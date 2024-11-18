// models/GroceryItem.js
const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, 'item name is required']
    },
    price_in_usd: {
        type: Number,
        required: [true, 'Please enter a number for price_in_usd']
    },
    food_group: {
        type: String,
        required: [true, 'food_group is required'],
        enum: ['fruits', 'dairy', 'proteins', 'grains', 'vegetables', 'nuts']
    },
    test: {
        type: String,
        required: [true, 'The property test is required']
    }
});
module.exports = mongoose.model("GroceryItem", grocerySchema);