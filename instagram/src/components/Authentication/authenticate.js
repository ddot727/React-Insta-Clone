import React from 'react';

const authenticate = PostsPage => Login => props => {
    const user = localStorage.getItem("username");

    if (user) {
        return <PostsPage />
    } else {
        return <Login />
    }
}

export default authenticate