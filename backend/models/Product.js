const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        default: "none"
    },
    category:{
        type: String,
        default: "general"
    },
    cost:{
        type: Number,
        default: 0,
        required: true
    }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;