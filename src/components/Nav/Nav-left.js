import React from 'react';
import Logo from '../../img/logo_text.png'
// import './Nav.css';

class NavLeft extends React.Component {
    render() {
        return (
            <div className="nav-left-items">
                <img
                    id="nav-logo"
                    alt="logo"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"></img>
                <div id="nav-logo-line"></div>
                <img id="nav-text-logo" alt="text-logo" src={Logo}></img>
            </div>
        );
    }
}

export default NavLeft