const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    pc: {
        type: Number,
        required: true
    },
    uc: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fdate: {
        type: Date,
        required: true
    },
    ldate: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;


