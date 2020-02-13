import React, {Component} from 'react';
import './Aside.scss';

export class Aside extends Component {
    render() {
        return (
            <div id="main-right">
                <div id="main-right-profile">
                    <div id="main-right-profile-img-container">
                        <img
                            id="main-right-profile-img"
                            src="https://scontent-gmp1-1.cdninstagram.com/vp/e7643153cf33ecccd35735f3f5737541/5E1727F7/t51.2885-19/s150x150/38502238_2023435627722875_8237163518952996864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                            alt="profile_img"/>
                    </div>
                    <div id="main-right-name-container">
                        <div id="main-right-username">joonsikyang</div>
                        <div id="main-right-name">양준식 Joon Sik Yang</div>
                    </div>
                </div>
                <div id="main-right-story-box">
                    <div className="main-right-box-top">
                        <div className="main-right-box-title">스토리</div>
                        <div className="main-right-box-seeAll">모두보기</div>
                    </div>
                    <div className="main-right-story-item">
                        <div className="main-right-story-item-img-container">
                            <img
                                className="main-right-story-item-img"
                                src="https://scontent-gmp1-1.cdninstagram.com/vp/4cd1fb57fd26a6df98fb11c25e153cee/5E33869F/t51.2885-19/s150x150/37716008_294656411089478_6120038744205557760_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                                alt="profile_img"/>
                        </div>
                        <div className="main-right-story-item-username-time-container">
                            <div className="main-right-story-item-username">jparkitrighthere</div>
                            <div className="main-right-story-item-time">8시간 전</div>
                        </div>
                    </div>
                    <div className="main-right-story-item">
                        <div className="main-right-story-item-img-container">
                            <img
                                className="main-right-story-item-img"
                                src="https://scontent-gmp1-1.cdninstagram.com/vp/fa2f2d744d86f050bd0c800ae713019e/5E19BFE0/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                                alt="profile_img"/>
                        </div>
                        <div className="main-right-story-item-username-time-container">
                            <div className="main-right-story-item-username">wecode_bootcamp</div>
                            <div className="main-right-story-item-time">4시간 전</div>
                        </div>
                    </div>
                    <div className="main-right-story-item">
                        <div className="main-right-story-item-img-container">
                            <img
                                className="main-right-story-item-img"
                                src="https://scontent-gmp1-1.cdninstagram.com/vp/9708d585e6f3ae65a94dd8387e0f6e68/5E260E92/t51.2885-19/s320x320/66799008_729185920860882_2353769179175190528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com"
                                alt="profile_img"/>
                        </div>
                        <div className="main-right-story-item-username-time-container">
                            <div className="main-right-story-item-username">meng.jini</div>
                            <div className="main-right-story-item-time">1분 전</div>
                        </div>
                    </div>
                </div>
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
                <div id="main-right-aboutInstagram">
                    <ul id="main-right-aboutInstagram-list">
                        <li className="aboutInstagram-list-items">
                            <span>
                                Instagram 정보
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                지원
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                홍보 센터
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                API
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                채용 정보
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                개인정보처리방침
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                약관
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                디렉터리
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                프로필
                            </span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>해시태그</span>
                        </li>
                        <li className="aboutInstagram-list-items">
                            <span>
                                언어
                            </span>
                        </li>
                    </ul>
                    <div id="copyright">© 2019 INSTAGRAM</div>
                </div>
            </div>
        )
    }
}

export default Aside;
