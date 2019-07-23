const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:6,
        max:255
    },
    description:{
        type: String,
        required: true,
        max: 255,
        min:6
    },
    userid: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);