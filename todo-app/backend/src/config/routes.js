const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    // TODO router
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')

    // CUSTOMER router
    const customerService = require('../api/customer/customerService')
    customerService.register(router, '/customers')
}