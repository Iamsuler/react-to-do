import React, { Component } from 'react';

class User extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        user: { match.params.id }
      </div>
    );
  }
}

export default User;