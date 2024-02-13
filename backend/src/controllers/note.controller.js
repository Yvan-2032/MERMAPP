const noteController = {}
const Note = require('../models/Note')
const NoteModel = require('../models/Note')

noteController.getNotes = async (req, res) => {
  const notes = await NoteModel.find()
  res.send(notes)
}
noteController.createNote = async (req, res) => {
  const { title, content, date, author } = req.body
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author
  })
  await newNote.save()
  res.json({ message: 'Note saved' })
}
noteController.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.json(note)
}
noteController.updateNote = async (req, res) => {
  const { title, content, author } = req.body
  await Note.findOneAndUpdate(
    { _id: req.params.id },
    { title, content, author }
  )
  res.json({ message: 'Note Updated' })
}

noteController.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.json({ message: 'Note Deleted' })
}
module.exports = noteController
