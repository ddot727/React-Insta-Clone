import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
                <a href="#" className="logo-image">#</a>
            </div>
            <div>
                <input className ="search-input" type="text" placeholder="Search" />
            </div>
            <div className="social-wrapper">
                <div className="social">
                    <a className="fa fa-compass">#</a>
                </div>
                <div className="social">
                    <a className="fa fa-heart">#</a>
                </div>
                <div className="social">
                    <a className="fa fa-user-circle">#</a>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;