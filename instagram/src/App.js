import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }

  // componentDidMount() {
  //   this.setState({data: dummyData});
  // }


  render() {
    console.log(this.state.data);
    return (
      <div className="app">
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
