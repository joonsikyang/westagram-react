import React from 'react';
import Logo from '../../../../img/basics/logo_text.png'
import './Nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="nav-items-container">
                    <div className="nav-left-items">
                        <img
                            className="nav-logo"
                            alt="logo"
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"></img>
                        <div className="nav-logo-line"></div>
                        <img className="nav-text-logo" alt="text-logo" src={Logo}></img>
                    </div>
                    <div className="search-container">
                        <input className="search-input" type="text" placeholder="Search" />
                    </div>
                    <div className="nav-right-items">
                        <div className="nav-right-item">
                            <img className="nav-search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="search" />
                        </div>
                        <div className="nav-right-item">
                            <img className="nav-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                        </div>
                        <div className="nav-right-item">
                            <img className="nav-profile" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Nav;