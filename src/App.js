import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Todo from './pages/Todo'
import Home from './pages/Home'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={ Home }></Route>
          <Route path="/todo" component={ Todo }></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;