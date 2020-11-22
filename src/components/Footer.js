import React, { Component } from 'react';
import { VISIBILITY_FILTERS } from '../store/action'

class Footer extends Component {
  render() {
    const { filter, setVisibilityFilter } = this.props
    const { ALL, ACTIVE, COMPLETED } = VISIBILITY_FILTERS
    return (
      <div>
        <span>Show:</span>
        <button disabled={ filter === ALL } onClick={ () => setVisibilityFilter(ALL) }>All</button>
        <button disabled={ filter === ACTIVE } onClick={ () => setVisibilityFilter(ACTIVE) }>Active</button>
        <button disabled={ filter === COMPLETED } onClick={ () => setVisibilityFilter(COMPLETED) }>Completed</button>
      </div>
    );
  }
}

export default Footer;