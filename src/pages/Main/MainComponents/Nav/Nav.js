import React from 'react';
import Logo from '../../../../img/basics/logo_text.png'
import './Nav.scss'

class Nav extends React.Component {
    render() {
        return (
            <section className="Nav">
                <div className="container">
                    <div className="left-logos">
                        <img
                            className="logo-icon"
                            alt="logo"
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"></img>
                        <div className="divider"></div>
                        <img className="logo-text" alt="text-logo" src={Logo}></img>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="right-icons">
                        <div className="icon">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="search" />
                        </div>
                        <div className="icon">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                        </div>
                        <div className="icon">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Nav;