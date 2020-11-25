import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/todo">todo</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/user/1">user1</Link></li>
        <li><Link to="/user/2">user2</Link></li>
      </ul>
    );
  }
}

export default Nav;