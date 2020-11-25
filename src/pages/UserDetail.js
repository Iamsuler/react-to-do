import React, { Component } from 'react';

class UserDetail extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        user: { match.params.id }
      </div>
    );
  }
}

export default UserDetail;