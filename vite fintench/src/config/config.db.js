const mongoose = require('mongoose');
const password = process.env.DB_PASSWORD || 'Nike21uno';
const connect = ()=>{
   return mongoose.connect(`mongodb+srv://rajatkumar_gigin:${password}@cluster0.fwb6mxj.mongodb.net/test`);
}
module.exports = connect;