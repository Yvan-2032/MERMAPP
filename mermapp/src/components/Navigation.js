import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            NotesApp
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Notes
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/create'>
                  Create Note
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/user'>
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
