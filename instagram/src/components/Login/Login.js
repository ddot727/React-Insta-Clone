import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginText : "",
        }
    }

    changeHandler = e => {
        this.setState({
            loginText: e.target.value
        });
    }

    submitHandler = e => {
        e.preventDefault ();
        localStorage.setItem("username", this.state.loginText)
    }

    render() { 
        return ( 
            <form onSubmit={this.submitHandler}>
                <input
                name="username"
                    placeholder="Username please..."
                    value={this.state.loginText}
                    onChange={this.changeHandler}
                />
                <input
                    name="password"
                    placeholder="What be ye password?"
                    onChange={this.changeHandler}
                />
                <button>Log Me In</button>
            </form>
         );
    }
}
 
export default Login;