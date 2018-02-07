const express = require('express')

module.exports = function(server){
    // Define url base
    const router = express.Router()
    server.use('/api', router)

    // router billing cycle
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}