const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    articaleName: String,
    amount: String,
    created: {type:Date,default:Date.now()},
    checked:{type:Boolean,default:false}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;