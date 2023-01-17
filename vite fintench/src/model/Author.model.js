const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
name:{type: String, required: true},
email: {type: String, required: true, unique:true},
phone: {type: Number, required: true},
password: {type: String, required:true},
age: {type: Number, required: true},
status: {type: Number, default:0},
user_img_link: {type: String},
})

const Author = mongoose.model('Auth', authSchema);
module.exports = Author;
