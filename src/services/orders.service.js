const db = require('../config/db.config')

async function getOrders() {
	const data = await new Promise((resolve, reject) => {
		db.query(
			`
			SELECT tn.id, concat(tn.fname," ",tn.lname) as studentName ,lt.date, group_concat(mo.option_name) as mealOptions
			FROM trainees tn
			INNER JOIN lunch_table lt ON tn.id = lt.trainee_id
			INNER JOIN meal_options mo ON lt.meal_option_id = mo.id
			group by tn.fname, lt.date order by date;`.replaceAll('\n', ''),
			(err, rows) => {
				if (err) {
					reject(err)
				}

				resolve(rows)
			}
		)
	})

	return data;
}
async function getOrderItems(id, date) {
	const data = await new Promise((resolve, reject) => {
		db.query(
			`SELECT DISTINCT
			mo.option_name
		FROM
			lunchbook.trainees tn
		JOIN lunchbook.lunch_table lt ON tn.id = lt.trainee_id
		JOIN lunchbook.meal_options mo ON lt.meal_option_id = mo.id
		WHERE tn.id = ${id}
		AND lt.date LIKE '%${date}%';`.replaceAll('\n', ''),
			(err, rows) => {
				if (err) {
					reject(err)
				}

				resolve(rows)
			}
		)
	})

	return {
		data,
	}
}

async function create(programmingLanguage) {
	// const result = await db.query(
	// 	`INSERT INTO programming_languages
	// (name, released_year, githut_rank, pypl_rank, tiobe_rank)
	// VALUES
	// (?, ?, ?, ?, ?)`,
	// 	[programmingLanguage.name, programmingLanguage.released_year, programmingLanguage.githut_rank, programmingLanguage.pypl_rank, programmingLanguage.tiobe_rank]
	// )
	// let message = 'Error in creating programming language'
	// if (result.affectedRows) {
	// 	message = 'Programming language created successfully'
	// }
	// return { message }
}

async function update(id, programmingLanguage) {
	// const result = await db.query(
	// 	`UPDATE programming_languages
	// SET name=?, released_year=?, githut_rank=?,
	// pypl_rank=?, tiobe_rank=?
	// WHERE id=?`,
	// 	[programmingLanguage.name, programmingLanguage.released_year, programmingLanguage.githut_rank, programmingLanguage.pypl_rank, programmingLanguage.tiobe_rank, id]
	// )
	// let message = 'Error in updating programming language'
	// if (result.affectedRows) {
	// 	message = 'Programming language updated successfully'
	// }
	// return { message }
}

async function remove(id) {
	// const result = await db.query(`DELETE FROM programming_languages WHERE id=?`, [id])
	// let message = 'Error in deleting programming language'
	// if (result.affectedRows) {
	// 	message = 'Programming language deleted successfully'
	// }
	// return { message }
}

module.exports = {
	getOrders,
	getOrderItems,
	create,
	update,
	remove,
}
