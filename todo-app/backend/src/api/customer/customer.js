const restful = require('node-restful')
const mongoose = restful.mongoose

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    phone: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Customer', customerSchema)