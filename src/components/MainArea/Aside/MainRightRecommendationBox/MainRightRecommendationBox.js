import React, {Component} from 'react'

class Recommend extends Component {
    render() {
        return (
            <div id="main-right-recommendation-box">
                <div className="main-right-box-top">
                    <div className="main-right-box-title">회원님을 위한 추천</div>
                    <div className="main-right-box-seeAll">모두보기</div>
                </div>
                <div className="main-right-recommendation-item">
                    <div className="main-right-recommendation-profile-img-container">
                        <img
                            className="main-right-recommendation-profile-img"
                            src="https://scontent-gmp1-1.cdninstagram.com/vp/e7643153cf33ecccd35735f3f5737541/5E1727F7/t51.2885-19/s150x150/38502238_2023435627722875_8237163518952996864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                            alt="profile_img"/>
                    </div>
                    <div className="main-right-recommendation-name-else-follow-container">
                        <div>
                            <div className="main-right-recommendation-name">joonsikyang</div>
                            <div className="main-right-recommendation-else">meng.jini님 외 1명이 팔로우합니다</div>
                        </div>
                        <div className="main-right-recommendation-follow">팔로우</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Recommend;
