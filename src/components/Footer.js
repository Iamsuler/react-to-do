import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { filter, setFilter } = this.props
    return (
      <div>
        <span>Show:</span>
        <button disabled={ filter === 'all' } onClick={ () => setFilter('all') }>All</button>
        <button disabled={ filter === 'active' } onClick={ () => setFilter('active') }>Active</button>
        <button disabled={ filter === 'completed' } onClick={ () => setFilter('completed') }>Completed</button>
      </div>
    );
  }
}

export default Footer;