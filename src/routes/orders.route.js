const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orders.controller')

router.get('/', orderController.getAll)
router.post('/:id', orderController.getTraineeItems)

module.exports = router
