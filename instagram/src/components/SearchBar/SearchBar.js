import React from 'react';

 const SearchBar = props => {
  return (
    <nav>
      <div className="logo">
        <a href="#">Logo here</a>
        <h1>Instagram</h1>
      </div>
      <input className="search" type="text"/>
      <div className="icons">
        <a href="#">Explore</a>
        <a href="#">Heart</a>
        <a href="#">Profile</a>
      </div>
    </nav>
  );
};

 export default SearchBar;