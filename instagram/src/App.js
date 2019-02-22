import React, { Component } from 'react';
import authenticate from './components/Authentication/authenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';

const Visible = authenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() { 
    return ( 
      <div>
        <Visible />
      </div>
     );
  }
}

export default App;