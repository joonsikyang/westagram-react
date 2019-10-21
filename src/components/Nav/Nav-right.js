import React from 'react';

class NavSearch extends React.Component {
    render() {
        return (
            <div className="nav-right-items">
                <div className="nav-right-item">
                    <img id="nav-search" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="search" />
                </div>
                <div className="nav-right-item">
                    <img id="nav-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                </div>
                <div className="nav-right-item">
                    <img id="nav-profile" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                </div>
            </div>
        );
    }    
}

export default NavSearch;