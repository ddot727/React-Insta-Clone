import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.item}
                    name="item"
                    onChange={this.handleChanges}
                />
                <button>Search</button>
            </div>
        )
    }



}

export default SearchBar;