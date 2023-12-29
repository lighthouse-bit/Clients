const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoals} = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoals).put(updateGoal)
 
module.exports = router