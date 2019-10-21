import React, { Component } from 'react'
import InstagramLogo from '../../../img/logo_text.png';

class LoginLogo extends Component {
    render() {
        return (
            <div id='logo'>
                <img src={InstagramLogo} alt="Instagram_Logo" style={{width:175, height:51}} />
            </div>
        )
    }
}

export default LoginLogo
