import React, {Component} from 'react'

export class MainRightProfile extends Component {
    render() {
        return (
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
        )
    }
}

export default MainRightProfile
