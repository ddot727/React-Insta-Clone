import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      postsFound:'',
    }
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  searchPosts = e => {
    this.setState({
      postsFound: e.target.value,
    })
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="app">
        <SearchBar postsFound={this.state.postsFound} searchPosts={this.searchPosts} />
        <PostContainer data={this.state.data} postsFound={this.state.postsFound} />
      </div>
    );
  }
}

export default App;
