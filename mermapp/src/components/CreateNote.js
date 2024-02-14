import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {
  state = {
    notes: [],
    users: [],
    date: new Date(),
    userSelect: '',
    title: '',
    content: '',
    editing: false,
    _id: ''
  }
  componentDidMount = async () => {
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({
      users: res.data.map((user) => user.username),
      userSelect: res.data[0].username
    })
    if (this.props && this.props.params) {
      const res = await axios.get(
        'http://localhost:4000/api/notes/' + this.props.params.id
      )
      console.log(res)
      this.setState({
        date: new Date(res.data.date),
        userSelect: res.data.author,
        title: res.data.title,
        content: res.data.content,
        editing: true,
        _id: this.props.params.id
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelect
    }
    if (this.state.editing) {
      await axios.put(
        'http://localhost:4000/api/notes/' + this.state._id,
        newNote
      )
    } else {
      await axios.post('http://localhost:4000/api/notes', newNote)
    }
    window.location.href = '/'
  }
  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onChangeDate = (date) => {
    this.setState({
      date
    })
  }
  render() {
    return (
      <div className='col-ms-6 offset-ms-3'>
        <div className='card card-body'>
          <h4>Create a Note</h4>
          {/**Select User */}
          <div className='form-group mb-3'>
            <select
              className='form-select'
              name='userSelect'
              onChange={this.onInputChange}
              value={this.state.userSelect}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              name='title'
              onChange={this.onInputChange}
              value={this.state.title}
              required
            />
          </div>
          <div className='form-group mb-3'>
            <textarea
              name='content'
              className='form-control'
              placeholder='Content'
              onChange={this.onInputChange}
              value={this.state.content}
              required
            ></textarea>
          </div>
          <div className='form-group mb-3'>
            <DatePicker
              selected={this.state.date}
              className='form-control'
              onChange={this.onChangeDate}
              value={this.state.date}
            ></DatePicker>
          </div>
          <form onSubmit={this.onSubmit}>
            <button type='summit' className='btn btn-primary'>
              Save
            </button>
          </form>
        </div>
      </div>
    )
  }
}
