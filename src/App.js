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
          {/* <Switch> */}
            <Route path="/" exact component={ Home }></Route>
            <Route path="/todo" component={ Todo }></Route>
            <Route path="/about" render={ (props) => <About { ...props }/> }></Route>
            <Route
              path="/contact"
              children={ (props) => <div>{ props.match ? 'active' : 'inactive' }</div> }
            />
            {/* 一切皆组件，离散路由 */}
            <Route path="/user" component={ User }></Route>
            {/* <Route path="/user/:id" component={ User }></Route> */}
            {/* <Route path="/" component={ Home }></Route> */}
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;