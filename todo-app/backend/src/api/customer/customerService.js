const Customer = require('./customer')

Customer.methods(['get', 'post', 'put', 'delete'])
Customer.updateOptions({ new: true, runValidators: true })

module.exports = Customer