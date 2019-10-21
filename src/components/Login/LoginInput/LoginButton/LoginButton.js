import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class LoginButton extends Component {
    render() {
        const style = {
            opacity: this.props.opacity
        }
        
        return (
            <div>
                {/* <button id='loginButton' style = {style} value = {this.props.value}>Login</button> */}
                {/* <Link to='/main' id='loginButton' style = {style} value = {this.props.value}>Login</Link> */}
                <Link to='/main' id='loginButton' style = {style}>Login</Link>
            </div>
        )
    }
}

export default LoginButton
