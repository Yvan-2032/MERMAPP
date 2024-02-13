const { Router } = require('express')
const router = Router()
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser
} = require('../controllers/user.controller')

router.route('/').get(getUsers).post(createUser)

router.route('/:id').delete(deleteUser)

router.route('/:id').put(updateUser)
module.exports = router
