import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Todo from './pages/Todo'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Nav from './components/Nav'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          {/* switch 渲染第一个匹配的组件 */}
          <Switch>
            {/* exact保证是精准匹配 */}
            {/* <Route path="/" exact component={ Home }></Route> */}
            <Route path="/todo" component={ Todo }></Route>
            <Route path="/about" component={ About }></Route>
            <Route path="/contact" component={ Contact }></Route>
            <Route path="/user/:id" component={ User }></Route>
            <Route path="/" component={ Home }></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;