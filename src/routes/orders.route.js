const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orders.controller')
const { authGuard } = require('../utilities/helper.utils')

router.get('/', orderController.getAll)
router.post('/:id', orderController.getTraineeItems)

module.exports = router
