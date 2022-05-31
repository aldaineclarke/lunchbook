const orders = require('../services/orders.service')
const {parseDateToInputField} = require("../utilities/helper.utils")
async function getAll(req, res, next) {
	try {
		let allOrders = await orders.getOrders()
		res.render("dashboard",{orders:allOrders,title:"Dashboard" ,messages: {success:[]}, parseDateToInputField})
	} catch (err) {
		console.error(`Error while getting lunch orders`, err.message)
		next(err)
	}
}

async function getTraineeItems(req, res, next) {
	try {
		res.json(await orders.getOrderItems(req.params.id, req.body.date))
	} catch (err) {
		console.error(`Error while getting lunch orders`, err.message)
		next(err)
	}
}

async function create(req, res, next) {
	// try {
	// 	res.json(await orders.create(req.body))
	// } catch (err) {
	// 	console.error(`Error while creating programming language`, err.message)
	// 	next(err)
	// }
}

async function update(req, res, next) {
	// try {
	// 	res.json(await orders.update(req.params.id, req.body))
	// } catch (err) {
	// 	console.error(`Error while updating programming language`, err.message)
	// 	next(err)
	// }
}

async function remove(req, res, next) {
	// try {
	// 	res.json(await orders.remove(req.params.id))
	// } catch (err) {
	// 	console.error(`Error while deleting programming language`, err.message)
	// 	next(err)
	// }
}





module.exports = {
	getAll,
	getTraineeItems,
	create,
	update,
	remove,
}
