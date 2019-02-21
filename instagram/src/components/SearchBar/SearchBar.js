import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
                <a href="#" className="logo-image">#</a>
            </div>
            <div>
                <p className="insta-title">Instagram</p>
            </div>
            <div>
                <input 
                    className ="search-input" 
                    type="text" 
                    placeholder="Search" 
                    onChange={props.searchPosts}
                    value={props.postsFound} />
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