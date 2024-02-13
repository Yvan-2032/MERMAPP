const UserController = {}
const User = require('../models/User')
const UserModel = require('../models/User')

UserController.getUsers = async (req, res) => {
  const users = await UserModel.find()
  res.send(users)
}
UserController.createUser = async (req, res) => {
  const { username } = req.body
  const newUser = new User({ username })
  await newUser.save()
  res.json({ message: 'User saved' })
}
UserController.updateUser = async (req, res) => {
  const { username } = req.body
  await Note.findOneAndUpdate({ _id: req.params.id }, { username })
  res.json({ message: 'User Updated' })
}
UserController.deleteUser = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: 'User Deleted' })
}
module.exports = UserController
