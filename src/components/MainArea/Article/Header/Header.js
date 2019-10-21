import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="feed-top">
                <div>
                    <img
                        className="feed-top-profile-img"
                        src="https://scontent-gmp1-1.cdninstagram.com/vp/e7643153cf33ecccd35735f3f5737541/5E1727F7/t51.2885-19/s150x150/38502238_2023435627722875_8237163518952996864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                        alt="profile-img"/>
                </div>
                <div className="feed-top-id-dots">
                    <div className="feed-top-id">joonsikyang</div>
                    <div className="feed-top-dots">
                        <img
                            className="feed-top-dots-icon"
                            src="https://icon-library.net/images/3-dots-icon/3-dots-icon-24.jpg"
                            alt="option"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;