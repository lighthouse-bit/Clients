const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoals} = require('../controller/goalController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect ,setGoal)
router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoal)
 
module.exports = router