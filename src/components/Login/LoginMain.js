import React from 'react';
import LoginLogo from './LoginLogo/LoginLogo';
import LoginInput from './LoginInput/LoginInput';

class Login_main extends React.Component {
    render() {
        return(
            <div className="App">
                <div id='loginMain'>
                    <LoginLogo />
                    <LoginInput />
                </div>
            </div>
        );
    }
}

export default Login_main;